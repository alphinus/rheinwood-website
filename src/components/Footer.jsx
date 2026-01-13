import { useLanguage } from '../lib/LanguageContext';
import './Footer.css';

export default function Footer() {
    const { t, locale, setLocale, locales } = useLanguage();

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img
                            src="/logos/rheinwood-logo-primary.png"
                            alt="Rheinwood"
                            className="footer-logo"
                        />
                        <p className="footer-tagline">{t('footer.tagline')}</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-heading">{t('footer.shop')}</h4>
                            <ul className="footer-list">
                                <li><a href="https://rheinwood.ch">{t('footer.allProducts')}</a></li>
                                <li><a href="https://rheinwood.ch">{t('nav.floorLamps')}</a></li>
                                <li><a href="https://rheinwood.ch">{t('nav.tableLamps')}</a></li>
                                <li><a href="https://rheinwood.ch">{t('nav.wallLamps')}</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">{t('footer.company')}</h4>
                            <ul className="footer-list">
                                <li><a href="/ueber-uns">{t('footer.aboutUs')}</a></li>
                                <li><a href="#workshop">{t('footer.workshop')}</a></li>
                                <li><a href="/kontakt">{t('contact.title')}</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">{t('footer.service')}</h4>
                            <ul className="footer-list">
                                <li><a href="#">{t('footer.shipping')}</a></li>
                                <li><a href="#">{t('footer.returns')}</a></li>
                                <li><a href="#">{t('footer.careGuide')}</a></li>
                                <li><a href="#">{t('faq.title')}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h4 className="footer-heading">{t('footer.newsletter')}</h4>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder={t('footer.emailPlaceholder')}
                                className="newsletter-input"
                            />
                            <button type="submit" className="btn btn-primary btn-sm">
                                {t('footer.subscribe')}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">{t('footer.copyright')}</p>

                    <div className="footer-legal">
                        <a href="/impressum">{t('footer.imprint')}</a>
                        <a href="/datenschutz">{t('footer.privacy')}</a>
                        <a href="/agb">{t('footer.terms')}</a>
                    </div>

                    <div className="footer-lang">
                        {locales.map((loc) => (
                            <button
                                key={loc}
                                className={`lang-btn ${locale === loc ? 'active' : ''}`}
                                onClick={() => setLocale(loc)}
                            >
                                {loc.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
