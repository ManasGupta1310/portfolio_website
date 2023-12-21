import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projectData } from '@/assets/data/data';
import Chip from './chip';

function ProjectCard({
  title, description, imageUrl, tags,
} : projectData) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="group w-96 md:w-[40rem] bg-gray-100 hover:bg-gray-300 p-5 rounded-xl shadow-lg transition duration-700 overflow-hidden relative">
        <div className="md:grid grid-cols-2 gap-3">
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-2xl font-[600] p-1">{title}</h1>
            <p className="text-[1rem] font-[400] p-1 text-gray-700">{description}</p>
            <div className="flex flex-row flex-wrap gap-3">
              {tags.map((tag) => (
                <Chip name={tag} key={tag} />
              ))}
            </div>
          </div>
          <div>
            <Image
              src={imageUrl}
              alt={title}
              width={300}
              height={300}
              className="absolute hidden md:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition duration-500
            group-hover:-translate-x-[0.5rem]
            group-hover:-translate-y-[0.5rem]
            group-hover:rotate-[-4deg]
            group-hover:scale-[1.1]"
            />
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export default ProjectCard;
