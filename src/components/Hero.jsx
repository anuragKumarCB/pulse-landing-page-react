import { motion } from 'framer-motion';
import AsplLogo from "../assets/aspl-logo.png"
import { DemoButton } from './button/DemoButton';
import { BannerLabel } from './labels/BannerLabel';
import { PrimaryAndSecondaryText } from './text/PrimaryAndSecondaryText';

import { asplDomain, requestDemoLink } from '../enum';

export function Hero() {
    const primaryText = "Manage Microfinance Smarter with Pulse";
    const secondaryText = "An all-in-one SaaS platform to automate, analyze, and streamline your loan processes — from origination to closure.";

    return (
        <section className="bg-white py-20 px-4 text-center ">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mx-auto flex flex-col items-center justify-center w-full max-w-[1200px]"
            >
                <PrimaryAndSecondaryText
                    primaryText={primaryText}
                    secondaryText={secondaryText}
                />

                <DemoButton link={requestDemoLink} />

                <p className="text-sm text-gray-500 flex mt-10 items-center">
                    <span className='self-start mt-0.5'>A product by</span>
                    <a
                        href={asplDomain}
                        target='_blank'
                        className='flex '>
                        <img src={AsplLogo} alt="ASPL" class="inline h-10 align-text-bottom my-auto" />
                        <div className='ml-0.5 flex flex-col text-left text-base text-gray-700 font-bold'>
                            <span className=''>ARTISANS SQUARE</span>
                            <span className=''>PRIVATE LIMITED</span>
                        </div>
                    </a>

                </p>


                {/* Responsive iframe with aspect ratio */}
                <div className="relative w-full max-w-full mt-10 aspect-video">
                    <iframe
                        src="http://52.9.192.234:8080"
                        title="Pulse Demo"
                        className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
                        allowFullScreen
                    ></iframe>
                    {/* <img src={images.Dashboard} alt="" className="bg-white absolute top-0 left-0 w-full h-full rounded-md hover:shadow-lg duration-300" /> */}
                </div>

                {/* Responsive labels section */}
                <div className="w-full mt-6 flex flex-wrap gap-3 justify-center items-center">
                    <BannerLabel labelText="Loan Management Systems (LMS)" />
                    <BannerLabel labelText="Loan Origination Systems (LOS)" />
                    <BannerLabel labelText="Automation" />
                    <BannerLabel labelText="Analytics" />
                    <BannerLabel labelText="Powered By AI" />
                </div>
            </motion.div>
        </section>
    );
}
