import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/variables.css';
import './UeberUns.css';

export default function UeberUns() {
    const { locale } = useLanguage();

    const content = {
        de: {
            title: 'Über Rheinwood',
            intro: 'Die Geschichte hinter dem Licht',
            story: {
                headline: 'Von der Natur inspiriert. Mit Präzision gefertigt.',
                text1: 'Zwischen Winterthur und Schaffhausen entsteht etwas Besonderes: Lampen, die nicht laut sind, sondern Räume beruhigen. Jedes Stück Schwemmholz, das wir verwenden, hat seine eigene Geschichte — geformt von Wasser und Zeit, gestrandet am Ufer des Rheins.',
                text2: 'Was als Hobby begann, ist heute eine Leidenschaft. Marco verbindet traditionelles Handwerk mit moderner Technik: präzise CNC-Fräsung für die LED-Integration, sorgfältiger Handschliff für die perfekte Oberfläche, durchdachtes Design für zeitlose Eleganz.',
                text3: 'Jede Lampe ist ein Unikat. Nummeriert, signiert und mit dem Anspruch gefertigt, ein Leben lang Freude zu bereiten.'
            },
            founder: {
                name: 'Marco Meier',
                role: 'Gründer & Handwerker',
                bio: 'Nach 15 Jahren in der Möbelindustrie hat Marco seinen Traum verwirklicht: ein eigenes Atelier, in dem Qualität vor Quantität steht. Seine Leidenschaft für natürliche Materialien und präzise Handarbeit spiegelt sich in jeder Rheinwood-Lampe wider.'
            },
            values: {
                title: 'Unsere Werte',
                items: [
                    { icon: '🌿', title: 'Nachhaltigkeit', text: 'Wir verwenden ausschliesslich gefundenes Schwemmholz. Keine Bäume werden gefällt.' },
                    { icon: '🔧', title: 'Präzision', text: 'CNC-Technik trifft auf Handarbeit. Jedes Detail wird kontrolliert.' },
                    { icon: '💡', title: 'Qualität', text: 'Premium-LEDs, hochwertige Kabel, 2 Jahre Garantie auf alle Komponenten.' },
                    { icon: '🏔️', title: 'Swiss Made', text: 'Entwickelt, gefertigt und verschickt aus der Schweiz.' }
                ]
            },
            process: {
                title: 'Der Entstehungsprozess',
                steps: [
                    { image: '/images/production-sanding.png', title: 'Schleifen', text: 'Jedes Stück wird von Hand geschliffen — für eine samtweiche Oberfläche, die das Natürliche bewahrt.' },
                    { image: '/images/production-cnc.png', title: 'Fräsen', text: 'Präzise CNC-Fräsung für die LED-Nuten. Millimetergenau, ohne das Holz zu beschädigen.' },
                    { image: '/images/production-wiring.png', title: 'Montage', text: 'LED-Streifen und Verkabelung werden sorgfältig integriert. Jede Verbindung wird geprüft.' },
                    { image: '/images/production-finishing.png', title: 'Endkontrolle', text: 'Funktionstest, Qualitätsprüfung, Signatur. Erst dann verlässt die Lampe unsere Werkstatt.' }
                ]
            },
            workshop: {
                title: 'Die Werkstatt',
                text: 'Unser Atelier in der Region Schaffhausen ist mehr als ein Arbeitsplatz — es ist ein Ort, an dem Ideen Form annehmen. Besuche sind nach Vereinbarung möglich.',
                cta: 'Termin vereinbaren'
            }
        },
        en: {
            title: 'About Rheinwood',
            intro: 'The story behind the light',
            story: {
                headline: 'Inspired by nature. Crafted with precision.',
                text1: 'Between Winterthur and Schaffhausen, something special is created: lamps that aren\'t loud, but calm spaces. Every piece of driftwood we use has its own story — shaped by water and time, washed ashore on the banks of the Rhine.',
                text2: 'What began as a hobby is now a passion. Marco combines traditional craftsmanship with modern technology: precision CNC milling for LED integration, careful hand sanding for the perfect surface, thoughtful design for timeless elegance.',
                text3: 'Every lamp is unique. Numbered, signed, and crafted with the goal of bringing joy for a lifetime.'
            },
            founder: {
                name: 'Marco Meier',
                role: 'Founder & Craftsman',
                bio: 'After 15 years in the furniture industry, Marco realized his dream: his own studio where quality comes before quantity. His passion for natural materials and precise craftsmanship is reflected in every Rheinwood lamp.'
            },
            values: {
                title: 'Our Values',
                items: [
                    { icon: '🌿', title: 'Sustainability', text: 'We exclusively use found driftwood. No trees are cut down.' },
                    { icon: '🔧', title: 'Precision', text: 'CNC technology meets handcraft. Every detail is controlled.' },
                    { icon: '💡', title: 'Quality', text: 'Premium LEDs, high-quality cables, 2-year warranty on all components.' },
                    { icon: '🏔️', title: 'Swiss Made', text: 'Designed, crafted, and shipped from Switzerland.' }
                ]
            },
            process: {
                title: 'The Creation Process',
                steps: [
                    { image: '/images/production-sanding.png', title: 'Sanding', text: 'Each piece is hand-sanded — for a silky-smooth surface that preserves the natural character.' },
                    { image: '/images/production-cnc.png', title: 'Milling', text: 'Precision CNC milling for LED grooves. Millimeter-accurate, without damaging the wood.' },
                    { image: '/images/production-wiring.png', title: 'Assembly', text: 'LED strips and wiring are carefully integrated. Every connection is tested.' },
                    { image: '/images/production-finishing.png', title: 'Quality Control', text: 'Function test, quality check, signature. Only then does the lamp leave our workshop.' }
                ]
            },
            workshop: {
                title: 'The Workshop',
                text: 'Our studio in the Schaffhausen region is more than a workplace — it\'s a place where ideas take shape. Visits are possible by appointment.',
                cta: 'Schedule a visit'
            }
        }
    };

    const t = content[locale];

    return (
        <div className="ueber-page">
            <Header />
            <main className="ueber-main">
                {/* Hero */}
                <section className="ueber-hero">
                    <div className="ueber-hero-content">
                        <span className="ueber-eyebrow">{t.intro}</span>
                        <h1 className="ueber-title">{t.title}</h1>
                    </div>
                </section>

                {/* Story */}
                <section className="ueber-story container">
                    <div className="story-grid">
                        <div className="story-text">
                            <h2>{t.story.headline}</h2>
                            <p>{t.story.text1}</p>
                            <p>{t.story.text2}</p>
                            <p className="story-highlight">{t.story.text3}</p>
                        </div>
                        <div className="story-image">
                            <img src="/images/lifestyle-living-room.png" alt="" loading="lazy" />
                        </div>
                    </div>
                </section>

                {/* Founder */}
                <section className="ueber-founder">
                    <div className="container">
                        <div className="founder-card">
                            <div className="founder-image">
                                <img src="/images/workshop-bench.png" alt={t.founder.name} loading="lazy" />
                            </div>
                            <div className="founder-content">
                                <h3>{t.founder.name}</h3>
                                <span className="founder-role">{t.founder.role}</span>
                                <p>{t.founder.bio}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="ueber-values">
                    <div className="container">
                        <h2 className="section-title text-center mb-8">{t.values.title}</h2>
                        <div className="values-grid">
                            {t.values.items.map((item, index) => (
                                <div className="value-card" key={index}>
                                    <span className="value-icon">{item.icon}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="ueber-process">
                    <div className="container">
                        <h2 className="section-title text-center mb-8">{t.process.title}</h2>
                        <div className="process-timeline">
                            {t.process.steps.map((step, index) => (
                                <div className="process-step" key={index}>
                                    <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                                    <div className="step-image">
                                        <img src={step.image} alt={step.title} loading="lazy" />
                                    </div>
                                    <div className="step-content">
                                        <h4>{step.title}</h4>
                                        <p>{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workshop CTA */}
                <section className="ueber-workshop">
                    <div className="container">
                        <div className="workshop-card">
                            <h3>{t.workshop.title}</h3>
                            <p>{t.workshop.text}</p>
                            <a href="/kontakt" className="btn btn-primary">{t.workshop.cta}</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
