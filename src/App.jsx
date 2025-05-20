import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { WhatIsPulse } from './components/WhatIsPulse'
import { CoreFeatures } from './components/CoreFeatures'
import { WhatWeOffer } from "./components/WhatWeOffer"
import { OurVision } from "./components/OurVision"
import { HowWeOriginateThings } from './components/HowWeOriginateThings'
import { CompanyDetails } from './components/CompanyDetails'
import { Testimonials } from './components/Testimonials'
import { HowItWorks } from './components/HowItWorks'
import { KeyBenefits } from "./components/KeyBenefits"
import { GetStartedToday } from "./components/GetStartedToday"
import { Footer } from "./components/Footer"
import { QuoteForm } from "./components/QuoteForm"
import { Home } from "./pages/Home"

import { Routes, Route, Navigate } from "react-router-dom";
import { Quote } from "./pages/Quote"

function App() {

  return (
    <div className="hide-scrollbar overflow-y-scroll h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request_a_demo" element={<Quote />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
