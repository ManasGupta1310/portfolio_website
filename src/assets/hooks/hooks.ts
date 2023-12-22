import { useEffect } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';
import { useActiveSectionContext, SectionName } from '@/context/active-section-context';

type useSectionInViewProps = {
    sectionName: SectionName;
    options?: IntersectionOptions;
};

export const useSectionInView = ({
  sectionName,
  options = {},
}:useSectionInViewProps) => {
  const { ref, inView } = useInView(options);
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
};
