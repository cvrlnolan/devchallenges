import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
