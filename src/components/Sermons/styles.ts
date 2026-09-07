import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? '#1e3a5f' : theme.colors.brand};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  overflow: hidden;
  color: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  min-height: 380px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const LeftPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: ${({ theme }) =>
    theme.name === 'dark'
      ? 'linear-gradient(135deg, #1e3a5f 0%, #0f2440 100%)'
      : 'linear-gradient(135deg, rgba(0,51,102,1) 0%, rgba(0,35,70,1) 100%)'
  };

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    height: 100px;
    background-image: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px);
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const PreTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 400px;
  line-height: 1.5;
`;

export const SpotifyButton = styled.a`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  z-index: 2;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
  }
`;

export const MiddlePanel = styled.div`
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.2)'
  };
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  border-left: 1px solid rgba(255,255,255,0.05);
  border-right: 1px solid rgba(255,255,255,0.05);
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const CoverImage = styled.div<{ $bg: string }>`
  width: 140px;
  height: 140px;
  min-width: 140px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
    min-width: 180px;
  }
`;

export const SermonInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
`;

export const SermonTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SermonMeta = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const PlayButton = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #0A2558;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`;

export const RightPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) =>
    theme.name === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'
  };
  display: flex;
  flex-direction: column;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
  }

  a {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.7);

    &:hover {
      color: white;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 0.9rem;
  color: rgba(255,255,255,0.9);
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid rgba(255,255,255,0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const ListIndex = styled.span`
  color: rgba(255,255,255,0.5);
  font-weight: 600;
  width: 20px;
`;

export const ListTitle = styled.span`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListDuration = styled.span`
  color: rgba(255,255,255,0.5);
  font-size: 0.8rem;
`;
