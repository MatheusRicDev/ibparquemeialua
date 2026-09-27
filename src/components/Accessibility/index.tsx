'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import * as S from './styles';

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
    VLibrasWidget?: { open?: () => void; path?: string };
  }
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    vw?: string;
  }
}

type Settings = {
  contrast: boolean;
  underline: boolean;
  hover: boolean;
  zoom: number;
};

type ReadingState = 'idle' | 'reading' | 'paused';

const STORAGE_KEY = 'pib-a11y-settings';
const ZOOM_STEPS = [1, 1.1, 1.25, 1.5, 1.75, 2];
const DEFAULTS: Settings = {
  contrast: false,
  underline: false,
  hover: false,
  zoom: 1,
};

const READ_SELECTOR =
  'h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,summary,td,th,dt,dd,button,a,label';

const getSynth = () =>
  typeof window !== 'undefined' ? window.speechSynthesis : undefined;

const LIBRAS_ROOT_ID = 'vlibras-app-root';

const closeLibrasWindow = () => {
  const appRoot = document.getElementById(LIBRAS_ROOT_ID);
  if (!appRoot) return;

  appRoot.shadowRoot
    ?.querySelector<HTMLElement>('[aria-label="Fechar"]')
    ?.click();

  appRoot.removeAttribute('data-active');
};

const normalize = (value: string | null | undefined) =>
  (value || '').replace(/\s+/g, ' ').trim();

const pickVoice = (synth: SpeechSynthesis) =>
  synth.getVoices().find((voice) => voice.lang.toLowerCase().startsWith('pt'));

const readStoredSettings = (): Settings => {
  if (typeof window === 'undefined') return DEFAULTS;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULTS;

    const parsed = JSON.parse(stored) as Partial<Settings>;
    return {
      contrast: !!parsed.contrast,
      underline: !!parsed.underline,
      hover: !!parsed.hover,
      zoom: ZOOM_STEPS.includes(parsed.zoom as number)
        ? (parsed.zoom as number)
        : DEFAULTS.zoom,
    };
  } catch {
    return DEFAULTS;
  }
};

const ReaderIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

const LibrasIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
    <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
);

export default function Accessibility() {
  const [settings, setSettings] = useState<Settings>(readStoredSettings);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [readingState, setReadingState] = useState<ReadingState>('idle');

  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const chunksRef = useRef<string[]>([]);
  const sessionRef = useRef(0);
  const readingRef = useRef(false);

  useEffect(() => {
    readingRef.current = readingState !== 'idle';
  }, [readingState]);

  useEffect(() => {
    const html = document.documentElement;
    html.toggleAttribute('data-a11y-contrast', settings.contrast);
    html.toggleAttribute('data-a11y-underline', settings.underline);
    html.style.zoom = settings.zoom === 1 ? '' : String(settings.zoom);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // armazenamento indisponível
    }
  }, [settings]);

  useEffect(() => {
    if (!isPanelOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPanelOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const firstControl = panelRef.current?.querySelector<HTMLElement>('button');
    firstControl?.focus();

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isPanelOpen]);

  useEffect(() => {
    let closingLibras = false;

    const handleDocumentClick = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (rootRef.current?.contains(target)) return;

      setIsPanelOpen(false);

      if (closingLibras) return;
      if (target.closest(`#${LIBRAS_ROOT_ID}`)) return;

      closingLibras = true;
      try {
        closeLibrasWindow();
      } finally {
        closingLibras = false;
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  useEffect(() => {
    return () => {
      sessionRef.current += 1;
      getSynth()?.cancel();
    };
  }, []);

  const speakFrom = (session: number, index: number) => {
    const synth = getSynth();
    if (!synth || session !== sessionRef.current) return;

    const chunk = chunksRef.current[index];
    if (!chunk) {
      setReadingState('idle');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunk);
    utterance.lang = 'pt-BR';
    const voice = pickVoice(synth);
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      if (session !== sessionRef.current) return;
      speakFrom(session, index + 1);
    };
    utterance.onerror = () => {
      if (session !== sessionRef.current) return;
      setReadingState('idle');
    };

    synth.speak(utterance);
  };

  const collectChunks = () => {
    const source = (document.querySelector('main') ??
      document.body) as HTMLElement;
    const clone = source.cloneNode(true) as HTMLElement;

    clone
      .querySelectorAll('[data-a11y-root], [vw], script, style, noscript')
      .forEach((element) => element.remove());

    const chunks: string[] = [];
    clone.querySelectorAll(READ_SELECTOR).forEach((element) => {
      const parent = element.parentElement;
      if (parent && parent.closest(READ_SELECTOR)) return;

      const text = normalize(element.textContent);
      if (text.length > 1 && chunks[chunks.length - 1] !== text) {
        chunks.push(text);
      }
    });

    return chunks;
  };

  const startReading = () => {
    const synth = getSynth();
    if (!synth) return;

    const chunks = collectChunks();
    if (!chunks.length) return;

    sessionRef.current += 1;
    synth.cancel();

    chunksRef.current = chunks;
    const session = sessionRef.current;
    setReadingState('reading');
    window.setTimeout(() => speakFrom(session, 0), 80);
  };

  const pauseReading = () => {
    getSynth()?.pause();
    setReadingState('paused');
  };

  const resumeReading = () => {
    getSynth()?.resume();
    setReadingState('reading');
  };

  const stopReading = () => {
    sessionRef.current += 1;
    getSynth()?.cancel();
    setReadingState('idle');
  };

  useEffect(() => {
    if (!settings.hover) return;

    let disposed = false;
    let hoverTimer: number | undefined;

    const speakText = (text: string) => {
      const synth = getSynth();
      if (!synth || disposed || readingRef.current) return;

      synth.cancel();
      window.setTimeout(() => {
        if (disposed || readingRef.current) return;

        const utterance = new SpeechSynthesisUtterance(text.slice(0, 500));
        utterance.lang = 'pt-BR';
        const voice = pickVoice(synth);
        if (voice) utterance.voice = voice;
        synth.speak(utterance);
      }, 60);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || !(target instanceof Element)) return;
      if (target.closest('[data-a11y-root]') || target.closest('[vw]')) return;

      const match = target.closest(READ_SELECTOR);
      if (!match) return;

      const text = normalize(match.textContent);
      if (!text) return;

      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => speakText(text), 300);
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      disposed = true;
      window.clearTimeout(hoverTimer);
      document.removeEventListener('mouseover', handleMouseOver);
      if (!readingRef.current) getSynth()?.cancel();
    };
  }, [settings.hover]);

  const update = (patch: Partial<Settings>) =>
    setSettings((current) => ({ ...current, ...patch }));

  const changeZoom = (direction: 1 | -1) => {
    const index = Math.max(0, ZOOM_STEPS.indexOf(settings.zoom));
    const next = Math.min(
      ZOOM_STEPS.length - 1,
      Math.max(0, index + direction)
    );
    update({ zoom: ZOOM_STEPS[next] });
  };

  const resetAll = () => {
    stopReading();
    setSettings(DEFAULTS);
  };

  const openLibras = () => {
    if (typeof window.VLibrasWidget?.open === 'function') {
      window.VLibrasWidget.open();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => window.VLibrasWidget?.open?.();
    document.body.appendChild(script);
  };

  const isReading = readingState !== 'idle';

  return (
    <>
      <S.A11yGlobalStyle />

      <S.Root ref={rootRef} data-a11y-root="">
        <S.ButtonGroup>
          <S.StackButton
            ref={toggleRef}
            type="button"
            onClick={() => setIsPanelOpen((open) => !open)}
            aria-label="Leitura de tela"
            aria-expanded={isPanelOpen}
            aria-controls={isPanelOpen ? 'a11y-reader-panel' : undefined}
            title="Leitura de tela"
          >
            <S.Label aria-hidden="true">Leitura de tela</S.Label>
            <ReaderIcon />
          </S.StackButton>

          <S.StackButton
            type="button"
            onClick={openLibras}
            aria-label="Abrir conteúdo em Libras"
            title="Libras"
          >
            <S.Label aria-hidden="true">Libras</S.Label>
            <LibrasIcon />
          </S.StackButton>
        </S.ButtonGroup>

        {isPanelOpen && (
          <S.Panel
            ref={panelRef}
            id="a11y-reader-panel"
            role="dialog"
            aria-label="Painel de leitura de tela"
          >
            <S.PanelTitle>Leitura de tela</S.PanelTitle>

            <S.Group>
              <S.GroupLabel>Ler o conteúdo da página</S.GroupLabel>
              <S.Row>
                <S.ActionButton
                  type="button"
                  onClick={startReading}
                  aria-label="Iniciar leitura da página"
                >
                  ▶ Ler
                </S.ActionButton>
                {readingState === 'paused' ? (
                  <S.ActionButton
                    type="button"
                    onClick={resumeReading}
                    aria-label="Continuar leitura"
                  >
                    ▶ Continuar
                  </S.ActionButton>
                ) : (
                  <S.ActionButton
                    type="button"
                    onClick={pauseReading}
                    disabled={!isReading}
                    aria-label="Pausar leitura"
                  >
                    ⏸ Pausar
                  </S.ActionButton>
                )}
                <S.ActionButton
                  type="button"
                  onClick={stopReading}
                  disabled={!isReading}
                  aria-label="Parar leitura"
                >
                  ⏹ Parar
                </S.ActionButton>
              </S.Row>
            </S.Group>

            <S.Group>
              <S.GroupLabel>Tamanho do texto</S.GroupLabel>
              <S.Row>
                <S.ActionButton
                  type="button"
                  onClick={() => changeZoom(-1)}
                  disabled={settings.zoom <= ZOOM_STEPS[0]}
                  aria-label="Diminuir tamanho do texto"
                >
                  A−
                </S.ActionButton>
                <S.ZoomValue aria-live="polite">
                  {Math.round(settings.zoom * 100)}%
                </S.ZoomValue>
                <S.ActionButton
                  type="button"
                  onClick={() => changeZoom(1)}
                  disabled={settings.zoom >= ZOOM_STEPS[ZOOM_STEPS.length - 1]}
                  aria-label="Aumentar tamanho do texto"
                >
                  A+
                </S.ActionButton>
              </S.Row>
            </S.Group>

            <S.Group>
              <S.GroupLabel>Opções</S.GroupLabel>

              <S.ToggleOption
                type="button"
                $active={settings.hover}
                aria-pressed={settings.hover}
                onClick={() => update({ hover: !settings.hover })}
              >
                Ler ao passar o mouse
                <S.SwitchDot $active={settings.hover} />
              </S.ToggleOption>

              <S.ToggleOption
                type="button"
                $active={settings.contrast}
                aria-pressed={settings.contrast}
                onClick={() => update({ contrast: !settings.contrast })}
              >
                Alto contraste
                <S.SwitchDot $active={settings.contrast} />
              </S.ToggleOption>

              <S.ToggleOption
                type="button"
                $active={settings.underline}
                aria-pressed={settings.underline}
                onClick={() => update({ underline: !settings.underline })}
              >
                Sublinhar links
                <S.SwitchDot $active={settings.underline} />
              </S.ToggleOption>
            </S.Group>

            <S.ResetButton type="button" onClick={resetAll}>
              Reiniciar configurações
            </S.ResetButton>
          </S.Panel>
        )}
      </S.Root>

      <div vw="" className="enabled">
        <div vw-access-button="" className="active" />
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>

      <Script
        id="vlibras"
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.VLibras?.Widget) {
            new window.VLibras.Widget('https://vlibras.gov.br/app');
          }
        }}
      />
    </>
  );
}
