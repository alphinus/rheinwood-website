import { useLanguage } from '../lib/LanguageContext';
import './AboutSection.css';

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title mb-6">{t('about.title')}</h2>
                        <p className="about-intro">{t('about.intro')}</p>
                        <p className="about-text">{t('about.story1')}</p>
                        <p className="about-text">{t('about.story2')}</p>
                        <p className="about-location">{t('about.location')}</p>
                    </div>
                    <div className="about-image-wrapper">
                        <img
                            src="/images/lifestyle-living-room.png"
                            alt="Rheinwood Lampe im Wohnzimmer"
                            className="about-image"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="story-grid" id="workshop">
                    <div className="story-card">
                        <img
                            src="/images/detail-led-groove.png"
                            alt="LED Nut Detail"
                            className="story-image"
                            loading="lazy"
                        />
                        <div className="story-content">
                            <h3 className="story-title">{t('about.materialTitle')}</h3>
                            <p className="story-text">{t('about.materialText')}</p>
                        </div>
                    </div>

                    <div className="story-card">
                        <img
                            src="/images/workshop-bench.png"
                            alt="Werkstatt"
                            className="story-image"
                            loading="lazy"
                        />
                        <div className="story-content">
                            <h3 className="story-title">{t('about.workshopTitle')}</h3>
                            <p className="story-text">{t('about.workshopText')}</p>
                        </div>
                    </div>

                    <div className="story-card story-card-wide">
                        <img
                            src="/images/lifestyle-bedroom.png"
                            alt="Schlafzimmer Atmosphäre"
                            className="story-image"
                            loading="lazy"
                        />
                        <div className="story-content">
                            <h3 className="story-title">{t('about.philosophyTitle')}</h3>
                            <p className="story-text">{t('about.philosophyText')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
