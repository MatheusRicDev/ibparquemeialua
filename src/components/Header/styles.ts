import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0.875rem 0;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.name === 'dark'
      ? 'rgba(15, 23, 42, 0.95)'
      : 'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 65px;
    width: auto;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.main};
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: 2px;
    }
  }
`;

export const CTAButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text.onAccent};
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.9rem;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.brand};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 200;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 75px;
  right: 16px;
  width: 220px;
  background-color: ${({ theme }) =>
    theme.name === 'dark'
      ? theme.colors.surface
      : theme.colors.background
  };
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm};
  z-index: 201;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: transform 0.2s ease-out, opacity 0.2s ease-out, visibility 0.2s ease-out;
  transform-origin: top right;
`;

export const MobileMenuClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.light};
  cursor: pointer;
  padding: 4px;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

export const Spacer = styled.div`
  height: calc(0.875rem * 2 + 65px);
`;

export const MobileNavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.main};
  transition: ${({ theme }) => theme.transitions.default};
  text-align: left;
  padding: ${({ theme }) => theme.spacing.xs} 0;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
  }
`;
