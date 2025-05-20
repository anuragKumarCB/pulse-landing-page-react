import { CoreFeatures } from "../components/CoreFeatures"
import { GetStartedToday } from "../components/GetStartedToday"
import { Hero } from "../components/Hero"
import { HowItWorks } from "../components/HowItWorks"
import { HowWeOriginateThings } from "../components/HowWeOriginateThings"
import { KeyBenefits } from "../components/KeyBenefits"
import { QuoteForm } from "../components/QuoteForm"
import { Testimonials } from "../components/Testimonials"
import { WhatIsPulse } from "../components/WhatIsPulse"

export function Home() {
    return (
        <>
            <Hero />
            <WhatIsPulse />
            <KeyBenefits />
            <CoreFeatures />
            <HowWeOriginateThings />
            <HowItWorks />
            <Testimonials />
            <GetStartedToday />
            {/* <QuoteForm /> */}
        </>
    )
}