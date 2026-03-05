import type { LandingContent } from '../types/landing';

export const landingContent: LandingContent = {
  brandName: 'aivalid.id',
  brandTagline: 'Next.js directory template',
  promoBar: {
    heading: 'Early Bird Discount – 20% off!',
    codePrefix: 'Use code',
    code: 'EARLYBIRD',
  },
  nav: {
    desktopLinks: [
      { label: 'Login', href: '/login' },
      { label: 'Register', href: '/register' },
      { label: 'Case', href: '/contoh-halaman-sudahlogin/case' },
      { label: 'Market', href: '/contoh-halaman-sudahlogin/market' },
    ],
    demoLink: {
      label: 'Demo',
      href: '#',
      external: true,
      rel: 'noopener',
    },
    primaryCta: {
      label: 'Buat akun sekarang',
      href: '#',
    },
  },
  hero: {
    overline: 'Platform yang mendampingi Anda dalam melakukan suatu oleh bantuan AI...',
    heading: 'Validasi apa yang Anda kerjakan dengan AI dan Implementasikan apa yang Anda maksud setelah berdiskusi dengan AI ',
    subheading:
      'Selesaikan masalah yang sedang Anda alami dengan AI, wujudkan hal-hal luar biasa yang Anda pikirkan',
    primaryAction: {
      label: 'Buat akun sekarang',
      href: '#',
    },
    promo: {
      discountLabel: 'Deposit tanpa fee',
      divider: '/',
      audienceLabel: 'minimum fee transaksi',
      counterValue: '3',
      counterSuffix: 'left',
      guaranteeLabel: '30-day money-back guarantee',
    },
    socialProofLabel: '200+ happy customers',
    customerAvatars: [
      '/customers/1.webp',
      '/customers/2.webp',
      '/customers/3.webp',
      '/customers/4.webp',
      '/customers/5.webp',
    ],
    mediaAlt: 'Dashboard',
  },
  stack: {
    overline: 'Built With The Best',
    heading: 'A battle-tested tech stack',
    items: [
      { label: 'React', src: '/stack/react.0b132ea8.svg', width: 569, height: 40 },
      { label: 'Next.js', src: '/stack/nextjs.5973bc62.svg', width: 394, height: 24 },
      { label: 'TypeScript', src: '/stack/typescript.198531fb.svg', width: 256, height: 40 },
      { label: 'Prisma', src: '/stack/prisma.f781690b.svg', width: 90, height: 32 },
      { label: 'TailwindCSS', src: '/stack/tailwind.c535133a.svg', width: 48, height: 40 },
      { label: 'Stripe', src: '/stack/stripe.dd2ec527.svg', width: 360, height: 30 },
      { label: 'BetterAuth', src: '/stack/better-auth.7f42edb3.svg', width: 60, height: 30 },
    ],
  },
  features: {
    heading: 'Everything you need to succeed',
    description:
      'Bangun hal-hal luar biasa secara akurat dan terarah.',
    items: [
      {
        title: 'Multiple Revenue Streams',
        description: 'Generate income through listings, featured spots, affiliate links and ads',
        icon: 'dollar-sign',
      },
      {
        title: 'SEO Optimized',
        description: 'Built with SEO best practices to help you rank higher in search results',
        icon: 'globe',
      },
      {
        title: 'Multi-Language Support',
        description: 'Reach global users with i18n support and easy translation management',
        icon: 'languages',
      },
      {
        title: 'Modern Tech Stack',
        description: 'Powered by Next.js, TypeScript, and other modern technologies',
        icon: 'code',
      },
      {
        title: 'Stripe Integration',
        description: 'Accept payments globally with built-in Stripe integration',
        icon: 'credit-card',
      },
      {
        title: 'Lightning Fast',
        description: 'Optimized for performance with static page generation and caching',
        icon: 'zap',
      },
      {
        title: 'Customizable',
        description: 'Easily customize the design and functionality to match your needs',
        icon: 'settings',
      },
      {
        title: 'AI Enabled',
        description: 'Generate professional content and get category recommendations',
        icon: 'sparkles',
      },
      {
        title: 'Advanced Analytics',
        description: 'Track visitors, user behavior, and popular listings with detailed insights',
        icon: 'chart-bar',
      },
      {
        title: 'Powerful Integrations',
        description: 'Integrate with Resend, Amazon S3, and others for seamless functionality',
        icon: 'cable',
      },
    ],
  },
  pricing: {
    overline: 'Pricing',
    heading: 'Pay once, build unlimited directories',
    description:
      "Once you get access to the codebase, it's yours forever and you can use it to launch as many directories as you want.",
    offerBadge: '20% off',
    offerDivider: '/',
    offerCounterLabel: 'first 200 customers',
    offerCounterValue: '3 left',
    legalNote: 'Prices in USD. VAT may apply.',
    socialProofLabel: '200+ happy customers',
    customerAvatars: [
      '/customers/1.webp',
      '/customers/2.webp',
      '/customers/3.webp',
      '/customers/4.webp',
      '/customers/5.webp',
    ],
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        description: 'The full codebase, ready to launch',
        priceLabel: '159',
        strikeLabel: '199',
        benefits: [
          { label: 'Complete Next.js v16 boilerplate', icon: 'package-open' },
          { label: 'Secure authentication', icon: 'lock' },
          { label: 'AI content generation', icon: 'brain' },
          { label: 'Seamless payments with Stripe', icon: 'credit-card' },
          { label: 'TailwindCSS & Shadcn UI library', icon: 'brush' },
          { label: 'SEO optimized pages and blog', icon: 'pen-tool' },
          { label: 'Multi-language support with next-intl', icon: 'globe' },
          { label: 'Email support', icon: 'mail' },
          { label: 'Lifetime updates for free!', icon: 'life-buoy', tooltip: 'Last updated: Mar 1, 2026' },
        ],
        cta: {
          label: 'Get Lifetime Access',
          href: '#',
        },
      },
      {
        id: 'pro',
        name: 'Pro',
        description: 'Ship faster with AI & community',
        priceLabel: '199',
        strikeLabel: '249',
        badge: 'Most Popular',
        benefits: [
          { label: 'Everything in Basic, plus:' },
          { label: 'Priority support', icon: 'headphones' },
          { label: 'Exclusive Discord access', icon: 'bot' },
          {
            label: 'AI Rules for Cursor, Claude, etc.',
            icon: 'sparkles',
            tooltip: 'Custom rules for your favorite AI coding agents to speed up development of custom features.',
          },
        ],
        cta: {
          label: 'Get Lifetime Access',
          href: '#',
        },
      },
      {
        id: 'custom',
        name: 'Custom',
        description: 'We set it up for you',
        note: 'From',
        priceLabel: '999',
        benefits: [
          { label: 'Everything in Pro, plus:' },
          { label: 'Full installation service', icon: 'package-open' },
          { label: 'Basic customization', icon: 'wrench' },
          { label: 'Custom domain setup', icon: 'globe' },
        ],
        cta: {
          label: 'Contact us',
          href: '#',
          external: true,
          rel: 'noopener nofollow',
        },
      },
    ],
  },
  quoteStrip: {
    text:
      'Dirstarter is FANTASTIC ⭐ This codebase is insane, Next.js, Vercel AI SDK 5, amazing admin panel, resend emails, entire Stripe setup, really 10/10. Used it to launch my website in 1 day, best money I spent this year, already seeing results!',
    authorName: 'Ilias Ism',
    authorAvatar: '/testimonials/ilias.webp',
    sourceLabel: 'Awesome Tools',
    sourceHref: '#',
  },
  faq: {
    heading: 'Frequently Asked Questions',
    description:
      "We've answered some of the most common questions about Dirstarter. If you have any other questions, please contact us.",
    items: [
      {
        question: "What's included in the boilerplate?",
        answerHtml:
          'Dirstarter includes a complete, production-ready codebase with both frontend and backend implementations. You get the full Next.js application with TypeScript, Prisma database setup, authentication system, payment integration with Stripe, admin dashboard, user management, listing management, and all the essential features needed for a directory website. The package also includes detailed documentation and installation guides.',
      },
      {
        question: 'Do I need technical knowledge to use this?',
        answerHtml:
          "While basic knowledge of React and JavaScript will be helpful, we've designed Dirstarter to be as user-friendly as possible. The documentation includes step-by-step setup instructions, and most customizations can be made through configuration files. However, for significant customizations, some technical knowledge will be beneficial.",
      },
      {
        question: 'How do I customize the design and features?',
        answerHtml:
          'Dirstarter uses TailwindCSS and shadcn/ui for styling, making it easy to customize the look and feel. The component-based architecture allows you to modify or extend functionality easily. We provide comprehensive documentation on customization, and the codebase is well-commented for better understanding.',
      },
      {
        question: 'What kind of support is included?',
        answerHtml:
          'Basic licenses include community support and access to documentation. Pro adds priority email support with 24-48 hour response time and access to a private Discord community. Custom includes everything in Pro plus hands-on setup assistance.',
      },
      {
        question: 'Do you offer refunds?',
        answerHtml:
          "After you've got access to the repo, Dirstarter is yours forever, so it can't be refunded. But rest assured, users of Dirstarter ship directories in 7 days on average and make their first $ online in record time.",
      },
      {
        question: 'Can I upgrade from Basic to Pro?',
        answerHtml:
          'Yes, absolutely! You can upgrade from Basic to Pro at any time. Simply <a href="https://buy.polar.sh/polar_cl_w0sFgQjXKy0BfFbmh4aD5r2btJsN52uLa2gRD3yI6Hl" target="_blank" rel="noopener noreferrer">purchase the Upgrade Package</a> and you\'ll gain access to all Pro features.',
      },
      {
        question: 'How do I deploy my directory website?',
        answerHtml:
          "Dirstarter is optimized for deployment on Vercel, and includes detailed deployment instructions. You can deploy with just a few clicks using Vercel's platform. We also provide guidance for deploying to other platforms like Netlify, DigitalOcean, etc.",
      },
      {
        question: 'Can I monetize my directory website?',
        answerHtml:
          'Dirstarter includes multiple monetization features out of the box: paid listings, featured spots, and advertising spaces. You can enable or disable these features as needed, and the Stripe integration makes it easy to start accepting payments from day one.',
      },
      {
        question: 'How are updates handled?',
        answerHtml:
          "We regularly release updates with new features, security patches, and improvements. You'll be notified of updates through email, and can easily update your installation through the git repository.",
      },
      {
        question: 'What are the technical requirements?',
        answerHtml:
          "You'll need Node.js 18+ and npm/yarn installed on your development machine. For deployment, we recommend Vercel for the best experience, but any platform supporting Next.js will work. A basic understanding of React and JavaScript is helpful but not required for basic usage.",
      },
      {
        question: 'Can I remove the "Built with Dirstarter" branding?',
        answerHtml:
          "You can remove the branding entirely if needed. However, we encourage keeping it as a way to both support our project and monetize your directory website. By joining our Affiliate Program, you'll earn a 30% commission on every sale through your unique affiliate link.",
      },
    ],
  },
  testimonials: {
    overline: 'Testimonials',
    heading: 'Hundreds of makers love Dirstarter',
    description:
      "Dirstarter is a powerful tool that has helped many makers launch their directory websites in record time. Here's what some of them have to say about it.",
    viewAllAction: {
      label: 'View all testimonials',
      href: '#',
    },
    items: [
      {
        quote:
          "Thanks Piotr! The boilerplate saved me so much time. Really clean and easy to work with. Definitely recommend it if anyone's building a directory!",
        name: 'Zack Ho',
        source: 'NewsletterStack',
        avatar: '/testimonials/zackho.webp',
      },
      {
        quote:
          'Dirstarter is FANTASTIC ⭐ This codebase is insane, Next.js, Vercel AI SDK 5, amazing admin panel, resend emails, entire Stripe setup, really 10/10. Used it to launch my website in 1 day, best money I spent this year, already seeing results!',
        name: 'Ilias Ism',
        source: 'Awesome Tools',
        avatar: '/testimonials/ilias.webp',
        sourceHref: '#',
      },
      {
        quote:
          "Great stuff, congrats Piotr! The best directory boilerplate out there (and yes, I've paid for a few of them already lol)",
        name: 'Alex Kirillov',
        source: 'ContentCreators.com',
        avatar: '/testimonials/alex.webp',
      },
      {
        quote:
          'I\'m really impressed by the quality of the code, the UX and design, and all the thoughtful little features Piotr has built in. Fantastic work! 🫶',
        name: 'Oleksii Sribnyi',
        source: 'PayOnceApps.com',
        avatar: '/testimonials/oleksii.webp',
      },
      {
        quote: 'Love what you are doing with Dirstarter and generally building your own ecosystem. Respect!',
        name: 'Dudu',
        source: 'Toolfolio',
        avatar: '/testimonials/dudu.webp',
      },
      {
        quote: 'Loved the repository! Zero filler code and great architecture. Not to mention the docs :)',
        name: 'Tiago Martins',
        source: 'Steps.org',
        avatar: '/testimonials/tiago.webp',
        sourceHref: '#',
      },
      {
        quote: "Best directory boilerplate I've ever come across. Amazing job, Piotr! 5 stars ⭐",
        name: 'Carl Poppa',
        source: 'SaaSBoilerplates',
        avatar: '/testimonials/carl.webp',
        quoteHref: '#',
        quoteRel: 'noopener nofollow',
      },
      {
        quote:
          "This is the best value I've ever gotten for money spent. I honestly believe the offering is significantly underpriced. The value from it and the time it saves is worth more than the purchase price.",
        name: 'Faturoti Kayode',
        source: 'Founder, Cardtonic',
        avatar: '/testimonials/faturoti.webp',
      },
      {
        quote:
          "Your directory is amazing! It's already indexed and I got the first rankings. Everything feels very solid and very well designed.",
        name: 'Oliver Mahrle',
        source: 'Founder, Marketing Experten',
        avatar: '/testimonials/oliver.webp',
      },
      {
        quote:
          "It's like WordPress (in the best way possible) for building directory sites. Dirstarter perfectly solves the template problem for anyone looking to build alternatives, recommendations, or insights platforms.",
        name: 'bycodao',
        source: 'Developer',
      },
    ],
  },
  bottomCta: {
    overline: 'Join hundreds of directory builders',
    heading: 'Build your directory, launch, earn',
    description:
      "Don't waste time on Stripe subscriptions or designing a pricing section. Get started today with our battle-tested stack and built-in monetization features.",
    action: {
      label: 'Get Lifetime Access',
      href: '#',
    },
  },
  footer: {
    description: 'Next.js directory template for building profitable directory websites.',
    productLinks: [
      { label: 'Buy Now', href: '#' },
      { label: 'Demo', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Testimonials', href: '#' },
    ],
    resourceLinks: [
      { label: 'Blog', href: '#' },
      { label: 'Showcase', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Become an Affiliate', href: '#' },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'About', href: '#' },
    ],
    socialLinks: [
      { label: 'GitHub', href: '#', icon: 'github' },
      { label: 'X', href: '#', icon: 'x' },
      { label: 'Bluesky', href: '#', icon: 'bluesky' },
      { label: 'Email', href: '#', icon: 'mail' },
    ],
    copyright: '© 2026 AIvalid',
  },
};
