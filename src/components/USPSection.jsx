import { useLanguage } from '../lib/LanguageContext';
import './USPSection.css';

export default function USPSection() {
    const { t } = useLanguage();

    const usps = [
        {
            icon: '🪵',
            title: t('usps.unique.title'),
            text: t('usps.unique.text'),
        },
        {
            icon: '🛠️',
            title: t('usps.craft.title'),
            text: t('usps.craft.text'),
        },
        {
            icon: '💡',
            title: t('usps.light.title'),
            text: t('usps.light.text'),
        },
    ];

    return (
        <section className="usp-section" id="why">
            <div className="container">
                <h2 className="section-title text-center mb-8">{t('usps.title')}</h2>

                <div className="usp-grid">
                    {usps.map((usp, index) => (
                        <div
                            className="usp-card"
                            key={index}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="usp-icon">{usp.icon}</span>
                            <h3 className="usp-title">{usp.title}</h3>
                            <p className="usp-text">{usp.text}</p>
                        </div>
                    ))}
                </div>

                <div className="trust-bar">
                    <div className="trust-item">
                        <span className="trust-icon">🇨🇭</span>
                        <span className="trust-text">{t('trust.handmade')}</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">✍️</span>
                        <span className="trust-text">{t('trust.signed')}</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">📦</span>
                        <span className="trust-text">{t('trust.freeShipping')}</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">↩️</span>
                        <span className="trust-text">{t('trust.returns')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
