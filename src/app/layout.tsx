import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
});

export const metadata: Metadata = {
  title: 'Primeira Igreja Batista no Parque Meia Lua',
  description: 'Site institucional da PIB Parque Meia Lua',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
