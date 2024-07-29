import clsx from 'clsx';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.scss';

const body = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'pink dot skunk',
  description: "awices 's landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(body.className, 'bg-background')}>{children}</body>
    </html>
  );
}
