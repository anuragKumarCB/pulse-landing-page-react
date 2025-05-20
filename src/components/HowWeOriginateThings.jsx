import icons from '../assets/icons/icons';
import { PrimarySecondaryTextWithIconCard } from './cards/PrimarySecondaryTextWithIconCard';
import { SectionHeading } from './SectionHeading';
import { PrimaryAndSecondaryText } from './text/PrimaryAndSecondaryText';

export function HowWeOriginateThings() {
    const primaryText = " Loan Origination System (LOS) – Detailed Capabilities"

    // const projects = [
    //     {
    //       title: 'Simplified Digital Applications',
    //       desc: 'Borrowers can apply online, submit documents, and get verified instantly using OCR and AI — no paperwork, no friction.',
    //     },
    //     {
    //       title: 'Automated Borrower Communication',
    //       desc: 'Keep users informed with real-time email, SMS, and in-app alerts throughout the loan journey — from application to disbursement.',
    //     },
    //     {
    //       title: 'Smart Credit Scoring & Risk Analysis',
    //       desc: 'Pulse pulls credit scores from bureaus and alternative data sources, then applies custom risk models for better loan decisions.',
    //     },
    //     {
    //       title: 'Built-in KYC & Fraud Prevention',
    //       desc: 'Pulse automates KYC/AML checks during onboarding, helping detect fraud and ensure global regulatory compliance.',
    //     },
    //     {
    //       title: 'Real-Time Loan Decisions',
    //       desc: 'Pulse reviews applications instantly and delivers approval or rejection within seconds using AI-powered decision engines.',
    //     },
    //     {
    //       title: 'Fully Automated Underwriting',
    //       desc: 'Custom lending rules and AI analyze each application for you — no manual review, just scalable, automated underwriting.',
    //     },
    //     {
    //       title: 'Seamless Core Banking Integration',
    //       desc: 'Pulse integrates with your existing banking systems, enabling end-to-end loan automation without disrupting your stack.',
    //     }
    //   ];

    const originateThings = [
        {
            title: 'End-to-End Digital Application Flow',
            desc: 'From online forms to AI-powered document verification, borrowers can apply, upload, and get verified instantly — no paperwork needed.',
            iconSrc: icons.DigitalFlow,
        },
        {
            title: 'Automated Credit Scoring & Risk Analysis',
            desc: 'Pulse integrates with credit bureaus and alternative data sources, applying custom risk models to deliver smarter lending decisions.',
            iconSrc: icons.AutomatedCreditScoring,
        },
        {
            title: 'Real-Time Loan Approvals & Underwriting',
            desc: 'Pulse’s decision engine analyzes each application instantly using configurable rules, enabling AI-driven underwriting at scale.',
            iconSrc: icons.Realtime,
        },
        {
            title: 'Built-In Compliance & Fraud Detection',
            desc: 'Seamless KYC/AML checks and fraud prevention are baked into every step, keeping your institution secure and compliant.',
            iconSrc: icons.FraudDetection,
        },
        {
            title: 'Seamless Communication & Core Integration',
            desc: 'Pulse syncs with your core banking systems and keeps borrowers in the loop with automated alerts via email, SMS, and in-app messaging.',
            iconSrc: icons.SeamlessIntegration,
        }
    ];


    return (
        <section className="py-20 bg-white">
            <div className="container max-w-[1200px] w-full mx-auto">
                {/* Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
                    <div className='flex flex-col items-center text-center md:items-start md:text-left'>
                        <SectionHeading title="Our Origination System" />
                        <PrimaryAndSecondaryText primaryText={primaryText} />
                    </div>
                    {originateThings.map((origination, index) => (
                        <PrimarySecondaryTextWithIconCard
                            key={index}
                            index={index}
                            iconSrc={origination.iconSrc}
                            imgAlt={origination.title}
                            primaryText={origination.title}
                            secondaryText={origination.desc}
                            height='min-h-60'
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