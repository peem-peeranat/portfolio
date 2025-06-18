import Header from '../app/Header/page';
import HeroSection from '../app/herosection/page';
import About from '../app/about/page';
import Portfolio from '../app/portfolio/page';
import Contact from '../app/contact/page';
import Footer from '../app/components/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home-section">
        <HeroSection />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="portfolio-section">
        <Portfolio />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}