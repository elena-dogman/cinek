import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Header from '~/components/Header';
import { ThemeProvider } from '~/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'CineK',
  description: 'Streaming platform',
};

const nunito = Nunito({
  subsets: ['cyrillic'],
  weight: '400',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
