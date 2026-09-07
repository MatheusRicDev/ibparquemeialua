'use client';

import * as S from './styles';
import { cbcInfo } from '@/data/cbc';
import Link from 'next/link';
import cbc5 from '@/assets/images/cbc5.jpeg';

export default function CBC() {
  return (
    <S.Section id="cbc">
      <S.Container>
        <S.LeftColumn>
          <S.PreTitle>{cbcInfo.label}</S.PreTitle>
          <S.Title>Conheça o nosso CBC</S.Title>
          <S.Description>{cbcInfo.description}</S.Description>

          <S.CTAButton as={Link} href="/cbc">
            Conheça o nosso CBC &rarr;
          </S.CTAButton>
        </S.LeftColumn>

        <S.RightColumn>
          <S.ImageContainer>
            <img src={cbc5.src} alt="Centro Bíblico Comunitário" />
          </S.ImageContainer>
        </S.RightColumn>
      </S.Container>
    </S.Section>
  );
}
