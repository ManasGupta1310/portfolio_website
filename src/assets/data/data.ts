import React from 'react';
import {
  FaGithub, FaTwitter, FaDiscord, FaEnvelope, FaLinkedin,
} from 'react-icons/fa';
import Paradime from '../icons/paradime';
import JPMC from '../icons/jpmc';

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
    icon: FaGithub,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/manasg20/',
    icon: FaLinkedin,
  },
  {
    name: 'Mail',
    href: 'mailto:mmanasggupta@gmail.com',
    icon: FaEnvelope,
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/773440115930914816',
    icon: FaDiscord,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mmanasgupta',
    icon: FaTwitter,
  },
] as const;

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
    title: 'Product Engineer : Frontend',
    company: 'Paradime.io',
    location: 'Remote, India',
    description: '',
    icon: React.createElement(Paradime),
    date: 'May 2022 - April 2023',
  },
  {
    title: 'Quantitative Researcher Intern',
    company: 'JP Morgan Chase',
    location: 'Mumbai, India',
    description: '',
    icon: React.createElement(JPMC),
    date: '2019 - 2021',
  },
] as const;

export const skillsData = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'MongoDB',
  'Framer',
  'Redux',
  'Node.js',
  'Express',
  'tRPC',
  'Git',
  'Jest',
  'React Testing Library',
] as const;
