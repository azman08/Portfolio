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
          Hi, I’m <span className="font-semibold">Azman Ali</span>, a passionate
          <span className="font-semibold">
            {' '}
            Full Stack Developer (MERN & Next.js)
          </span>
          from India. With over four years of hands-on experience, I’ve been
          deeply engaged in building modern, scalable web applications since the
          start of my graduation. What excites me most is the problem-solving
          process in programming—the thrill of transforming complex challenges
          into simple, elegant solutions. Over the years, I’ve worked on diverse
          projects ranging from personal initiatives to production-level
          platforms, sharpening my expertise in
          <span className="font-semibold">
            {' '}
            React.js, Next.js, Node.js, and MongoDB
          </span>
          . I also bring strong proficiency in{'  '}
          <span className="font-semibold">TypeScript </span>
          and <span className="font-semibold">Python</span>, along with a
          continuous drive to learn and adapt to emerging technologies. My goal
          is to create impactful applications that not only function seamlessly
          but also deliver excellent user experiences.
        </p>

        <p>
          I am actively seeking opportunities where I can contribute my
          expertise, continue learning, and grow as a developer. If you’re
          looking for someone who is passionate about building modern, scalable
          applications and eager to take on new challenges, I’d be excited to
          connect. Let’s create something impactful together!
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
