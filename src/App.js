import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Connection from "./Connection/Connection";
// import WhatsAppButton from "./WhatsAppButton/WhatsAppButton";
import WhatsAppChatBot from "./WhatsAppChatBot/WhatsAppChatBot";
import Footer from "./Footer/Footer";
import WebConnection from "./WhatWeDo/WebConnection/WebConnection";
import AppConnection from "./WhatWeDo/AppConnection/AppConnection";
import UxConnection from "./WhatWeDo/UX/UxConnection/UxConnection";
import BusineesConnection from "./WhatWeDo/Businees Application/BusineesConnection/BusineesConnection";
import CrmConnection from "./WhatWeDo/Crm/CrmConnection/CrmConnection";
import AboutConnection from "./WhoWeAre/AboutConnection/AboutConnection";
import TeamSection from "./WhoWeAre/TeamSection/TeamSection";
import PowerConnection from "./WhatWeDo/PowerApp/PowerConnection/PowerConnection";
import MetaConnection from "./WhatWeDo/Metaverse/MetaConnection/MetaConnection";
import ContactConnection from "./Contact Us/ContactConnection/ContactConnection";
import BlogPage from "./BlogPages/BlogPage";
import Trends2025 from "./BlogPages/Trends2025";
import Frameworks2025 from "./BlogPages/Frameworks2025";
import Ecommerce2025 from "./BlogPages/Ecommerce2025";  
import DigitalMarketing2025 from "./BlogPages/DigitalMarketing2025";
import Shopify2025 from "./BlogPages/Shopify2025";
import Ai from "./BlogPages/AI2025";
import Cybersecurity2025 from "./BlogPages/Cybersecurity2025";  
import CareersSection from "./WhoWeAre/CareersSection/CareersSection";
import InternshipSection from "./WhoWeAre/InternshipSection/InternshipSection";
import CalendlySection from "./CalendlySection/CalendlySection";
import Textbox3D from "./Textbox3D/TextBox";
import ScrollToTop from "./ScrollToTop/ScrollToTop";  
import GetStartedSection3D from "./GetStartedSection3D/GetStartedSection3D";
import GetInTouch from "./GetInTouchSection3D/GetInTouchSection3D";
import APIIntegration from "./BlogPages/APIIntegration";
import GetStartedSection from "./GetStartedSection/GetStartedSection";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Connection />} />
        <Route path="/web-service" element={<WebConnection />} />
        <Route path="/app" element={<AppConnection />} />
        <Route path="/ux" element={<UxConnection />} />
        <Route path="/d365-erp" element={<BusineesConnection />} />
        <Route path="/d365-crm" element={<CrmConnection />} />
        <Route path="/about-us" element={<AboutConnection />} />
        <Route path="/our-team" element={<TeamSection />} />
        <Route path="/power-apps" element={<PowerConnection />} />
        <Route path="/metaverse" element={<MetaConnection />} />
        <Route path="/contact-us" element={<ContactConnection />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/trend" element={<Trends2025 />} />
        <Route path="/framework" element={<Frameworks2025 />} />
        <Route path="/ecommerce" element={<Ecommerce2025 />} />
        <Route path="/digital-marketing" element={<DigitalMarketing2025 />} />
        <Route path="/shopify" element={<Shopify2025 />} />
        <Route path="/ai" element={<Ai/>} />
        <Route path="/cyber" element={<Cybersecurity2025 />} />
        <Route path="/open-position" element={<CareersSection />} />
        <Route path="/internship" element={<InternshipSection />} />
        <Route path="/calendar" element={<CalendlySection />} />
        <Route path="/3d" element={<Textbox3D />} />
        <Route path="/3dd" element={<GetStartedSection3D />} />
        <Route path="/getintouch" element={<GetInTouch/>} />
        <Route path="/api" element={<APIIntegration/>} />
        <Route path="/getstarted" element={<GetStartedSection/>} />
      </Routes>
      {/* <WhatsAppButton /> */}
      <WhatsAppChatBot />
      <Footer/>
    </Router>
  );
}

export default App;
