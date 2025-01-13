'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          Hi, I’m Azman Ali, a passionate MERN Stack Developer from India. With
          over two years of programming experience, I have immersed myself in
          the world of coding since the start of my graduation. The
          problem-solving process in programming excites me the most—there’s
          nothing quite like the satisfaction of finding a solution to a
          challenging problem. Throughout my journey, I have worked on various
          projects, from personal initiatives to collaborative ventures, which
          have sharpened my skills and provided me with valuable hands-on
          experience. My core stack includes React.js, Next.js, JavaScript, and
          MERN Stack, along with proficiency in TypeScript and Python. I am
          committed to continuous learning and eager to adapt to new
          technologies.
        </p>
        <p>
          I am currently seeking job opportunities where I can contribute,
          learn, and grow as a developer. If you have a role that aligns with my
          skills and experience, please don’t hesitate to reach out—I’d love to
          discuss how I can add value to your team and create something amazing
          together!
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
