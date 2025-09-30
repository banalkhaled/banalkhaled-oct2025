import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon.tsx';
import EmailIcon from './icons/EmailIcon.tsx';

interface FooterContent {
    name: string;
    rights: string;
    linkedin: string;
    email: string;
    bio: string;
}

interface FooterProps {
    content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
    return (
        <footer className="bg-black py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-8 text-center text-gray-400">
                <h3 className="text-2xl font-bold text-white mb-4">{content.name}</h3>
                <p className="max-w-2xl mx-auto mb-8 text-gray-300">
                    {content.bio}
                </p>
                <div className="flex justify-center items-center space-x-6 mb-6">
                     <a href={content.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                        <LinkedInIcon className="w-8 h-8" />
                    </a>
                     <a href={`mailto:${content.email}`} aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
                        <EmailIcon className="w-8 h-8" />
                    </a>
                </div>
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} {content.name}. {content.rights}</p>
            </div>
        </footer>
    );
};

export default Footer;
