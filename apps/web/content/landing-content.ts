import type { LandingContent } from '../types/landing';

export const landingContent: LandingContent = {
  brandName: 'aivalid.id',
  brandTagline: 'AI output validation',
  promoBar: {
    heading: 'Early Access Placeholder — diskon sementara',
    codePrefix: 'Use code',
    code: 'TEMP20',
  },
  nav: {
    desktopLinks: [
      { label: 'Pricing', href: '#pricing' },
      { label: 'Showcase', href: '#' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Affiliates', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Docs', href: '#' },
    ],
    demoLink: {
      label: 'Demo',
      href: '#',
    },
    primaryCta: {
      label: 'CTA Primary (sementara)',
      href: '#',
    },
  },
  hero: {
    overline: 'Positioning sementara untuk pengguna AI',
    heading:
      'Kamu ngerjain tugas dengan asisten AI tapi hasilnya seringkali tidak valid, tenang, kita selesaikan bareng bareng',
    subheading:
      'Kamu tahu modul, bestpractice, teknik dan ilmu terbaik, tapi seringkali membutuhkan seorang profesional yang memahami seluk beluk di bidangnya guna menyalurkan apa yang kamu pikirkan bisa di implementasikan',
    primaryAction: {
      label: 'Get Started (sementara)',
      href: '#',
    },
    promo: {
      discountLabel: '20% off',
      divider: '/',
      audienceLabel: 'first 200 customers',
      counterValue: '3',
      counterSuffix: 'left',
      guaranteeLabel: '30-day money-back guarantee',
    },
    socialProofLabel: '200+ happy customers',
    customerAvatars: [
      '/placeholders/avatar-1.svg',
      '/placeholders/avatar-2.svg',
      '/placeholders/avatar-3.svg',
      '/placeholders/avatar-4.svg',
      '/placeholders/avatar-5.svg',
    ],
    mediaAlt: 'Dashboard',
  },
  stack: {
    overline: 'Built With The Best',
    heading: 'A battle-tested tech stack',
    items: [
      { label: 'React', height: 40 },
      { label: 'Next.js', height: 24 },
      { label: 'TypeScript', height: 40 },
      { label: 'Prisma', height: 32 },
      { label: 'TailwindCSS', height: 40 },
      { label: 'Stripe', height: 30 },
      { label: 'BetterAuth', height: 30 },
    ],
  },
  features: {
    heading: 'Everything you need to succeed',
    description:
      'Ini komponen placeholder yang meniru pola style referensi. Semua konten bisa kamu ganti tanpa ubah struktur komponen.',
    items: [
      {
        title: 'Feature Placeholder 01',
        description: 'Deskripsi sementara untuk fitur pertama.',
        icon: 'dollar-sign',
      },
      {
        title: 'Feature Placeholder 02',
        description: 'Deskripsi sementara untuk fitur kedua.',
        icon: 'globe',
      },
      {
        title: 'Feature Placeholder 03',
        description: 'Deskripsi sementara untuk fitur ketiga.',
        icon: 'languages',
      },
      {
        title: 'Feature Placeholder 04',
        description: 'Deskripsi sementara untuk fitur keempat.',
        icon: 'code',
      },
      {
        title: 'Feature Placeholder 05',
        description: 'Deskripsi sementara untuk fitur kelima.',
        icon: 'credit-card',
      },
      {
        title: 'Feature Placeholder 06',
        description: 'Deskripsi sementara untuk fitur keenam.',
        icon: 'zap',
      },
      {
        title: 'Feature Placeholder 07',
        description: 'Deskripsi sementara untuk fitur ketujuh.',
        icon: 'settings',
      },
      {
        title: 'Feature Placeholder 08',
        description: 'Deskripsi sementara untuk fitur kedelapan.',
        icon: 'sparkles',
      },
      {
        title: 'Feature Placeholder 09',
        description: 'Deskripsi sementara untuk fitur kesembilan.',
        icon: 'chart-bar',
      },
      {
        title: 'Feature Placeholder 10',
        description: 'Deskripsi sementara untuk fitur kesepuluh.',
        icon: 'cable',
      },
    ],
  },
  pricing: {
    overline: 'Pricing',
    heading: 'Pay once, build faster',
    description: 'Struktur pricing sementara. Label, benefit, dan harga bisa kamu edit sendiri nanti.',
    offerBadge: '20% off',
    offerDivider: '/',
    offerCounterLabel: 'first 200 customers',
    offerCounterValue: '3 left',
    legalNote: 'Prices in USD. VAT may apply.',
    socialProofLabel: '200+ happy customers',
    customerAvatars: [
      '/placeholders/avatar-1.svg',
      '/placeholders/avatar-2.svg',
      '/placeholders/avatar-3.svg',
      '/placeholders/avatar-4.svg',
      '/placeholders/avatar-5.svg',
    ],
    tiers: [
      {
        name: 'Basic',
        description: 'Paket dasar untuk mulai cepat',
        priceLabel: '149',
        strikeLabel: '199',
        benefits: [
          'Temporary benefit one',
          'Temporary benefit two',
          'Temporary benefit three',
          'Temporary benefit four',
        ],
        cta: {
          label: 'Buy Basic (sementara)',
          href: '#',
        },
      },
      {
        name: 'Pro',
        description: 'Paket paling populer untuk scaling',
        priceLabel: '199',
        strikeLabel: '249',
        badge: 'Most Popular',
        highlighted: true,
        benefits: [
          'Everything in Basic, plus (temporary)',
          'Priority support placeholder',
          'Advanced workflow placeholder',
          'Professional review placeholder',
        ],
        cta: {
          label: 'Buy Pro (sementara)',
          href: '#',
        },
      },
      {
        name: 'Custom',
        description: 'Paket implementasi khusus',
        note: 'From',
        priceLabel: '999',
        benefits: [
          'Everything in Pro, plus (temporary)',
          'Installation service placeholder',
          'Custom workflow placeholder',
          'Dedicated support placeholder',
        ],
        cta: {
          label: 'Contact Us (sementara)',
          href: '#',
        },
      },
    ],
  },
  quoteStrip: {
    text: '“Placeholder quote: validasi AI yang cepat, rapi, dan bisa dipakai untuk keputusan penting.”',
    authorName: 'Placeholder User',
    authorAvatar: '/placeholders/avatar-1.svg',
    sourceLabel: 'Source Placeholder',
    sourceHref: '#',
  },
  faq: {
    heading: 'Frequently Asked Questions',
    description: 'FAQ sementara. Nanti bisa diganti sesuai product truth kamu.',
    items: [
      {
        question: 'Apa yang termasuk di versi awal ini?',
        answer:
          'Jawaban sementara: fondasi landing page dan design system style-first sudah siap untuk kamu lanjutkan.',
      },
      {
        question: 'Apakah kontennya bisa diganti tanpa ubah komponen?',
        answer: 'Bisa. Semua konten utama diletakkan di satu file content agar mudah dikelola.',
      },
      {
        question: 'Apakah ini sudah responsif untuk mobile?',
        answer: 'Ya. Layout section utama dirancang responsive mengikuti pola referensi.',
      },
      {
        question: 'Bagaimana update style jika nanti berubah?',
        answer: 'Token style global di globals.css, jadi update visual bisa terpusat tanpa bongkar semua section.',
      },
    ],
  },
  testimonials: {
    overline: 'Testimonials',
    heading: 'Hundreds of makers love this style',
    description: 'Konten testimonial masih temporary. Silakan ganti nanti dengan data asli.',
    viewAllAction: {
      label: 'View all testimonials',
      href: '#',
    },
    items: [
      {
        quote:
          'Placeholder testimonial: layout ini enak dipakai dan terasa premium meskipun konten masih draft.',
        name: 'User Placeholder 1',
        role: 'Founder',
        source: 'Community A',
        avatar: '/placeholders/avatar-2.svg',
      },
      {
        quote:
          'Placeholder testimonial: struktur komponennya modular, jadi gampang dipindah dan dirangkai ulang.',
        name: 'User Placeholder 2',
        role: 'Engineer',
        source: 'Community B',
        avatar: '/placeholders/avatar-3.svg',
      },
      {
        quote:
          'Placeholder testimonial: visualnya konsisten, ringkas, dan tetap kelihatan modern di mobile.',
        name: 'User Placeholder 3',
        role: 'Builder',
        source: 'Community C',
        avatar: '/placeholders/avatar-4.svg',
      },
      {
        quote: 'Placeholder testimonial: CTA dan card hierarchy-nya jelas, mudah dipahami user baru.',
        name: 'User Placeholder 4',
        role: 'PM',
        source: 'Community D',
        avatar: '/placeholders/avatar-5.svg',
      },
    ],
  },
  bottomCta: {
    overline: 'Join early users',
    heading: 'Bottom CTA Headline (sementara)',
    description: 'Bottom CTA Description (sementara).',
    action: {
      label: 'Bottom CTA Button (sementara)',
      href: '#',
    },
  },
  footer: {
    description: 'Landing starter untuk validasi AI, dengan style pattern yang siap kamu kembangkan.',
    productLinks: [
      { label: 'Buy Now', href: '#' },
      { label: 'Demo', href: '#' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Features', href: '#features' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
    resourceLinks: [
      { label: 'Blog', href: '#' },
      { label: 'Showcase', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Affiliate', href: '#' },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'License Policy', href: '#' },
    ],
    socialLinks: [
      { label: 'GitHub', href: '#', icon: 'github' },
      { label: 'X', href: '#', icon: 'x' },
      { label: 'Bluesky', href: '#', icon: 'bluesky' },
      { label: 'Email', href: '#', icon: 'mail' },
    ],
    copyright: `© ${new Date().getFullYear()} aivalid.id. All rights reserved.`,
  },
};
