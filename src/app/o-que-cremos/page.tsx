'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import * as S from './styles';
import { confessionArticles } from '@/data/confession';

export default function OQueCremos() {
  const [activeArticle, setActiveArticle] = useState('');

  const handleMenuClick = (id: string) => {
    setActiveArticle(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <S.PageContainer>
      <Header />
      <S.BackLink href="/">&larr; Voltar para a página inicial</S.BackLink>
      <S.Main>
        <S.ArticleHeader>
          <S.PreTitle>Nossa Doutrina</S.PreTitle>
          <S.Title>Confissão de Fé de New Hampshire</S.Title>
          <S.Intro>
            Adotada em 1833, esta declaração expressa os princípios 
            fundamentais da nossa fé baseados unicamente nas Escrituras Sagradas.
          </S.Intro>
        </S.ArticleHeader>

        <S.StickyNav>
          <S.MenuTitle>Artigos</S.MenuTitle>
          <S.MenuList>
            {confessionArticles.map((article) => (
              <S.MenuListItem key={article.id}>
                <S.MenuLink
                  href={`#${article.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(article.id);
                  }}
                  $isActive={activeArticle === article.id}
                >
                  {article.number}. {article.title}
                </S.MenuLink>
              </S.MenuListItem>
            ))}
          </S.MenuList>
        </S.StickyNav>

        <S.Content>
          {confessionArticles.map((article) => (
            <S.Article key={article.id} id={article.id}>
              <S.ArticleTitle>{article.number}. {article.title}</S.ArticleTitle>
              <S.ArticleText>{article.text}</S.ArticleText>
              <S.ArticleReference>{article.reference}</S.ArticleReference>
            </S.Article>
          ))}
        </S.Content>
      </S.Main>
      <Footer />
    </S.PageContainer>
  );
}
