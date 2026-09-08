'use client';

import * as S from './styles';
import logo from '@/assets/images/logo.png';
import instagram from '@/assets/images/instagram.png';
import spotify from '@/assets/images/spotify.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.Container>
        <S.TopSection>
          <S.LogoArea>
            <img src={logo.src} alt="PIB Parque Meia Lua" />
          </S.LogoArea>
          
          <S.Tagline>
            Soli Deo Gloria &mdash; Somente a Deus a glória
          </S.Tagline>
          
          <S.SocialLinks>
            <S.SocialIcon href="https://www.instagram.com/pibmeialua/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagram.src} alt="Instagram" />
            </S.SocialIcon>
            <S.SocialIcon href="#" aria-label="Spotify">
              <img src={spotify.src} alt="Spotify" />
            </S.SocialIcon>
          </S.SocialLinks>
        </S.TopSection>

        <S.BottomSection>
          <S.Copyright>
            PIB Parque Meia Lua &copy; {currentYear}. Todos os direitos reservados.
          </S.Copyright>
        </S.BottomSection>
      </S.Container>
    </S.FooterContainer>
  );
}
