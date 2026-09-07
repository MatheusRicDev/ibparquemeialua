'use client';

import { useState } from 'react';
import * as S from './styles';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';
import spotify from '@/assets/images/spotify.png';
import { usePathname } from 'next/navigation';

import { useCustomTheme } from '@/lib/registry';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useCustomTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const navLinks = [
    { label: 'Início', href: isHome ? '#inicio' : '/#inicio' },
    { label: 'CBC', href: isHome ? '#cbc' : '/#cbc' },
    { label: 'O que cremos', href: isHome ? '#cremos' : '/#cremos' },
    { label: 'Nossa história', href: isHome ? '#historia' : '/#historia' },
    { label: 'Pregações', href: isHome ? '#pregacoes' : '/#pregacoes' },
    { label: 'Contato', href: isHome ? '#contato' : '/#contato' },
  ];

  return (
    <>
      <S.HeaderContainer>
        <S.NavContainer>
          <S.LogoArea as={Link} href="/">
            <img src={logo.src} alt="PIB Parque Meia Lua" />
          </S.LogoArea>

          <S.NavLinks>
            {navLinks.map((link) => (
              <S.NavLink key={link.href} href={link.href}>
                {link.label}
              </S.NavLink>
            ))}
          </S.NavLinks>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button 
              onClick={toggleTheme} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'inherit' }}
              title="Alternar tema"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            <S.CTAButton href={isHome ? '#pregacoes' : '/#pregacoes'}>
              <img src={spotify.src} alt="Spotify" />
              Ouça no Spotify
            </S.CTAButton>

            <S.MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
              ☰
            </S.MobileMenuButton>
          </div>
        </S.NavContainer>
      </S.HeaderContainer>
      <S.Spacer />

      <S.MobileMenuOverlay
        $isOpen={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <S.MobileMenu $isOpen={isMobileMenuOpen}>
        <S.MobileMenuClose onClick={() => setIsMobileMenuOpen(false)}>
          ✕
        </S.MobileMenuClose>
        {navLinks.map((link) => (
          <S.MobileNavLink
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </S.MobileNavLink>
        ))}
      </S.MobileMenu>
    </>
  );
}
