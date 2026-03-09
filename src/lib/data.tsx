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
    image: '/projects/W.png',
    title: 'Way2Foods',
    description:
      'A full-stack agri-commerce platform with secure role-based dashboards for Buyers, FPOs, APMCs, and Admins. Includes vendor/product approvals, analytics, user management, and real-time order tracking.',
    technologies: [
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
      'Cloudinary',
      'Nodemailer',
    ],
    links: {
      preview: 'https://way2foods.in',
      githubApi: 'https://api.github.com/repos/azman08/Way2Foods',
    },
  },
  {
    image: '/projects/K.png',
    title: 'Karnataka Agribusiness',
    description:
      'B2B agri-tech platform connecting Vendors, Buyers, and Admins via role-based dashboards. Features include vendor product lifecycle management, buyer inquiries, analytics tracking, and secure JWT-based APIs.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
      'Chart.js',
    ],
    links: {
      preview: 'https://karnatakaagribusiness.com',
      githubApi: 'https://api.github.com/repos/azman08/KarnatakaAgribusiness',
    },
  },
  {
    image: '/projects/Q.png',
    title: 'Quiman',
    description:
      'A modern front-end E-Commerce UI designed to deliver an engaging shopping experience. Built with responsive layouts, smooth animations, and interactive components. Features include product listing pages, category filters, animated transitions, and a mobile-friendly design for seamless usability across devices.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Framer Motion',
      'Swiper',
      'Lottie-React',
    ],
    links: {
      preview: 'https://quiman.vercel.app/',
      github: 'https://github.com/azman08/Quiman',
      githubApi: 'https://api.github.com/repos/azman08/Quiman',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Associate Software Developer',
    location: 'Anantanity IT Services Pvt Ltd',
    description:
      'Developed a real-time Cricket Scoring Engine powering a Mobile Cricket Scoring App. Built a full-stack match simulation system using Node.js, TypeScript, Express.js, MongoDB, Socket.io, and React Native. Implemented 40+ RESTful APIs with MVC architecture, middleware validation, and JWT-based role authorization, enabling ball-by-ball scoring, real-time match state synchronization, and seamless integration with CLI and mobile clients',
    date: 'Nov 2025 – Present',
  },
  {
    title: 'Web Development Intern - Full Stack Developer',
    location: 'Way2Agribusiness India Pvt. Ltd., Bengaluru',
    description:
      'Built and deployed two production-grade agri-tech platforms (karnatakaagribusiness.com, way2foods.in) using Next.js, Node.js, Express, and MongoDB. Implemented JWT authentication, role-based dashboards, REST APIs, and integrated Cloudinary, Nodemailer, and Chart.js. Configured deployment pipelines on DigitalOcean with NGINX, PM2, and SSL. Delivered responsive, mobile-first UIs and collaborated in an Agile workflow using Git.',
    date: 'Apr 2025 – Oct 2025',
  },
  {
    title: 'Remote Freelancing - Full Stack Developer',
    location: 'Global (Remote)',
    description:
      'Developed and deployed scalable web applications for global clients using the MERN stack. Designed responsive frontends with React & Tailwind, built REST APIs with Express.js & Node.js, and optimized MongoDB databases. Delivered high-quality solutions tailored to client requirements while ensuring deadlines were met.',
    date: '2022 – 2025',
  },
  {
    title: 'Graduation',
    location: 'Dr. A. P. J. Abdul Kalam Technical University, Lucknow',
    description:
      'Graduated with a B.Tech in Computer Science & Engineering (2022). Built a strong foundation in full-stack web development, completing academic and personal projects using JavaScript, MERN stack, and modern frameworks like Next.js.',
    date: '2018 – 2022',
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
