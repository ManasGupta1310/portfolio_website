import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Profile from '@/assets/images/profile.jpeg';
import SectionContainer from './sectionContainer';
import { useSectionInView } from '@/assets/hooks/hooks';

function Intro() {
  const { ref } = useSectionInView({ sectionName: 'Home', options: { threshold: 0.5 } });

  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem]">
      <SectionContainer classes="gap-8">
        <div className="relative">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={Profile}
              alt="Profile"
              width={300}
              height={300}
              priority
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="absolute text-4xl bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
        <motion.div
          className="relative font-normal text-gray-950 w-full text-4xl text-center sm:w-[40rem]"
          initial={{ top: 400, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
        >
          <span className="font-bold">Hello, I am Manas </span>
          and I am a
          <span className="font-bold"> Frontend Developer </span>
          working my way to being a
          <span className="font-bold"> Full-stack developer. </span>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link href="#contact" className="flex justify-center items-center bg-gray-950 w-48 text-xl text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition hover:scale-110">
            Contact Me
          </Link>
          <a
            href="Download CV"
            className="flex justify-center items-center bg-gray-950 w-48 text-xl text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition hover:scale-110"
          >
            Download CV
          </a>
        </motion.div>
      </SectionContainer>
    </section>
  );
}

export default Intro;
