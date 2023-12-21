import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '../components/footer';
import { SearchContextWrapper } from '../components/search-context-wrapper';
import { Toaster } from '../components/toast-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Unsplash',
  description: 'devchallenges - My Unsplash challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='container'>
          <SearchContextWrapper>{children}</SearchContextWrapper>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
