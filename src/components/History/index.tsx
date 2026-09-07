'use client';

import * as S from './styles';
import { history } from '@/data/history';

export default function History() {
  return (
    <S.Section id="historia">
      <S.Container>
        
        <S.LeftColumn>
          <S.PreTitle>NOSSA HISTÓRIA</S.PreTitle>
          <S.Title>Nossa história</S.Title>
          <S.Description>
            De um pequeno grupo a uma grande família. 
            Nossa igreja tem uma história de fé, oração 
            e pessoas que servem a Deus.
          </S.Description>
          <S.OutlinedButton href="#contato">
            Conheça nossa história &rarr;
          </S.OutlinedButton>
        </S.LeftColumn>

        <S.RightColumn>
          <S.TimelineWrapper>
            <S.TimelineGrid>
              {history.map((item) => (
                <S.TimelineItem key={item.id}>
                  <S.Year>{item.year}</S.Year>
                  <S.ItemTitle>{item.title}</S.ItemTitle>
                  <S.ItemDesc>{item.description}</S.ItemDesc>
                </S.TimelineItem>
              ))}
            </S.TimelineGrid>
          </S.TimelineWrapper>
        </S.RightColumn>

      </S.Container>
    </S.Section>
  );
}
