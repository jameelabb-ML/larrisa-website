import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustBar from './components/TrustBar/TrustBar';
import About from './components/About/About';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import PatientJourney from './components/PatientJourney/PatientJourney';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Statistics from './components/Statistics/Statistics';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import MobileQuickActions from './components/Shared/MobileQuickActions';
import CursorGlow from './components/Shared/CursorGlow';
import LoadingScreen from './components/Shared/LoadingScreen';
import SectionDivider from './components/Shared/SectionDivider';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen show={loading} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="relative">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <SectionDivider tone="cream" />
        <WhyChooseUs />
        <PatientJourney />
        <BeforeAfter />
        <Gallery />
        <SectionDivider tone="cream" />
        <Testimonials />
        <Statistics />
        <FAQ />
        <Contact />
        <CTA />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileQuickActions />
    </>
  );
}
