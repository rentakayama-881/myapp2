import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'myapp',
  description: 'Fresh template: Next.js + Tailwind + NestJS + Prisma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
