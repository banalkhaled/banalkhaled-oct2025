import React from 'react';
import { Language } from '../types.ts';

interface HeaderContent {
  name: string;
  languageToggle: string;
}

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: HeaderContent;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, content }) => {
  const toggleLanguage = () => {
    setLanguage(language === Language.EN ? Language.AR : Language.EN);
  };

  return (
    <header className="py-6 px-4 sm:px-8 md:px-16 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold tracking-wider">{content.name}</h1>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 border border-gray-600 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
        >
          {content.languageToggle}
        </button>
      </div>
    </header>
  );
};

export default Header;
