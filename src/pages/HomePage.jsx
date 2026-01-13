import Header from '../components/Header';
import Hero from '../components/Hero';
import USPSection from '../components/USPSection';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import '../styles/variables.css';

export default function HomePage() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <USPSection />
                <ProductsSection />
                <AboutSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
