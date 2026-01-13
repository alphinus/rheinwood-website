import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/variables.css';
import './LegalPages.css';

export default function AGB() {
    const { locale } = useLanguage();

    const content = {
        de: {
            title: 'Allgemeine Geschäftsbedingungen',
            subtitle: 'Gültig ab 1. Januar 2026',
            sections: [
                {
                    title: '1. Geltungsbereich',
                    content: `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Bestellungen, die über den Online-Shop rheinwood.ch getätigt werden.

Der Vertragspartner ist:
Rheinwood
Marco Meier
Schaffhauserstrasse 127
8400 Winterthur, Schweiz

Mit der Bestellung akzeptiert der Kunde diese AGB.`
                },
                {
                    title: '2. Produkte',
                    content: `Alle Produkte von Rheinwood sind handgefertigte Unikate aus Schwemmholz.

**Wichtige Hinweise:**
• Jedes Stück ist einzigartig – Masse, Form und Farbe können leicht variieren
• Kleine Risse und natürliche Unregelmässigkeiten sind Teil des Charakters
• Die Produktfotos dienen als Referenz; das gelieferte Produkt kann abweichen
• Auf Wunsch senden wir vor dem Versand Fotos des konkreten Produkts`
                },
                {
                    title: '3. Preise und Zahlung',
                    content: `Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive Mehrwertsteuer (sofern anwendbar).

**Zahlungsarten:**
• Kreditkarte (Visa, Mastercard)
• TWINT
• Vorauszahlung (Banküberweisung)
• Rechnung (nur für Schweizer Kunden, nach Bonitätsprüfung)

Die Zahlung ist vor dem Versand fällig, ausser bei Rechnung (Zahlungsfrist: 30 Tage).`
                },
                {
                    title: '4. Lieferung',
                    content: `**Lieferzeit:** 5–10 Werktage (jede Lampe wird auf Bestellung gefertigt)

**Liefergebiet:**
• Schweiz: CHF 9.90 (ab CHF 150 kostenlos)
• Deutschland/Österreich: CHF 19.90
• Andere Länder: auf Anfrage

Die Lieferung erfolgt mit Tracking. Bei Lieferverzögerungen informieren wir Sie umgehend.

**Sorgfältige Verpackung:** Jede Lampe wird von Hand verpackt, um sicheren Transport zu gewährleisten.`
                },
                {
                    title: '5. Widerrufsrecht',
                    content: `Sie haben das Recht, innerhalb von 14 Tagen ohne Angabe von Gründen vom Kauf zurückzutreten.

**Frist:** 14 Tage ab Erhalt der Ware

**Ausübung:** Senden Sie eine formlose Mitteilung an hello@rheinwood.ch

**Rücksendung:** Die Ware muss innerhalb von 14 Tagen nach Widerruf zurückgesendet werden. Die Kosten der Rücksendung trägt der Kunde.

**Erstattung:** Die Rückerstattung erfolgt innerhalb von 14 Tagen nach Erhalt der Ware in einwandfreiem Zustand.

**Ausnahmen:** Personalisierte Produkte oder Sonderanfertigungen sind vom Widerruf ausgeschlossen.`
                },
                {
                    title: '6. Gewährleistung',
                    content: `Wir gewährleisten, dass alle Produkte frei von Materialfehlern sind.

**Gewährleistungsfrist:** 2 Jahre ab Lieferdatum

**Nicht abgedeckt:**
• Normale Abnutzung
• Schäden durch unsachgemässe Handhabung
• Natürliche Veränderungen des Holzes (z.B. kleine Risse, Farbveränderungen)

Bei berechtigten Mängeln bieten wir Reparatur, Ersatz oder Rückerstattung an.`
                },
                {
                    title: '7. Haftung',
                    content: `Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich zulässig.

Die Haftung ist in jedem Fall auf den Kaufpreis des Produkts beschränkt.

Für elektrische Komponenten (Leuchtmittel, Kabel) gelten die Garantiebedingungen der jeweiligen Hersteller.`
                },
                {
                    title: '8. Geistiges Eigentum',
                    content: `Alle Inhalte der Website (Texte, Bilder, Designs) sind urheberrechtlich geschützt.

Die Verwendung ohne schriftliche Genehmigung ist untersagt.

Das Design der Lampen ist geistiges Eigentum von Rheinwood und darf nicht kopiert werden.`
                },
                {
                    title: '9. Anwendbares Recht',
                    content: `Es gilt ausschliesslich Schweizer Recht.

Gerichtsstand ist Winterthur, Schweiz.

Vor gerichtlichen Schritten streben wir eine einvernehmliche Lösung an.`
                },
                {
                    title: '10. Kontakt',
                    content: `Bei Fragen zu diesen AGB:

Rheinwood
Marco Meier
hello@rheinwood.ch
+41 79 XXX XX XX`
                }
            ]
        },
        en: {
            title: 'Terms and Conditions',
            subtitle: 'Effective from January 1, 2026',
            sections: [
                {
                    title: '1. Scope',
                    content: `These General Terms and Conditions (GTC) apply to all orders placed through the online shop rheinwood.ch.

The contracting partner is:
Rheinwood
Marco Meier
Schaffhauserstrasse 127
8400 Winterthur, Switzerland

By placing an order, the customer accepts these GTC.`
                },
                {
                    title: '2. Products',
                    content: `All Rheinwood products are handcrafted unique pieces made from driftwood.

**Important Notes:**
• Each piece is unique – dimensions, shape and color may vary slightly
• Small cracks and natural irregularities are part of the character
• Product photos serve as reference; the delivered product may differ
• Upon request, we can send photos of the specific product before shipping`
                },
                {
                    title: '3. Prices and Payment',
                    content: `All prices are in Swiss Francs (CHF) including VAT (if applicable).

**Payment Methods:**
• Credit card (Visa, Mastercard)
• TWINT
• Advance payment (bank transfer)
• Invoice (Swiss customers only, subject to credit check)

Payment is due before shipping, except for invoice (payment term: 30 days).`
                },
                {
                    title: '4. Delivery',
                    content: `**Delivery Time:** 5–10 business days (each lamp is made to order)

**Delivery Area:**
• Switzerland: CHF 9.90 (free from CHF 150)
• Germany/Austria: CHF 19.90
• Other countries: on request

Delivery includes tracking. We will inform you immediately of any delays.

**Careful Packaging:** Each lamp is hand-packed to ensure safe transport.`
                },
                {
                    title: '5. Right of Withdrawal',
                    content: `You have the right to withdraw from the purchase within 14 days without giving reasons.

**Period:** 14 days from receipt of goods

**Exercise:** Send an informal message to hello@rheinwood.ch

**Return:** Goods must be returned within 14 days of withdrawal. Return shipping costs are borne by the customer.

**Refund:** Refund within 14 days of receiving goods in perfect condition.

**Exceptions:** Personalized products or custom orders are excluded from withdrawal.`
                },
                {
                    title: '6. Warranty',
                    content: `We warrant that all products are free from material defects.

**Warranty Period:** 2 years from delivery date

**Not Covered:**
• Normal wear and tear
• Damage from improper handling
• Natural changes in wood (e.g., small cracks, color changes)

For valid defects, we offer repair, replacement or refund.`
                },
                {
                    title: '7. Liability',
                    content: `Liability for slight negligence is excluded to the extent permitted by law.

Liability is in any case limited to the purchase price of the product.

For electrical components (bulbs, cables), the warranty conditions of the respective manufacturers apply.`
                },
                {
                    title: '8. Intellectual Property',
                    content: `All website content (texts, images, designs) is protected by copyright.

Use without written permission is prohibited.

The design of the lamps is intellectual property of Rheinwood and may not be copied.`
                },
                {
                    title: '9. Applicable Law',
                    content: `Swiss law applies exclusively.

Place of jurisdiction is Winterthur, Switzerland.

Before legal action, we strive for an amicable solution.`
                },
                {
                    title: '10. Contact',
                    content: `For questions about these GTC:

Rheinwood
Marco Meier
hello@rheinwood.ch
+41 79 XXX XX XX`
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
                                        if (line.startsWith('**') && line.includes(':**')) {
                                            const parts = line.split(':**');
                                            return <p key={i}><strong>{parts[0].replace(/\*\*/g, '')}:</strong>{parts[1]}</p>;
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
