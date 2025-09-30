
import React from 'react';
import { banaImage2, whatsappLink } from '../constants.ts';
import { Language } from '../types.ts';

interface ProofAndTestimonialContent {
    title: string;
    stats: {
        value: string;
        label: string;
    }[];
    achievementsTitle: string;
    achievements: string[];
    testimonial: {
        quote: string;
        author: string;
        title: string;
    };
    finalQuestion: string;
    cta: string;
}

interface ProofAndTestimonialProps {
    content: ProofAndTestimonialContent;
    language: Language;
}

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-gray-900 p-6 rounded-lg text-center">
        <p className="text-4xl font-bold text-white">{value}</p>
        <p className="text-gray-400 mt-2">{label}</p>
    </div>
);

const ProofAndTestimonial: React.FC<ProofAndTestimonialProps> = ({ content, language }) => {
    return (
        <section className="py-16 md:py-24 bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Proof Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10">{content.title}</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                        <div className="lg:w-1/3 w-full">
                            <img src={banaImage2} alt="Bana Alkhaled smiling" className="rounded-lg shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover object-top" />
                        </div>
                        <div className="lg:w-2/3 w-full grid grid-cols-2 gap-4 md:gap-6">
                            {content.stats.map((stat, index) => <StatCard key={index} {...stat} />)}
                        </div>
                    </div>
                    
                    <div className="max-w-3xl mx-auto text-center mb-20">
                         <h3 className="text-2xl md:text-3xl font-bold mb-6">{content.achievementsTitle}</h3>
                         <ul className="list-disc list-inside text-gray-300 space-y-2 text-left rtl:text-right">
                            {content.achievements.map((item, index) => <li key={index}>{item}</li>)}
                         </ul>
                    </div>

                    {/* Testimonial Section */}
                    <div className="bg-black p-8 md:p-12 rounded-lg relative">
                        <blockquote className={`text-lg md:text-xl italic text-gray-300 border-l-4 rtl:border-l-0 rtl:border-r-4 border-gray-600 pl-6 rtl:pr-6 rtl:pl-0 ${language === 'ar' ? 'leading-loose' : 'leading-relaxed'}`}>
                            <p>"{content.testimonial.quote}"</p>
                        </blockquote>
                        <cite className="block text-right mt-6 not-italic">
                            <span className="font-bold text-white text-lg">{content.testimonial.author}</span>
                            <br />
                            <span className="text-gray-400">{content.testimonial.title}</span>
                        </cite>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center mt-20">
                         <h3 className="text-2xl md:text-3xl font-bold text-white max-w-2xl mx-auto mb-8">{content.finalQuestion}</h3>
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
            </div>
        </section>
    );
};

export default ProofAndTestimonial;
