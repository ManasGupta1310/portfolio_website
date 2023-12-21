import React from 'react';
import Github from '@/assets/icons/github.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Mail from '@/assets/icons/mail.svg';
import Discord from '@/assets/icons/discord.svg';
import Twitter from '@/assets/icons/twitter.svg';

export const Links = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
] as const;

export const Contacts = [
  {
    name: 'Github',
    href: 'https://github.com/ManasGupta1310',
    icon: Github,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/manasg20/',
    icon: Linkedin,
  },
  {
    name: 'Mail',
    href: 'mailto:mmanasggupta@gmail.com',
    icon: Mail,
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/773440115930914816',
    icon: Discord,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mmanasgupta',
    icon: Twitter,
  },
];

export type projectData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

export const projectsData: projectData[] = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
] as const;

export const experiencesData = [
  {
    cardTitle: 'Graduated bootcamp',
    cardSubtitle: 'Miami, FL',
    cardDetailedText:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(Github),
    title: '2019',
  },
  {
    // cardTitle: 'Front-End Developer',
    // cardSubtitle: 'Orlando, FL',
    cardDetailedText:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(Linkedin),
    title: '2019 - 2021',
  },
  {
    cardTitle: 'Full-Stack Developer',
    cardSubtitle: 'Houston, TX',
    cardDetailedText:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(Mail),
    title: '2021 - present',
  },
] as const;
