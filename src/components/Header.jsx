import { useLanguage } from '../lib/LanguageContext';
import './Header.css';

export default function Header() {
    const { t, locale, toggleLocale } = useLanguage();

    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo">
                    <img src="/logos/rheinwood-logo-primary.png" alt="Rheinwood" className="logo-image" />
                </a>

                <nav className="nav-main">
                    <a href="#products" className="nav-link">{t('nav.shop')}</a>
                    <a href="#about" className="nav-link">{t('nav.about')}</a>
                    <a href="#workshop" className="nav-link">{t('nav.workshop')}</a>
                    <a href="#contact" className="nav-link">{t('nav.contact')}</a>
                </nav>

                <div className="nav-actions">
                    <button
                        className="lang-toggle"
                        onClick={toggleLocale}
                        aria-label={t('common.language')}
                    >
                        {locale === 'de' ? 'EN' : 'DE'}
                    </button>
                    <a
                        href="https://rheinwood.ch"
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('nav.shop')}
                    </a>
                </div>

                <button className="mobile-menu-toggle" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
