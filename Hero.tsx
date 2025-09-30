
import React from 'react';
import { whatsappLink } from '../constants.ts';

interface HeroContent {
    superhead: string;
    headline: string;
    description: string;
    cta: string;
}

interface HeroProps {
    content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="text-white bg-black">
        <div className="container mx-auto px-4 sm:px-8 py-24 md:py-48 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="text-gray-300 mb-4 text-lg md:text-xl">{content.superhead}</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{content.headline}</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
                   {content.description}
                </p>
                <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-bold text-lg px-10 py-4 rounded-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                    {content.cta}
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
