import { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLocale, locales } from '../locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem('rheinwood-locale');
        if (saved && locales.includes(saved)) return saved;

        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (locales.includes(browserLang)) return browserLang;

        return defaultLocale;
    });

    useEffect(() => {
        localStorage.setItem('rheinwood-locale', locale);
        document.documentElement.lang = locale;
    }, [locale]);

    const t = (path) => {
        const keys = path.split('.');
        let value = translations[locale];

        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                // Fallback to default locale
                value = translations[defaultLocale];
                for (const k of keys) {
                    if (value && typeof value === 'object' && k in value) {
                        value = value[k];
                    } else {
                        return path; // Return path if not found
                    }
                }
                break;
            }
        }

        return value;
    };

    const toggleLocale = () => {
        setLocale(prev => prev === 'de' ? 'en' : 'de');
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t, locales }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
