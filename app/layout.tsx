import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Better Weekend',
  description: 'The Best way to learn',
  icons: {
    icon: '/we.svg',
    shortcut: '/we.svg',
    apple: '/we.svg',
    other: {
      rel: 'we.svg',
      url: '/we.svg',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
