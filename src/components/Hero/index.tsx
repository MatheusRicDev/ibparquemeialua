'use client';

import * as S from './styles';
import spotify from '@/assets/images/spotify.png';

export default function Hero() {
  return (
    <S.HeroSection id="inicio">
      <S.HeroContent>
        <S.WelcomeText>BEM-VINDO À</S.WelcomeText>
        <S.Title>
          Igreja Batista do <span>Parque Meia Lua</span>
        </S.Title>
        <S.Subtitle>
          Uma igreja que ama a Deus, as pessoas e vive o evangelho todos os dias.
        </S.Subtitle>
        
        <S.ButtonGroup>
          <S.PrimaryButton href="#historia">
            Conheça nossa igreja &rarr;
          </S.PrimaryButton>
          <S.SecondaryButton href="#pregacoes">
            <img src={spotify.src} alt="Spotify" />
            Ouça nossas pregações
          </S.SecondaryButton>
        </S.ButtonGroup>
      </S.HeroContent>

      <S.ScrollIndicator>Role para descobrir</S.ScrollIndicator>
    </S.HeroSection>
  );
}
