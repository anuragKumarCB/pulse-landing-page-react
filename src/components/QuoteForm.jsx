import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { countryCodes } from '../constants/countryCodes';
import { PrimaryAndSecondaryText } from './text/PrimaryAndSecondaryText';
import { SectionHeading } from './SectionHeading';

export function QuoteForm() {
    const primaryText = "Get a Quote Now"
    const secondaryText = "Get a Quote Immediately Upon Form Submission"

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        message: ''
    });

    const [selectedCountryCode, setSelectedCountryCode] = useState('+91'); // Default to India
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [isSubmitted, setIsSubmitted] = useState(false); // Success state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.value);
    };

    const handleSend = () => {
        // Format the phone number with the country code
        const formattedPhone = `${selectedCountryCode} ${formData.phone}`;

        // Prepare the data for EmailJS
        const emailData = {
            ...formData,
            phone: formattedPhone
        };

        setIsLoading(true); // Start loading

        // Replace with your EmailJS service ID, template ID, and public key
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setIsSubmitted(true); // Show success screen
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    jobTitle: '',
                    message: ''
                });
                setSelectedCountryCode('+91'); // Reset to default
            }, (error) => {
                console.error(error);
                alert('Failed to send request. Please try again.'); // Keep this alert for failed submissions
            })
            .finally(() => {
                setIsLoading(false); // Stop loading
            });
    };

    // Success Screen
    if (isSubmitted) {
        return (
            <section className="bg-white py-12 px-4 ">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl w-full text-center"
                >
                    <h2 className="text-3xl font-bold text-green-600 mb-4">Quote Request Sent Successfully!</h2>
                    <p className="text-gray-600 mb-8">Thank you for your submission. We’ll get back to you soon with your quote.</p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
                    >
                        Submit Another Quote
                    </button>
                </motion.div>
            </section>
        );
    }

    // Form Screen
    return (
        <section className="bg-blue-50 py-12 px-4">
            <div className="container w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center py-20 px-4">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl w-full"
                >
                    {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">{primaryText}</h2>
                    <p className="text-center text-gray-600 mb-8">{secondaryText}</p> */}
                    <div className='flex flex-col justify-center items-center text-center mb-8'>
                        <SectionHeading title="Quote" />
                        <PrimaryAndSecondaryText primaryText={primaryText} />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="First name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Last name"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Email address"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Phone (with country code)</label>
                            <div className="flex gap-2">
                                <select
                                    value={selectedCountryCode}
                                    onChange={handleCountryCodeChange}
                                    className="w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {countryCodes.map((country) => (
                                        <option key={country.code} value={country.code}>
                                            {country.name} ({country.code})
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-2/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="10-digit number"
                                    maxLength="10"
                                    pattern="\d{10}"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="company">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Company"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1" htmlFor="jobTitle">Job Title</label>
                            <input
                                type="text"
                                id="jobTitle"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Job Title"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Submit your order information - Item name, decoration size, quantity, due date, and any other details"
                            required
                        ></textarea>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={handleSend}
                            disabled={isLoading}
                            className={`mt-4 inline-flex items-center justify-center py-2.5 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] cursor-pointer ${isLoading
                                ? 'bg-[#04afd1] text-white cursor-not-allowed'
                                : 'bg-[#04afd1] text-white'
                                }`}
                        >
                            {isLoading ? 'Sending Quote...' : 'Send Request'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}