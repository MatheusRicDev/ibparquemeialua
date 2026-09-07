'use client';

import * as S from './styles';
import spotify from '@/assets/images/spotify.png';
import type { Sermon } from '@/lib/spotify/types';

type SermonsProps = {
  sermons: Sermon[];
};

export default function Sermons({ sermons }: SermonsProps) {
  const latestSermon = sermons[0];
  const otherSermons = sermons.slice(1, 5);

  return (
    <S.Section id="pregacoes">
      <S.Container>
        <S.Card>
          
          <S.LeftPanel>
            <S.PreTitle>PREGAÇÕES</S.PreTitle>
            <S.Title>Ouça nossas pregações</S.Title>
            <S.Description>
              Acompanhe as mensagens da nossa igreja no Spotify. Toda semana, uma nova palavra para o seu coração.
            </S.Description>
            <S.SpotifyButton href="https://open.spotify.com/show/0t90ErLv9l0uVcRhh4lXD6" target="_blank" rel="noopener noreferrer">
              <img src={spotify.src} alt="Spotify" />
              Acessar no Spotify
            </S.SpotifyButton>
          </S.LeftPanel>

          <S.MiddlePanel>
            <S.CoverImage $bg={latestSermon.imageUrl} />
            <S.SermonInfo>
              <S.PreTitle style={{letterSpacing: '2px', fontSize: '0.65rem'}}>ÚLTIMA PREGAÇÃO</S.PreTitle>
              <S.SermonTitle>{latestSermon.title}</S.SermonTitle>
              <S.SermonMeta>
                {latestSermon.releaseDate} &bull; {latestSermon.durationFormatted}
              </S.SermonMeta>
              <S.PlayButton href={latestSermon.spotifyUrl} target="_blank" rel="noopener noreferrer">
                <img src={spotify.src} alt="Spotify" />
                Ouvir no Spotify
              </S.PlayButton>
            </S.SermonInfo>
          </S.MiddlePanel>

          <S.RightPanel>
            <S.ListHeader>
              <h4>Mais pregações</h4>
              <a href="https://open.spotify.com/show/0t90ErLv9l0uVcRhh4lXD6" target="_blank" rel="noopener noreferrer">Ver todas &rarr;</a>
            </S.ListHeader>
            <S.List>
              {otherSermons.map((sermon, index) => (
                <S.ListItem key={sermon.id}>
                  <S.ListIndex>{index + 1}</S.ListIndex>
                  <S.ListTitle>{sermon.title}</S.ListTitle>
                  <S.ListDuration>{sermon.durationFormatted}</S.ListDuration>
                </S.ListItem>
              ))}
            </S.List>
          </S.RightPanel>

        </S.Card>
      </S.Container>
    </S.Section>
  );
}
