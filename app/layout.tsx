import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WOO Group - Học Tiếng Anh Online 1 Kèm 1',
  description: 'Học tiếng Anh online 1 kèm 1 cho mọi lứa tuổi. From Zero to Fluent: English Conversation Made Easy! Mở khóa kỹ năng giao tiếp tiếng Anh cùng WOO Group.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}