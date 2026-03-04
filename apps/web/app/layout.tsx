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
    <html
      lang="id"
      className="scroll-smooth inter_974009b0-module__ZYDm7W__variable geist_mono_a8b74147-module__ep2POW__variable"
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
