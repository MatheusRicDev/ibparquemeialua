import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
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

export const OutlinedButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.brand};
  border: 1px solid ${({ theme }) => theme.colors.brand};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  min-width: 0;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.lg};

  /* The horizontal line for desktop */
  &::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    opacity: 0.4;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 0;
      left: 20px;
      width: 2px;
      height: 100%;
    }
  }

  /* Right arrow for desktop horizontal line */
  &::after {
    content: '';
    position: absolute;
    top: 24px;
    right: 0;
    transform: translateY(-50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 7px solid ${({ theme }) => theme.colors.accent};
    opacity: 0.4;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: auto;
      bottom: 0;
      left: 20px;
      right: auto;
      transform: translateX(-50%);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 7px solid ${({ theme }) => theme.colors.accent};
      border-bottom: none;
    }
  }
`;

export const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    padding-left: 50px;
  }
`;

export const TimelineItem = styled.div`
  position: relative;

  /* The dot */
  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 0;
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.background};

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 4px;
      left: -38px;
      transform: none;
    }
  }
`;

export const Year = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ItemTitle = styled.h4`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 700;
  line-height: 1.3;
`;

export const ItemDesc = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text.light};
  line-height: 1.5;
`;
