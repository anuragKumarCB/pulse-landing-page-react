import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { PrimaryAndSecondaryText } from './text/PrimaryAndSecondaryText';
import icons from '../assets/icons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import IconCard from './cards/IconCard';
import { CardPrimaryAndSecondaryText } from './text/CardPrimaryAndSecondaryText';
import { DemoButton } from './button/DemoButton';
import { requestDemoLink } from '../enum';

// SVG Icons for navigation
const PrevIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
);

const NextIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
);

export function CoreFeatures() {
    const primaryText = "Transform How You Manage Loans";
    const features = [
        {
            title: 'Loan Management System (LMS)',
            desc: 'Manage servicing, repayments, collections, and monitor loan portfolios across all loan types.',
            iconSrc: icons.LoanManagement,
        },
        {
            title: 'Loan Origination System (LOS)',
            desc: 'Automate loan applications, document verification, underwriting, and approvals with built-in risk checks.',
            iconSrc: icons.LoanOrganization,
        },
        {
            title: 'AI-Driven Decision Engine',
            desc: 'Instant loan approvals using real-time risk scoring and AI-based underwriting.',
            iconSrc: icons.AiDriven,
        },
        {
            title: 'Analytics & Reporting',
            desc: 'Get real-time dashboards, predictive analytics, and insights to improve lending performance.',
            iconSrc: icons.AnalyticsAndReporting,
        },
        {
            title: 'Multi-Channel Borrower Experience',
            desc: 'Allow borrowers to manage loans via web, mobile, and tablet with seamless digital interactions.',
            iconSrc: icons.MultiChannel,
        },
        {
            title: 'Seamless Integrations',
            desc: 'Connect effortlessly with your credit bureaus, and third-party services via APIs.',
            iconSrc: icons.ApiIntegration,
        },
    ];

    return (
        <section className="pt-20 py-14 bg-white">
            <div className="container w-full max-w-[1200px] mx-auto px-4 h-auto">
                {/* Section Heading */}
                <div className="flex flex-col items-center mb-8 text-center">
                    <SectionHeading title="Core Features" />
                    <PrimaryAndSecondaryText primaryText={primaryText} />
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12"
                    >
                        {features.map((feature, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative min-h-[400px] group w-full flex flex-col items-start px-6 py-8 rounded-2xl border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-16"
                                >
                                    {/* Animated Gradient Border */}
                                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[transparent] transition-all duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'exclude' }}></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start justify-center gap-8 z-10">
                                        <IconCard icon={feature.iconSrc} alt={feature.title} />
                                        <CardPrimaryAndSecondaryText primaryText={feature.title} secondaryText={feature.desc} />

                                    </div>

                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>
                {/* Navigation Buttons */}
                {/* <div className='bg-amber-400'>
                    <button className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-700 rounded-full p-4 shadow-md hover:bg-gray-100 transition-colors z-10">
                        <PrevIcon />
                    </button>
                    <button className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-700 rounded-full p-4 shadow-md hover:bg-gray-100 transition-colors z-10">
                        <NextIcon />
                    </button>
                </div> */}
                <DemoButton link={requestDemoLink} />

            </div>

            {/* Custom CSS for animated border */}
            <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
        </section>
    );
}