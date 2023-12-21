// import { motion } from 'framer-motion';
import SectionHeading from './sectionHeading';
import SectionContainer from './sectionContainer';
import { useSectionInView } from '@/assets/hooks/hooks';

function About() {
  const { ref } = useSectionInView({ sectionName: 'About', options: { threshold: 0.75 } });

  return (
    <section ref={ref} id="about" className="scroll-mt-28">
      <SectionContainer
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 0.5,
          delay: 0.4,
        }}
      >
        <SectionHeading title="About Me" />
        <div className="w-3/4 lg:w-2/4 text-center">
          <div className="m-2">
            Currently a final year undergraduate student at
            {' '}
            <span className="font-bold">
              Indian
              Institute of Technology, Kanpur (IIT-K)
              {' '}
            </span>
            , pursuing my Bachelor&apos;s
            in
            {' '}
            <span className="font-bold">Computer Science and Engineering. </span>
          </div>
          <div className="m-2">
            My core interests lies in
            {' '}
            <span className="font-bold">
              Frontend Development
            </span>
            {' '}
            being
            <span className="font-bold">
              {' '}
              proficient in ReactJS, NextJS, TailwindCSS, and MongoDB.
            </span>
          </div>

          <div className="m-2">
            I am also into
            {' '}
            <span className="font-bold">competitive programming. </span>
            I love to face challenging problems and ponder
            over them until I find a solution.
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default About;
