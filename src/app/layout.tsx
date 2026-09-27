import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import Accessibility from '@/components/Accessibility';
import favicon from '@/assets/images/favicon.png';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
});

export const metadata: Metadata = {
  title: 'Primeira Igreja Batista no Parque Meia Lua',
  description: 'Site institucional da PIB Parque Meia Lua',
  icons: {
    icon: [
      {
        url: favicon.src,
        type: 'image/png',
        sizes: `${favicon.width}x${favicon.height}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>
          {children}
          <Accessibility />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
