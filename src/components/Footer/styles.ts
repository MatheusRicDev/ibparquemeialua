import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  padding: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const LogoArea = styled.div`
  img {
    height: 60px;
    width: auto;
  }
`;

export const Tagline = styled.div`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
    object-fit: contain;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    opacity: 0.8;
  }
`;

export const BottomSection = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.light};
`;
