'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import {
  PageContainer,
  Main,
  BackLink,
  ArticleHeader,
  PreTitle,
  Title,
  Intro,
  Content,
  Placeholder,
} from './styles';

export default function OQueCremos() {
  return (
    <PageContainer>
      <Header />
      <Main>
        <BackLink href="/">&larr; Voltar para a página inicial</BackLink>
        
        <ArticleHeader>
          <PreTitle>Nossa Doutrina</PreTitle>
          <Title>Confissão de Fé de New Hampshire</Title>
          <Intro>
            Adotada em 1833, esta declaração expressa os princípios 
            fundamentais da nossa fé baseados unicamente nas Escrituras Sagradas.
          </Intro>
        </ArticleHeader>

        <Content>
          <h2>I. Das Escrituras Sagradas</h2>
          <p>
            Cremos que a Bíblia Sagrada foi escrita por homens divinamente inspirados, e é 
            um perfeito tesouro de instrução celestial; que tem Deus por seu autor, a 
            salvação por seu fim, e a verdade, sem qualquer mistura de erro, por sua 
            matéria; que ela revela os princípios pelos quais Deus nos julgará.
          </p>
          <span className="reference">2Tm 3:16-17; 2Pe 1:21; Pv 30:5-6</span>

          <h2>II. Do Verdadeiro Deus</h2>
          <p>
            Cremos que há um, e somente um Deus vivo e verdadeiro, um Espírito infinito e 
            inteligente, cujo nome é JEOVÁ, o Criador e Supremo Governador do céu e da terra; 
            inexprimivelmente glorioso em santidade, e digno de toda possível honra, 
            confiança e amor.
          </p>
          <span className="reference">Jo 4:24; Sl 147:5; Êx 15:11; Mc 12:30</span>

          <h2>III. Da Queda do Homem</h2>
          <p>
            Cremos que o homem foi criado em santidade, sob a lei de seu Criador; mas pela 
            transgressão voluntária, caiu daquele estado santo e feliz; em consequência 
            do que toda a humanidade é agora pecadora.
          </p>
          <span className="reference">Gn 1:27; Gn 3:6-24; Rm 5:12</span>
          
          <Placeholder>
            (Restante dos artigos será inserido posteriormente)
          </Placeholder>
        </Content>
      </Main>
      <Footer />
    </PageContainer>
  );
}
