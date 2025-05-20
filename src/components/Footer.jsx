import { PulseLogo } from "./logo/PulseLogo";
import Logo from "../assets/pulse-logo.png";
import AsplLogo from "../assets/aspl-logo.png"
import { asplDomain } from "../enum";

export function Footer() {
    return (
        <footer className="bg-black h-auto md:h-60 ">
            <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
                {/* Left Section */}
                <div className="flex flex-col justify-between h-full ">
                    <div className="relative text-gray-300">
                        <PulseLogo />
                        <div className="flex items-end gap-2">
                            <p className="text-base font-semibold mb-1">
                                Crafted with care by
                            </p>
                            <a
                                href={asplDomain}
                                target="_blank"
                                className='flex '>
                                <img src={AsplLogo} alt="ASPL" class="inline h-10 ml-1 align-text-bottom my-auto" />
                                <div className='ml-1 flex flex-col text-left text-xs md:text-base text-gray-200 font-bold'>
                                    <span className=''>ARTISANS SQUARE</span>
                                    <span className=''>PRIVATE LIMITED</span>
                                </div>
                            </a>
                        </div>

                        <img
                            src={Logo}
                            alt=""
                            className="opacity-15 absolute top-10/12 left-1/3 transform -translate-x-1/2 -translate-y-1/2 scale-100 pointer-events-none"
                        />
                    </div>
                    <p className="text-sm font-semibold text-gray-400 mt-6">
                        © {new Date().getFullYear()} PULSE — Built for better finance.
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-2">
                        {/* Dummy Links */}
                        <span className="text-sm font-semibold text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-200">
                            Careers
                        </span>
                        <span className="text-sm font-semibold text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-200">
                            Blog
                        </span>
                        <span className="text-sm font-semibold text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-200">
                            Contact Us
                        </span>
                    </div>

                    {/* Footer Bottom Links */}
                    <div className="flex gap-6 mt-6">
                        <span className="text-sm font-semibold text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-200">
                            Privacy Policy
                        </span>
                        <span className="text-sm font-semibold text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-200">
                            Terms
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
