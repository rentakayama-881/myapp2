import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dirstarter.com'),
  title: 'Dirstarter – Next.js Directory Template',
  description:
    'A complete, customizable Next.js directory template with built-in payments, SEO, and AI content – pay once, launch unlimited directories.',
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://dirstarter.com',
  },
  openGraph: {
    title: 'Dirstarter – Next.js Directory Template',
    description:
      'A complete, customizable Next.js directory template with built-in payments, SEO, and AI content – pay once, launch unlimited directories.',
    url: 'https://dirstarter.com',
    siteName: 'Dirstarter',
    images: [
      {
        url: 'https://dirstarter.com/opengraph.png',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dirstarter',
    creator: '@piotrkulpinski',
    title: 'Dirstarter – Next.js Directory Template',
    description:
      'A complete, customizable Next.js directory template with built-in payments, SEO, and AI content – pay once, launch unlimited directories.',
    images: ['https://dirstarter.com/opengraph.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth inter_974009b0-module__ZYDm7W__variable geist_mono_a8b74147-module__ep2POW__variable"
    >
      <body className="flex flex-col min-h-screen bg-black text-foreground font-sans">{children}</body>
    </html>
  );
}
