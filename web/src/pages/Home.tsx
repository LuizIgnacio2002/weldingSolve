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
            <HeroSection />
            <Services />
            <Clients />
            <AboutUs />
            <Contact />
        </div>
    );
}

export default HomePage;

/*
Hero Section:

Headline: A clear, compelling headline that grabs attention.
Subheadline: A brief description that supports the headline.
Call to Action (CTA): A prominent button or form encouraging the desired action (e.g., "Sign Up Now," "Get Started").
Features/Benefits:

Service: A brief overview of the core service or product offered.
Description of Service: Key features and benefits that address the needs and pain points of the target audience.

Social Proof:

Clients: Logos or names of notable clients to build credibility.
Testimonials: Short, impactful quotes from satisfied customers.
About Us (Optional):

A brief section about the company or team to build trust and humanize the brand. This is less common on landing pages but can be included if relevant to the conversion goal.
Contact Us (Optional):

Contact information or a contact form for additional inquiries. Again, this is less common on a landing page, which usually focuses on a single CTA.
*/