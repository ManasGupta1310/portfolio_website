'use client';

import Intro from '@/components/intro';
import SectionDivider from '@/components/divider';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Experience from '@/components/experience';

export default function Home() {
  return (
    <main className="pt-28 sm:pt-36">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
