import styled from 'styled-components';
import capaInit from '@/assets/images/capaInit.jpeg';

export const HeroSection = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    height: 100%;
    background-image: url(${capaInit.src});
    background-size: cover;
    background-position: center;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 100%;
      height: 50%;
      top: 0;
      clip-path: none;
      opacity: 0.3;
    }
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    align-items: center;
    text-align: center;
    margin-top: 40%;
  }
`;

export const WelcomeText = styled.span`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: block;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: 590px;

  span {
    color: ${({ theme }) => theme.colors.accent};
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 3.5rem;
    max-width: 420px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.2rem;
    max-width: 100%;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.light};
  max-width: 400px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled.a`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.onAccent};
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const SecondaryButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.brand};
  border: 1px solid ${({ theme }) => theme.colors.brand};
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.background};
  z-index: 3;
  font-size: 0.8rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  &::before {
    content: '';
    width: 1px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
