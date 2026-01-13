import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/variables.css';
import './LegalPages.css';

export default function Impressum() {
    const { locale } = useLanguage();

    const content = {
        de: {
            title: 'Impressum',
            company: 'Angaben gemäss Schweizer Recht',
            sections: [
                {
                    title: 'Unternehmensangaben',
                    content: `**Rheinwood**
Einzelunternehmung

Marco Meier
Schaffhauserstrasse 127
8400 Winterthur
Schweiz

Tel: +41 79 XXX XX XX
E-Mail: hello@rheinwood.ch`
                },
                {
                    title: 'Geschäftsführung',
                    content: `Marco Meier
Inhaber & Handwerker`
                },
                {
                    title: 'Handelsregister',
                    content: `Nicht im Handelsregister eingetragen (Einzelunternehmung unter CHF 100'000 Jahresumsatz).

UID: CHE-XXX.XXX.XXX (bei Registrierung)`
                },
                {
                    title: 'Umsatzsteuer',
                    content: `Nicht mehrwertsteuerpflichtig gemäss Art. 10 Abs. 2 MWSTG (Umsatz unter CHF 100'000).`
                },
                {
                    title: 'Bankverbindung',
                    content: `Zürcher Kantonalbank
IBAN: CH93 0070 0XXX XXXX XXXX X
BIC: ZKBKCHZZ80A`
                },
                {
                    title: 'Haftungsausschluss',
                    content: `Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.

Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.

Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.`
                },
                {
                    title: 'Urheberrechte',
                    content: `Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich Rheinwood oder den speziell genannten Rechtsinhabern.

Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.`
                },
                {
                    title: 'Werkstatt & Atelier',
                    content: `Die Werkstatt befindet sich in der Region Schaffhausen.

Besuche nur nach vorheriger Vereinbarung.
Kontakt: hello@rheinwood.ch`
                }
            ]
        },
        en: {
            title: 'Imprint',
            company: 'Information according to Swiss law',
            sections: [
                {
                    title: 'Company Information',
                    content: `**Rheinwood**
Sole Proprietorship

Marco Meier
Schaffhauserstrasse 127
8400 Winterthur
Switzerland

Phone: +41 79 XXX XX XX
Email: hello@rheinwood.ch`
                },
                {
                    title: 'Management',
                    content: `Marco Meier
Owner & Craftsman`
                },
                {
                    title: 'Commercial Register',
                    content: `Not registered in the commercial register (sole proprietorship under CHF 100,000 annual turnover).

UID: CHE-XXX.XXX.XXX (upon registration)`
                },
                {
                    title: 'VAT',
                    content: `Not subject to VAT according to Art. 10 para. 2 MWSTG (turnover under CHF 100,000).`
                },
                {
                    title: 'Bank Details',
                    content: `Zürcher Kantonalbank
IBAN: CH93 0070 0XXX XXXX XXXX X
BIC: ZKBKCHZZ80A`
                },
                {
                    title: 'Disclaimer',
                    content: `The author assumes no guarantee for the correctness, accuracy, timeliness, reliability and completeness of the information.

Liability claims against the author for damages of a material or immaterial nature arising from access to or use or non-use of the published information are excluded.

All offers are non-binding. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without prior notice or to discontinue publication temporarily or permanently.`
                },
                {
                    title: 'Copyright',
                    content: `The copyright and all other rights to content, images, photos or other files on the website belong exclusively to Rheinwood or the specifically named rights holders.

Written consent from the copyright holders must be obtained in advance for the reproduction of any elements.`
                },
                {
                    title: 'Workshop & Studio',
                    content: `The workshop is located in the Schaffhausen region.

Visits by appointment only.
Contact: hello@rheinwood.ch`
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
                    <p className="legal-subtitle">{t.company}</p>

                    <div className="legal-content">
                        {t.sections.map((section, index) => (
                            <section className="legal-section" key={index}>
                                <h2 className="legal-section-title">{section.title}</h2>
                                <div className="legal-section-content">
                                    {section.content.split('\n').map((line, i) => (
                                        <p key={i}>{line.startsWith('**') ? <strong>{line.replace(/\*\*/g, '')}</strong> : line}</p>
                                    ))}
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
