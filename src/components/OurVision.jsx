import { SectionHeading } from './SectionHeading';
import images from '../assets/images/images';
import { PrimaryAndSecondaryText } from './text/PrimaryAndSecondaryText';
import { PrimarySecondaryTextWithIconCard } from './cards/PrimarySecondaryTextWithIconCard';

export function OurVision() {
    const primaryText = "Future of Loan Management & Origination Systems";
    const ourVision = [
        {
            title: 'Maximize Operational Efficiency',
            desc: "Reduce manual intervention and operational costs.",
            iconSrc: images.Work1,
        },
        {
            title: 'Enhance Compliance',
            desc: "Ensure regulatory compliance with built-in checks and balances.",
            iconSrc: images.Work2,
        },
        {
            title: 'Improve Customer Experience',
            desc: "Provide quick, transparent, and seamless experiences for borrowers.",
            iconSrc: images.Work4,
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container max-w-[1200px] w-full mx-auto">
                {/* Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
                    <div className='flex flex-col'>
                        <SectionHeading title="Our Vision" />
                        <PrimaryAndSecondaryText primaryText={primaryText} />
                    </div>
                    {ourVision.map((vision, index) => (
                        <PrimarySecondaryTextWithIconCard
                            key={index}
                            index={index}
                            iconSrc={vision.iconSrc}
                            imgAlt={vision.title}
                            primaryText={vision.title}
                            secondaryText={vision.desc}
                            height='min-h-60'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}