import { SectionHeading } from "./SectionHeading";

export function CompanyDetails() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <SectionHeading title="About Pulse" />
                    <div className="max-w-96">
                        <p className="text-3xl md:text-4xl font-bold text-gray-950 flex flex-col">
                            Pulse helps streamline the loan life cycle, reduce processing times, mitigate risk, and enhance customer experience through a unified platform.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="w-2/3">Pulse is an advanced SaaS platform that combines Loan Management Systems (LMS) and Loan Origination Systems (LOS), providing end-to-end automation and analytics for financial institutions. Pulse helps streamline the loan life cycle, reduce processing times, mitigate risk, and enhance customer experience through a unified platform.</p>
                </div>
            </div>
        </section>
    );
}