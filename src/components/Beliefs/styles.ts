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
  flex: 0 0 300px;

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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  min-width: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const IconPlaceholder = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.brand};
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 700;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CardReference = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.light};
`;
