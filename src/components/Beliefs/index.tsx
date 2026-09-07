'use client';

import * as S from './styles';
import { beliefs } from '@/data/beliefs';
import Link from 'next/link';

export default function Beliefs() {
  return (
    <S.Section id="cremos">
      <S.Container>
        
        <S.LeftColumn>
          <S.PreTitle>O QUE CREMOS</S.PreTitle>
          <S.Title>A Confissão de Fé<br/>de New Hampshire</S.Title>
          <S.Description>
            Cremos nas verdades fundamentais da Palavra de Deus, 
            conforme expressas na Confissão de Fé de New Hampshire, 
            que nos guia na doutrina, na vida e no serviço a Deus.
          </S.Description>
          
          <S.CTAButton as={Link} href="/o-que-cremos">
            &#128196; Ler a Confissão completa &rarr;
          </S.CTAButton>
        </S.LeftColumn>

        <S.RightColumn>
          <S.Grid>
            {beliefs.map((item) => (
              <S.Card key={item.id}>
                <S.IconPlaceholder>
                  {item.icon === 'Book' && '📖'}
                  {item.icon === 'Trinity' && '⛬'}
                  {item.icon === 'Cross' && '✝'}
                  {item.icon === 'People' && '👥'}
                </S.IconPlaceholder>
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardText>{item.description}</S.CardText>
                <S.CardReference>{item.reference}</S.CardReference>
              </S.Card>
            ))}
          </S.Grid>
        </S.RightColumn>

      </S.Container>
    </S.Section>
  );
}
