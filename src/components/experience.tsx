'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { experiencesData } from '@/assets/data/data';
import { useSectionInView } from '@/assets/hooks/hooks';
import 'react-vertical-timeline-component/style.min.css';
import SectionContainer from './sectionContainer';
import SectionHeading from './sectionHeading';

function Experience() {
  const { ref } = useSectionInView({ sectionName: 'Experience', options: { threshold: 0.5 } });
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionContainer>
        <SectionHeading title="My Experience" />
        <VerticalTimeline
          animate
          lineColor="black"
          layout="2-columns"
        >
          {
            experiencesData.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  visible
                  contentStyle={{
                    background: '#f3f4f6',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                  }}
                  contentArrowStyle={{
                    borderRight: '0.4rem solid #9ca3af',
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background: 'white',
                    fontSize: '1.5rem',
                  }}
                >
                  <h3 className="font-semibold capitalize">{item.company}</h3>
                  <h6 className="font-normal">{item.title}</h6>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <ul className="!mt-1 !font-normal text-gray-700 text-sm">
                    {item.description.length > 1 && item.description.map((desc) => (
                      <li key={desc} className="list-disc list-inside">
                        {desc}
                      </li>
                    ))}
                    {item.description.length <= 1 && item.description}
                  </ul>
                </VerticalTimelineElement>
              </React.Fragment>
            ))
}

        </VerticalTimeline>
      </SectionContainer>
    </section>
  );
}

export default Experience;
