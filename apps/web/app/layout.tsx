import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'aivalid.id',
    template: '%s | aivalid.id',
  },
  description:
    'Platform validasi output AI untuk membantu pengguna memastikan hasil lebih akurat sebelum dieksekusi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
