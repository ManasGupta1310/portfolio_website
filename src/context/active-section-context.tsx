'use client';

import { createContext, useContext, useState } from 'react';
import { Links } from '@/assets/data/data';

export type SectionName = typeof Links[number]['name'];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
  }

  return context;
};
