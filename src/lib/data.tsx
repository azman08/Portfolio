import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/T.svg',
    title: 'TrailHive',
    description:
      'Next-generation movie review app, where you can watch review and watch trailers from Youtube and get details too.',
    technologies: ['React.js', 'Tailwind CSS', 'Swiper', 'Lottie-React'],
    links: {
      preview: 'https://trail-hive.vercel.app/',
      github: 'https://github.com/azman08/TrailHive',
      githubApi: 'https://api.github.com/repos/azman08/TrailHive',
    },
  },
  {
    image: '/projects/Q.png',
    title: 'Quiman',
    description: 'E-Commerce UI',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Framer-Motion',
      'Swiper',
      'Lottie-React',
    ],
    links: {
      preview: 'https://quiman.vercel.app/',
      github: 'https://github.com/azman08/Quiman',
      githubApi: 'https://api.github.com/repos/azman08/Quiman',
    },
  },
  {
    image: '/projects/I.png',
    title: 'IDE',
    description: 'Personal IDE where you can practice HTML , CSS & Javascript',
    technologies: ['React.js', 'Monaco-Editor', 'Tailwind CSS'],
    links: {
      preview: 'https://ide-sooty.vercel.app/',
      github: 'https://github.com/azman08/IDE',
      githubApi: 'https://api.github.com/repos/azman08/IDE',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Remote Freelancing - Full Stack Developer',
    location: 'Global (Remote)',
    description:
      'Since 2022, I have been working as a Full Stack Developer specializing in the MERN stack. I have successfully developed and deployed scalable web applications, managing both frontend and backend tasks. My expertise includes creating responsive interfaces with React, building APIs with Express and Node.js, and managing databases using MongoDB. I ensure high-quality deliverables, meeting client requirements while adhering to deadlines.',
    date: '2022 - present',
  },
  {
    title: 'Graduation',
    location: 'AKTU',
    description:
      'Graduated in 2022 with a degree in Bachelor of Technology in Computer Science and Engineering. Built a strong foundation in full-stack web development, mastering modern technologies like  MERN Stack, JavaScript, React, and Node.js through academic projects and coursework.',
    date: '2022',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.python className="size-12" /> },
  { icon: <Icons.node className="size-12" /> },
  { icon: <Icons.express className="size-12" /> },
  { icon: <Icons.mongo className="size-12" /> },
] as const;
