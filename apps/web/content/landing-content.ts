import { LandingContent } from '../types/landing';

export const landingContent: LandingContent = {
  brandName: 'aivalid.id',
  brandTagline: 'AI output validation platform',
  hero: {
    heading:
      'Kamu ngerjain tugas dengan asisten AI tapi hasilnya seringkali tidak valid, tenang, kita selesaikan bareng bareng',
    subheading:
      'Kamu tahu modul, bestpractice, teknik dan ilmu terbaik, tapi seringkali membutuhkan seorang profesional yang memahami seluk beluk di bidangnya guna menyalurkan apa yang kamu pikirkan bisa di implementasikan',
    primaryAction: {
      label: 'CTA Primary (sementara)',
      href: '#',
    },
    secondaryAction: {
      label: 'CTA Secondary (sementara)',
      href: '#',
    },
  },
  topNavActions: {
    primary: {
      label: 'Masuk (sementara)',
      href: '#',
    },
    secondary: {
      label: 'Mulai Sekarang (sementara)',
      href: '#',
    },
  },
  features: [
    {
      title: 'Validasi Jawaban AI (sementara)',
      description:
        'Placeholder feature sementara. Nanti kamu bisa ganti dengan value proposition final yang lebih spesifik.',
      icon: 'validation',
    },
    {
      title: 'Cek Referensi dan Klaim (sementara)',
      description:
        'Placeholder feature sementara. Fokus awal untuk menunjukkan bahwa output AI bisa diverifikasi sebelum dipakai.',
      icon: 'sources',
    },
    {
      title: 'Review Expert Eksekusi (sementara)',
      description:
        'Placeholder feature sementara. Menjembatani ide AI menjadi implementasi yang lebih aman dan dapat dipertanggungjawabkan.',
      icon: 'expert',
    },
  ],
  bottomCta: {
    heading: 'Bottom CTA Heading (sementara)',
    description:
      'Positioning sementara: aivalid.id membantu pengguna AI memvalidasi output sebelum dipakai untuk keputusan penting.',
    action: {
      label: 'Bottom CTA Button (sementara)',
      href: '#',
    },
  },
};
