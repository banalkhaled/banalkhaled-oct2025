
import React from 'react';

interface OfferContent {
    title: string;
    benefits: string[];
    sprintTitle: string;
    sprintItems: {
        icon: string;
        title: string;
        description: string;
    }[];
    outro: string;
}

interface OfferDetailsProps {
    content: OfferContent;
}

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start">
        <span className="text-green-400 text-2xl mr-3 rtl:ml-3 rtl:mr-0 mt-1">✅</span>
        <span className="flex-1">{text}</span>
    </li>
);

const SprintItem: React.FC<{ icon: string; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-gray-900 p-6 rounded-lg">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);


const OfferDetails: React.FC<OfferDetailsProps> = ({ content }) => {
  return (
    <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{content.title}</h2>
                <ul className="text-lg md:text-xl text-left rtl:text-right space-y-4 max-w-2xl mx-auto mb-16">
                    {content.benefits.map((benefit, index) => <BenefitItem key={index} text={benefit} />)}
                </ul>

                <h3 className="text-2xl md:text-3xl font-bold mb-10">{content.sprintTitle}</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-16 text-left rtl:text-right">
                   {content.sprintItems.map((item, index) => <SprintItem key={index} {...item} />)}
                </div>

                <p className="text-lg md:text-xl text-gray-300">{content.outro}</p>

            </div>
        </div>
    </section>
  );
};

export default OfferDetails;
