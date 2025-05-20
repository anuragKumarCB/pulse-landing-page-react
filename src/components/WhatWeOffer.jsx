import { SectionHeading } from "./SectionHeading";

export function WhatWeOffer() {
    const loanTypes = [
        'JLG Loan', 'Cross Sale', 'MEL Loan', 'Personal Loan', 'Home Loan', 'Auto Loan',
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-between md:flex-row items-start mb-12 gap-10">
                    <SectionHeading title="What We offer" />
                    <div className="max-w-96">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-950 flex flex-col">
                            <p className="">Optimize loan servicing, repayments, collections,</p>
                            <p>and monitoring of loan portfolios across multiple loan products</p>
                            <p> (e.g., mortgages, personal loans, auto loans, etc.)</p>

                        </h1>
                    </div>
                    <p className="max-w-96 text-3xl md:text-4xl font-bold text-gray-950"> Automate and simplify loan origination-from application to approval-using built-in risk analytics and compliance tools.</p>
                </div>
                <div className="grid mt-[100px] grid-cols-1 gap-6 ">
                    {loanTypes.map((type, index) => (
                        <div key={index} className="w-4xl ml-auto py-6 border-b border-gray-200 hover:translate-x-4 transition-normal duration-500">
                            <h3 className="text-6xl  font-bold cursor-pointer">{type}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}