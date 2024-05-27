import AboutUs from '../components/AboutUs/AboutUs';
import Contact from '../components/ContactSection/Contact';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import Services from '../components/ServicesSection/ServicesSection';
import Clients from '../components/Clients/Clients';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div id="hero-section">
                <HeroSection />
            </div>
            <div id="services-section">
                <Services />
            </div>
            <div id="clients-section">
                <Clients />
            </div>
            <div id="about-us-section">
                <AboutUs />
            </div>
            <div id="contact-section">
                <Contact />
            </div>
        </div>
    );
}

export default HomePage;
