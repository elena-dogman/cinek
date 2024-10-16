import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '~/components/Header';
import { ThemeProvider } from '~/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'CineK',
  description: 'Streaming platform',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
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
