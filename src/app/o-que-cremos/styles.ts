import styled from 'styled-components';
import Link from 'next/link';

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg} 0;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md} 0;
  }
`;

export const Main = styled.main`
  flex: 1;
  max-width: ${({ theme }) => theme.breakpoints.wide};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const ArticleHeader = styled.header`
  grid-column: 1 / -1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const PreTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: block;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.brand};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }
`;

export const Intro = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text.light};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

export const StickyNav = styled.nav`
  position: sticky;
  top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: static;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const MenuTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const MenuListItem = styled.li``;

export const MenuLink = styled.a<{ $isActive: boolean }>`
  display: block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: 0.8rem;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.brand : theme.colors.text.light};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.surfaceAlt : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Article = styled.article`
  scroll-margin-top: 100px;
`;

export const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

export const ArticleText = styled.p`
  color: ${({ theme }) => theme.colors.text.main};
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ArticleReference = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.light};
  font-style: italic;
`;
