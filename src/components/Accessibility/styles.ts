import styled, { createGlobalStyle } from 'styled-components';

export const A11yGlobalStyle = createGlobalStyle`
  html[data-a11y-contrast] body {
    background-color: #000000 !important;
    color: #ffffff !important;
  }

  html[data-a11y-contrast]
    body
    *:not([vw]):not([vw] *):not([data-a11y-root]):not([data-a11y-root] *):not(#vlibras-access-wrapper) {
    background-color: transparent !important;
    color: #ffffff !important;
    border-color: #ffe600 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  html[data-a11y-underline] body a,
  html[data-a11y-contrast] body a {
    text-decoration: underline !important;
    text-underline-offset: 3px;
  }

  #vlibras-access-wrapper {
    display: none !important;
  }
`;

export const Root = styled.div`
  position: fixed;
  top: 110px;
  right: 16px;
  z-index: 2147483647;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: 768px) {
    right: 6px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  background-color: #0b5ca8;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.28);
  transition: opacity 0.25s ease;

  @media (max-width: 768px) {
    opacity: 0.5;

    &:hover,
    &:focus-within {
      opacity: 1;
    }
  }
`;

export const StackButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }

  & + & {
    border-top: 2px solid #ffffff;
  }

  svg {
    width: 21px;
    height: 21px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: -4px;
  }
`;

export const Label = styled.span`
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  width: max-content;
  max-width: 0;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  background-color: #0b5ca8;
  color: #ffffff;
  border-radius: 8px 0 0 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.28);
  transition: max-width 0.35s ease, padding 0.35s ease, opacity 0.25s ease;

  ${StackButton}:hover &,
  ${StackButton}:focus-visible & {
    max-width: 260px;
    padding: 0 14px;
    opacity: 1;
  }
`;

export const Panel = styled.div`
  width: min(320px, calc(100vw - 32px));
  max-height: min(520px, calc(100vh - 190px));
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.main};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const PanelTitle = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.title};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const GroupLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.text.light};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ActionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0.5rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.brand};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const ZoomValue = styled.span`
  min-width: 56px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.main};
`;

export const ToggleOption = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  padding: 0.5rem 0.65rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.accent : theme.colors.border};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.surfaceAlt : theme.colors.background};
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 0.85rem;
  font-weight: 500;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SwitchDot = styled.span<{ $active: boolean }>`
  flex-shrink: 0;
  width: 34px;
  height: 18px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  transition: ${({ theme }) => theme.transitions.default};

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: ${({ $active }) => ($active ? '17px' : '1px')};
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: left 0.2s ease-in-out;
  }
`;

export const ResetButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: none;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.8rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
