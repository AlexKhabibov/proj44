import ProductCardDetailsLogic from "./ProductCardDetailsLogic";
import styles from "./ProductCardDetailsUI.module.css";

function ProductCardDetailsUI() {
    const { product, loading } = ProductCardDetailsLogic();

    if (loading) {
        return <h2 className={styles.message}>Загрузка...</h2>;
    }

    if (!product) {
        return <h2 className={styles.message}>Товар не найден</h2>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageBlock}>
                    <img src={product.image} alt={product.title} />
                </div>

                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>{product.title}</h1>

                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.meta}>
                        <span className={styles.category}>
                            Категория: {product.category}
                        </span>
                        <span className={styles.rating}>
                            ⭐ {product.rating.rate} / {product.rating.count} отзывов
                        </span>
                    </div>

                    <div className={styles.priceBlock}>
                        <span className={styles.price}>${product.price}</span>
                    </div>

                    <button className={styles.buyButton}>Добавить в корзину</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCardDetailsUI;