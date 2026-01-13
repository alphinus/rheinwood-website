import { useLanguage } from '../lib/LanguageContext';
import './ProductsSection.css';

const products = [
    {
        id: 'floor-lamp-01',
        image: '/images/product-floor-lamp-01.png',
        type: 'floorLamp',
        price: 890,
        badge: 'bestseller',
    },
    {
        id: 'table-lamp-01',
        image: '/images/product-table-lamp-01.png',
        type: 'tableLamp',
        price: 390,
        badge: 'new',
    },
    {
        id: 'wall-lamp-01',
        image: '/images/product-wall-lamp-01.png',
        type: 'wallLamp',
        price: 450,
        badge: null,
    },
];

export default function ProductsSection() {
    const { t } = useLanguage();

    return (
        <section className="products-section" id="products">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t('products.title')}</h2>
                    <a href="https://rheinwood.ch" className="view-all-link" target="_blank" rel="noopener noreferrer">
                        {t('products.viewAll')} →
                    </a>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <article
                            className="product-card"
                            key={product.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="product-image-wrapper">
                                {product.badge && (
                                    <span className={`product-badge badge-${product.badge}`}>
                                        {t(`products.${product.badge}`)}
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={t(`products.${product.type}`)}
                                    className="product-image"
                                    loading="lazy"
                                />
                                <div className="product-overlay">
                                    <a
                                        href="https://rheinwood.ch"
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t('products.viewProduct')}
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{t(`products.${product.type}`)}</h3>
                                <p className="product-price">CHF {product.price.toLocaleString()}</p>
                                <span className="product-unique">{t('products.oneOfAKind')}</span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="collection-banner">
                    <img
                        src="/images/collection-banner.png"
                        alt="Rheinwood Collection"
                        className="collection-image"
                    />
                    <div className="collection-content">
                        <h3 className="collection-title">{t('about.intro')}</h3>
                        <a href="#about" className="btn btn-ghost">
                            {t('common.learnMore')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
