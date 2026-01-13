import { useLanguage } from '../lib/LanguageContext';
import './Hero.css';

// Video clips representing different production steps
const heroClips = [
    { id: 1, src: '/images/hero-main.png', type: 'image' },
    { id: 2, src: '/images/detail-led-groove.png', type: 'image' },
    { id: 3, src: '/images/workshop-bench.png', type: 'image' },
    { id: 4, src: '/images/lifestyle-living-room.png', type: 'image' },
];

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="hero">
            {/* Animated Background with Multiple Images */}
            <div className="hero-slideshow">
                {heroClips.map((clip, index) => (
                    <div
                        key={clip.id}
                        className="hero-slide"
                        style={{
                            backgroundImage: `url(${clip.src})`,
                            animationDelay: `${index * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="hero-overlay"></div>

            {/* Floating Wood Grain Pattern */}
            <div className="hero-pattern"></div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-text">
                    {/* Premium Badge */}
                    <div className="hero-badge animate-fade-in">
                        <span className="badge-icon">🇨🇭</span>
                        <span className="badge-text">Swiss Craftsmanship</span>
                    </div>

                    <h1 className="hero-headline animate-fade-in-up">
                        {t('hero.headline')}
                    </h1>

                    <p className="hero-subline animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                        {t('hero.subline')}
                    </p>

                    <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <a href="#products" className="btn btn-primary btn-lg">
                            {t('hero.cta1')}
                            <span className="btn-arrow">→</span>
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            {t('hero.cta2')}
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="hero-trust animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
                        <div className="trust-stat">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Handmade</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-stat">
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Jahre Garantie</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-stat">
                            <span className="stat-number">∞</span>
                            <span className="stat-label">Unikate</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span className="scroll-text">Scroll</span>
            </div>

            {/* Decorative Elements */}
            <div className="hero-decoration hero-deco-1"></div>
            <div className="hero-decoration hero-deco-2"></div>
        </section>
    );
}
