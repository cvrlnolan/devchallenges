import './globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { Footer } from '../components/footer';
import { TopBar } from '../components/top-bar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Catwiki',
  description: 'devchallenges - Catwiki challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <main className='container'>
          <TopBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
