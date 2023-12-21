import './globals.css';

import { cn } from '@devchallenges/lib';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '../components/footer';
import { Toaster } from '../components/toast-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Image Uploader',
  description: 'devchallenges - Image Uploader challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body
        className={cn(
          inter.className,
          'flex h-[100vh] flex-col items-center justify-center p-2',
        )}
      >
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
