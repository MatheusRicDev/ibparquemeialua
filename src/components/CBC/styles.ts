import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: row-reverse;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const LeftColumn = styled.div`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex: none;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const PreTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.light};
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const CTAButton = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.onAccent};
  padding: 0.8rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const RightColumn = styled.div`
  flex: 0 0 500px;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex: none;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 280px;
  }
`;
