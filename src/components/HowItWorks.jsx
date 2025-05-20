import icons from '../assets/icons/icons';
import { FeatureCard } from './cards/FeatureCard';
import { HowItWorkCard } from './cards/HowItWorkCard';
import { PrimarySecondaryTextWithIconCard } from './cards/PrimarySecondaryTextWithIconCard';
import { SectionHeading } from './SectionHeading';
import { PrimaryAndSecondaryText } from './text/PrimaryAndSecondaryText';

export function HowItWorks() {
    const primaryText = " Loan Management System (LMS) – Detailed Capabilities";

    const howItWorks = [
        {
            title: 'Smart Loan Servicing & Repayments',
            desc: 'Automatically schedule repayments, accept multiple payment modes, and support early repayment or refinancing with ease.',
            iconSrc: icons.LoanRepayment,
        },
        {
            title: 'Collateral & Asset Tracking',
            desc: 'Track and manage secured assets like real estate or vehicles with real-time valuation and automated release conditions.',
            iconSrc: icons.AssetsTracking,
        },
        {
            title: 'Automated Collection Management',
            desc: 'Reduce delinquency with smart reminders and escalation workflows, including agent follow-ups and overdue notices.',
            iconSrc: icons.CollectionManagement,
        },
        {
            title: 'Real-Time Portfolio Monitoring',
            desc: 'Get full visibility into loan performance with live dashboards, delinquency tracking, and default alerts.',
            iconSrc: icons.PortfolioMonitoring,
        },
        {
            title: 'Flexible Loan Structuring',
            desc: 'Customize interest rates, repayment plans, and offer hardship-based modifications tailored to borrower needs.',
            iconSrc: icons.FlexibleLoanStructure,
        }
    ];


    return (
        <section className="py-16 bg-blue-50">
            <div className="container max-w-[1200px] w-full mx-auto">
                {/* Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
                    <div className='flex flex-col items-center text-center md:items-start md:text-left'>
                        <SectionHeading title="How We Manage" />
                        <PrimaryAndSecondaryText primaryText={primaryText} />
                    </div>
                    {howItWorks.map((work, index) => (
                        <PrimarySecondaryTextWithIconCard
                            key={index}
                            index={index}
                            iconSrc={work.iconSrc}
                            imgAlt={work.title}
                            primaryText={work.title}
                            secondaryText={work.desc}
                            height='min-h-60'
                            bgColor='bg-white'
                            iconBgColor='bg-blue-50'
                            iconPadding='p-4'
                            shadow
                            hoverEffect
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}