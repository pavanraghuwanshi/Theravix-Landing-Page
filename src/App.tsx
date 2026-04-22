import { useEffect } from 'preact/hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollAnimation from './components/ScrollAnimation';
import Categories from './components/Categories';
import WhyUs from './components/WhyUs';
import SellSection from './components/SellSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smoother scroll if we had a plugin, but standard GSAP is fine
    // Initial reveals
    gsap.to('.gsap-reveal', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-reveal',
        start: 'top 85%',
      },
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollAnimation />
      <Categories />
      <WhyUs />
      <SellSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
