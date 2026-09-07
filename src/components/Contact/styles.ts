import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

export const MainContact = styled.div``;

export const PreTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.2;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.light};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const WhatsAppButton = styled.a`
  background-color: #25D366;
  color: #FFFFFF;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
`;

export const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.brand};
`;

export const InfoText = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text.light};
  line-height: 1.4;
`;

export const InfoDivider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  align-self: stretch;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 1px;
  }
`;

export const MapPlaceholder = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing.md};
  background-image: url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
`;

export const MapButton = styled.a`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.main};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const WhatsAppLink = styled.a`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 500;
  font-size: 0.85rem;

  &:hover {
    text-decoration: underline;
  }
`;
