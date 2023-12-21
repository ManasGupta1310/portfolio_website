import { projectsData } from '@/assets/data/data';
import ProjectCard from './projectCard';
import SectionContainer from './sectionContainer';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/assets/hooks/hooks';

function Projects() {
  const { ref } = useSectionInView({ sectionName: 'Projects', options: { threshold: 0.5 } });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionContainer>
        <SectionHeading title="My Projects" />
        <div className="flex flex-col justify-center items-center gap-8 my-3">
          {projectsData.map((project, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default Projects;
