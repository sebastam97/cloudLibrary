import Header from '@/components/layout/Header/Header';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'CloudLibrary - Tu tienda de libros en línea',
  description:
    'Descubre una amplia colección de libros en CloudLibrary. Compra tus favoritos y explora nuevos títulos desde la comodidad de tu hogar.',
  keywords: [
    'libros',
    'tienda de libros',
    'comprar libros',
    'lectura',
    'CloudLibrary'
  ],
  authors: [{ name: 'Grapidus' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Header /> {children}
        </Providers>
      </body>
    </html>
  );
}
