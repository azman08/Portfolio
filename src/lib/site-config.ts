import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Azman Ali | MERN Stack Developer',
  description:
    "Hello, I'm Azman. I am front-end developer from India. I enjoy building sites and apps. My focus is on MERN Stack.",
  keywords: [
    'Azman Ai',
    'Front-end developer',
    'India',
    'React.js',
    'Next.js',
    'Web development',
    'Front-end',
    'UI/UX',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'MERN',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
