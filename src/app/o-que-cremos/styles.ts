import styled from 'styled-components';
import Link from 'next/link';

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

export const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

export const ArticleHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.brand};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.2rem;
  }
`;

export const Intro = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.light};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

export const Content = styled.article`
  color: ${({ theme }) => theme.colors.text.main};
  line-height: 1.8;
  font-size: 1.05rem;

  h2 {
    color: ${({ theme }) => theme.colors.brand};
    margin-top: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 1.75rem;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.surface};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  .reference {
    display: block;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text.light};
    margin-top: -8px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-style: italic;
  }
`;

export const Placeholder = styled.p`
  text-align: center;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.text.light};
  font-style: italic;
`;
