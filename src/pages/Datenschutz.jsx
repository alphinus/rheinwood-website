import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/variables.css';
import './LegalPages.css';

export default function Datenschutz() {
    const { locale } = useLanguage();

    const content = {
        de: {
            title: 'Datenschutzerklärung',
            subtitle: 'Gültig ab 1. Januar 2026',
            sections: [
                {
                    title: '1. Allgemeines',
                    content: `Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten.

Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.

In enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor unberechtigtem Zugriff, Verlust, Missbrauch oder Verfälschung zu schützen.`
                },
                {
                    title: '2. Verantwortliche Stelle',
                    content: `Rheinwood
Marco Meier
Schaffhauserstrasse 127
8400 Winterthur
Schweiz

E-Mail: datenschutz@rheinwood.ch`
                },
                {
                    title: '3. Erhebung und Verarbeitung von Daten',
                    content: `Beim Zugriff auf unsere Website werden folgende Daten in Logfiles gespeichert:

• IP-Adresse
• Datum und Uhrzeit der Anfrage
• Zeitzonendifferenz zur GMT
• Inhalt der Anforderung (konkrete Seite)
• Zugriffsstatus/HTTP-Statuscode
• Übertragene Datenmenge
• Website, von der die Anforderung kommt
• Browser, Betriebssystem und dessen Oberfläche
• Sprache und Version der Browsersoftware

Diese Daten werden vorübergehend benötigt, um eine dauerhafte Funktionsfähigkeit und Sicherheit unserer Website zu gewährleisten.`
                },
                {
                    title: '4. Kontaktformular und E-Mail',
                    content: `Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen bei uns gespeichert.

Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) bzw. zur Durchführung vorvertraglicher Massnahmen.`
                },
                {
                    title: '5. Bestellungen und Kundenkonto',
                    content: `Bei Bestellungen über unseren Shopify-Shop erheben wir folgende Daten:

• Vor- und Nachname
• Lieferadresse
• E-Mail-Adresse
• Telefonnummer (optional)
• Zahlungsinformationen (werden direkt von Zahlungsdienstleistern verarbeitet)

Diese Daten werden zur Vertragserfüllung benötigt und für die Dauer der gesetzlichen Aufbewahrungspflicht (10 Jahre) gespeichert.`
                },
                {
                    title: '6. Newsletter',
                    content: `Wenn Sie den Newsletter abonnieren, speichern wir Ihre E-Mail-Adresse und ggf. Ihren Namen.

Sie können den Newsletter jederzeit über den Link am Ende jeder E-Mail oder per E-Mail an uns abbestellen.

Für den Versand nutzen wir [Mailchimp/Klaviyo]. Deren Datenschutzerklärung finden Sie unter [Link].`
                },
                {
                    title: '7. Cookies',
                    content: `Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Gerät gespeichert werden.

**Notwendige Cookies:** Diese sind für den Betrieb der Website erforderlich (z.B. Warenkorb, Spracheinstellung).

**Analyse-Cookies:** Wir nutzen Google Analytics zur Auswertung der Website-Nutzung. Die IP-Adressen werden anonymisiert.

Sie können Cookies in Ihren Browsereinstellungen deaktivieren.`
                },
                {
                    title: '8. Drittanbieter',
                    content: `Wir nutzen folgende Drittanbieter:

• **Shopify** (Shop-System) – Shopify Inc., Kanada
• **Google Analytics** (Webanalyse) – Google LLC, USA
• **Google Fonts** (Schriftarten) – Google LLC, USA
• **Vercel** (Hosting) – Vercel Inc., USA

Diese Anbieter können personenbezogene Daten in Länder ausserhalb der Schweiz/EU übertragen. Wir stellen sicher, dass angemessene Schutzmassnahmen getroffen werden.`
                },
                {
                    title: '9. Ihre Rechte',
                    content: `Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:

• **Auskunft:** Sie können Auskunft über Ihre gespeicherten Daten verlangen.
• **Berichtigung:** Sie können die Korrektur unrichtiger Daten verlangen.
• **Löschung:** Sie können die Löschung Ihrer Daten verlangen.
• **Einschränkung:** Sie können die Einschränkung der Verarbeitung verlangen.
• **Widerspruch:** Sie können der Verarbeitung widersprechen.
• **Datenübertragbarkeit:** Sie können Ihre Daten in einem gängigen Format erhalten.

Zur Ausübung dieser Rechte wenden Sie sich an: datenschutz@rheinwood.ch`
                },
                {
                    title: '10. Änderungen',
                    content: `Diese Datenschutzerklärung kann jederzeit angepasst werden. Die aktuelle Version ist stets auf unserer Website verfügbar.`
                }
            ]
        },
        en: {
            title: 'Privacy Policy',
            subtitle: 'Effective from January 1, 2026',
            sections: [
                {
                    title: '1. General',
                    content: `Based on Article 13 of the Swiss Federal Constitution and the data protection provisions of the Confederation (Data Protection Act, DSG), everyone is entitled to protection of their privacy and protection against misuse of their personal data.

We comply with these provisions. Personal data is treated strictly confidentially and is neither sold nor passed on to third parties.

In close cooperation with our hosting providers, we strive to protect the databases as well as possible against unauthorized access, loss, misuse or falsification.`
                },
                {
                    title: '2. Responsible Body',
                    content: `Rheinwood
Marco Meier
Schaffhauserstrasse 127
8400 Winterthur
Switzerland

Email: datenschutz@rheinwood.ch`
                },
                {
                    title: '3. Collection and Processing of Data',
                    content: `When accessing our website, the following data is stored in log files:

• IP address
• Date and time of the request
• Time zone difference to GMT
• Content of the request (specific page)
• Access status/HTTP status code
• Amount of data transferred
• Website from which the request originates
• Browser, operating system and its interface
• Language and version of browser software

This data is temporarily required to ensure permanent functionality and security of our website.`
                },
                {
                    title: '4. Contact Form and Email',
                    content: `If you contact us via contact form or email, your details will be stored by us for processing the inquiry and for possible follow-up questions.

We will not share this data without your consent.

Processing is based on your consent (Art. 6 para. 1 lit. a GDPR) or for the implementation of pre-contractual measures.`
                },
                {
                    title: '5. Orders and Customer Account',
                    content: `When ordering through our Shopify shop, we collect the following data:

• First and last name
• Delivery address
• Email address
• Phone number (optional)
• Payment information (processed directly by payment service providers)

This data is required for contract fulfillment and is stored for the duration of the statutory retention period (10 years).`
                },
                {
                    title: '6. Newsletter',
                    content: `If you subscribe to the newsletter, we store your email address and, if applicable, your name.

You can unsubscribe from the newsletter at any time via the link at the end of each email or by emailing us.

We use [Mailchimp/Klaviyo] for distribution. Their privacy policy can be found at [Link].`
                },
                {
                    title: '7. Cookies',
                    content: `Our website uses cookies. These are small text files that are stored on your device.

**Necessary Cookies:** These are required for the operation of the website (e.g., shopping cart, language settings).

**Analytics Cookies:** We use Google Analytics to analyze website usage. IP addresses are anonymized.

You can disable cookies in your browser settings.`
                },
                {
                    title: '8. Third-Party Providers',
                    content: `We use the following third-party providers:

• **Shopify** (Shop system) – Shopify Inc., Canada
• **Google Analytics** (Web analytics) – Google LLC, USA
• **Google Fonts** (Fonts) – Google LLC, USA
• **Vercel** (Hosting) – Vercel Inc., USA

These providers may transfer personal data to countries outside Switzerland/EU. We ensure that appropriate protective measures are taken.`
                },
                {
                    title: '9. Your Rights',
                    content: `You have the following rights regarding your personal data:

• **Information:** You can request information about your stored data.
• **Rectification:** You can request correction of incorrect data.
• **Deletion:** You can request deletion of your data.
• **Restriction:** You can request restriction of processing.
• **Objection:** You can object to processing.
• **Data Portability:** You can receive your data in a common format.

To exercise these rights, contact: datenschutz@rheinwood.ch`
                },
                {
                    title: '10. Changes',
                    content: `This privacy policy may be amended at any time. The current version is always available on our website.`
                }
            ]
        }
    };

    const t = content[locale];

    return (
        <div className="legal-page">
            <Header />
            <main className="legal-main">
                <div className="legal-container">
                    <h1 className="legal-title">{t.title}</h1>
                    <p className="legal-subtitle">{t.subtitle}</p>

                    <div className="legal-content">
                        {t.sections.map((section, index) => (
                            <section className="legal-section" key={index}>
                                <h2 className="legal-section-title">{section.title}</h2>
                                <div className="legal-section-content">
                                    {section.content.split('\n').map((line, i) => {
                                        if (line.startsWith('**') && line.endsWith('**')) {
                                            return <p key={i}><strong>{line.replace(/\*\*/g, '')}</strong></p>;
                                        }
                                        if (line.startsWith('• **')) {
                                            const parts = line.replace('• **', '').split('**');
                                            return <p key={i}>• <strong>{parts[0]}</strong>{parts[1]}</p>;
                                        }
                                        if (line.startsWith('• ')) {
                                            return <p key={i}>{line}</p>;
                                        }
                                        return <p key={i}>{line}</p>;
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>

                    <div className="legal-updated">
                        Stand: Januar 2026
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
