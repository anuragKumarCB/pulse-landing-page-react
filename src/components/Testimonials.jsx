
import { useState } from 'react';
import Testimonial1 from "../assets/images/testimonial1.jpg";
import { SectionHeading } from './SectionHeading';
import { PrimaryAndSecondaryText } from './text/PrimaryAndSecondaryText';

export function Testimonials() {
    const primaryText = "Real Results with Pulse";

    const testimonials = [
        {
            text: 'Pulse has cut our loan origination time in half.',
            name: 'Digital Bank',
            role: 'Chief Lending Officer',
            img: Testimonial1,
            background: Testimonial1
        },
        {
            text: 'The automated risk analysis features of Pulse helped us reduce defaults by 30%.',
            name: 'FinTech Company',
            role: 'Risk Manager',
            img: Testimonial1,
            background: Testimonial1
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-16 bg-white text-white">
            <div className="container mx-auto px-4 relative flex flex-col items-center">
                <div className="flex flex-col items-center mb-8 text-center">
                    <SectionHeading title="Testimonials" />
                    <PrimaryAndSecondaryText primaryText={primaryText} />
                </div>
                <div className="relative w-full max-w-80  h-80"> //sm:max-w-md md:max-w-lg
                    <div className="absolute top-[5%] left-[5%] w-full h-full bg-gray-700 bg-opacity-50"></div>

                    <div
                        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-6 sm:p-8 md:p-10 flex flex-col items-start justify-center"
                    >
                        <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight">
                            "{currentTestimonial.text}"
                        </blockquote>
                        <div className="flex items-center">
                            <img
                                src={currentTestimonial.img}
                                alt={currentTestimonial.name}
                                className="w-12 h-12 rounded-full mr-4 bg-cover"
                            />
                            <div>
                                <p className="font-semibold">{currentTestimonial.name}</p>
                                <p className="text-sm text-gray-300">{currentTestimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-10 space-x-4">
                    <button
                        onClick={prevTestimonial}
                        className="bg-[#029ab8] p-2 rounded-full hover:bg-[#04afd1] transition"
                    >
                        <svg className="w-6 h-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="bg-[#029ab8] p-2 rounded-full hover:bg-[#04afd1] transition"
                    >
                        <svg className="w-6 h-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section >
    );
}