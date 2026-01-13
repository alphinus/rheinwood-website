import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/variables.css';
import './Kontakt.css';

export default function Kontakt() {
    const { locale } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const content = {
        de: {
            title: 'Kontakt',
            subtitle: 'Fragen, Wünsche oder Beratung? Wir sind für dich da.',
            form: {
                name: 'Name',
                email: 'E-Mail',
                phone: 'Telefon (optional)',
                subject: 'Betreff',
                subjects: {
                    general: 'Allgemeine Anfrage',
                    product: 'Produktfrage',
                    order: 'Bestellung & Versand',
                    custom: 'Sonderanfertigung',
                    press: 'Presse & Kooperationen'
                },
                message: 'Deine Nachricht',
                send: 'Nachricht senden',
                sending: 'Wird gesendet...'
            },
            success: {
                title: 'Danke für deine Nachricht!',
                text: 'Wir melden uns innerhalb von 1–2 Werktagen bei dir.'
            },
            info: {
                title: 'Direkt erreichen',
                email: 'E-Mail',
                phone: 'Telefon',
                hours: 'Erreichbarkeit',
                hoursText: 'Mo–Fr: 9:00–17:00 Uhr',
                location: 'Werkstatt',
                locationText: 'Region Schaffhausen\nBesuche nur nach Vereinbarung'
            },
            faq: {
                title: 'Schnelle Antworten',
                items: [
                    { q: 'Wie lange dauert die Lieferung?', a: '5–10 Werktage, da jede Lampe auf Bestellung gefertigt wird.' },
                    { q: 'Kann ich die Werkstatt besuchen?', a: 'Ja, nach vorheriger Terminvereinbarung.' },
                    { q: 'Bietet ihr Sonderanfertigungen an?', a: 'Ja, kontaktiere uns mit deinen Wünschen.' }
                ]
            }
        },
        en: {
            title: 'Contact',
            subtitle: 'Questions, requests, or consultation? We\'re here for you.',
            form: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone (optional)',
                subject: 'Subject',
                subjects: {
                    general: 'General Inquiry',
                    product: 'Product Question',
                    order: 'Order & Shipping',
                    custom: 'Custom Order',
                    press: 'Press & Partnerships'
                },
                message: 'Your Message',
                send: 'Send Message',
                sending: 'Sending...'
            },
            success: {
                title: 'Thank you for your message!',
                text: 'We\'ll get back to you within 1–2 business days.'
            },
            info: {
                title: 'Reach Us Directly',
                email: 'Email',
                phone: 'Phone',
                hours: 'Availability',
                hoursText: 'Mon–Fri: 9:00 AM–5:00 PM',
                location: 'Workshop',
                locationText: 'Schaffhausen Region\nVisits by appointment only'
            },
            faq: {
                title: 'Quick Answers',
                items: [
                    { q: 'How long is delivery?', a: '5–10 business days, as each lamp is made to order.' },
                    { q: 'Can I visit the workshop?', a: 'Yes, by prior appointment.' },
                    { q: 'Do you offer custom orders?', a: 'Yes, contact us with your wishes.' }
                ]
            }
        }
    };

    const t = content[locale];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page">
            <Header />
            <main className="contact-main">
                <div className="contact-container">
                    <div className="contact-header">
                        <h1 className="contact-title">{t.title}</h1>
                        <p className="contact-subtitle">{t.subtitle}</p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-form-wrapper">
                            {submitted ? (
                                <div className="contact-success">
                                    <div className="success-icon">✓</div>
                                    <h2>{t.success.title}</h2>
                                    <p>{t.success.text}</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">{t.form.name}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">{t.form.email}</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">{t.form.phone}</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">{t.form.subject}</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            {Object.entries(t.form.subjects).map(([key, value]) => (
                                                <option key={key} value={key}>{value}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">{t.form.message}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">
                                        {t.form.send}
                                    </button>
                                </form>
                            )}
                        </div>

                        <aside className="contact-sidebar">
                            <div className="contact-info-card">
                                <h3>{t.info.title}</h3>

                                <div className="info-item">
                                    <span className="info-icon">✉️</span>
                                    <div>
                                        <strong>{t.info.email}</strong>
                                        <a href="mailto:hello@rheinwood.ch">hello@rheinwood.ch</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📞</span>
                                    <div>
                                        <strong>{t.info.phone}</strong>
                                        <a href="tel:+41791234567">+41 79 123 45 67</a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">🕐</span>
                                    <div>
                                        <strong>{t.info.hours}</strong>
                                        <span>{t.info.hoursText}</span>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📍</span>
                                    <div>
                                        <strong>{t.info.location}</strong>
                                        <span style={{ whiteSpace: 'pre-line' }}>{t.info.locationText}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-faq">
                                <h3>{t.faq.title}</h3>
                                {t.faq.items.map((item, index) => (
                                    <div className="faq-mini" key={index}>
                                        <strong>{item.q}</strong>
                                        <p>{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
