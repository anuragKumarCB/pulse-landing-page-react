import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import icons from '../assets/icons/icons';
import { PrimaryAndSecondaryText } from './text/PrimaryAndSecondaryText';
import { PrimarySecondaryTextWithIconCard } from './cards/PrimarySecondaryTextWithIconCard';

export function KeyBenefits() {
    const primaryText = " Transform How You Manage Loans";
    const benefits = [
        {
            title: 'Speed Up Loan Processing',
            desc: 'Automate everything from application to approval in minutes, not days.',
            iconSrc: icons.SpeedUp,
        },
        {
            title: 'Reduce Risk & Defaults',
            desc: 'Built-in AI risk models and credit checks help you make smarter lending decisions.',
            iconSrc: icons.ReduceRisk,
        },
        {
            title: 'Maximize Compliance',
            desc: 'Stay audit-ready with automated KYC, AML, and regulatory checks.',
            iconSrc: icons.MaximizeCompliance,
        },
        {
            title: 'Lower Operational Costs',
            desc: 'Reduce manual intervention, improve team productivity, and save resources at every step.',
            iconSrc: icons.LowerCost,
        },
        {
            title: 'Enhance Customer Experience',
            desc: 'Offer borrowers a seamless digital journey from application to repayment.',
            iconSrc: icons.CustomerExperience,
        },
        {
            title: 'Scale Without Limits',
            desc: 'Pulse grows with you — from hundreds to millions of loans effortlessly.',
            iconSrc: icons.Scalability,
        },
    ];

    return (
        <section className="py-20 bg-blue-50">
            <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto">
                {/* Section Heading */}
                <div className="flex flex-col items-center mb-2 text-center">
                    <SectionHeading title="Key Benefits" />
                    <PrimaryAndSecondaryText primaryText={primaryText} />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:p-6">
                    {benefits.map((benefit, index) => (
                        <PrimarySecondaryTextWithIconCard
                            key={index}
                            index={index}
                            iconSrc={benefit.iconSrc}
                            imgAlt={benefit.title}
                            primaryText={benefit.title}
                            secondaryText={benefit.desc}
                            iconBgColor='bg-blue-50'
                            iconPadding='p-2' />
                    ))}
                </div>
            </div>
        </section>
    );
}
