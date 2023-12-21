import React from 'react';
import { Contacts } from '@/assets/data/data';
import SectionContainer from './sectionContainer';
import SectionHeading from './sectionHeading';
import { useSectionInView } from '@/assets/hooks/hooks';

function Contact() {
  const { ref } = useSectionInView({ sectionName: 'Contact', options: { threshold: 0.5 } });

  return (
    <section ref={ref} id="contact" className="scroll-mt-28">
      <SectionContainer
        classes="gap-3 p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="Contact Me" />
        <h3 className="font-normal text-">Feel free to contact me using any of the socials: </h3>
        <div className="flex items-center justify-center gap-4">
          {
                Contacts.map((contact) => (
                  <a
                    className="bg-gray-200 text-xl text-white px-2 py-2 rounded-full shadow-md hover:bg-gray-100 transition hover:scale-110"
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={contact.href}
                  >
                    <contact.icon className="w-6 h-6 text-black" />
                  </a>
                ))
            }
        </div>
      </SectionContainer>
    </section>
  );
}

export default Contact;
