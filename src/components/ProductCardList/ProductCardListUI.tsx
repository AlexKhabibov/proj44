import ProductCardUI from "../ProductCard/ProductCardUI";
import ProductCardListLogic from "./ProductCardListLogic";
import styles from "./ProductCardListUI.module.css";

function ProductCardListUI() {

    const { products, loading, error } = ProductCardListLogic();

    if (loading || error) {
        return (
            <div className={styles.container}>
                <h3 className={error ? styles.errorText : styles.loadingText}>
                    {loading ? "Загрузка товаров..." : `Ошибка: ${error}`}
                </h3>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.productsGrid}>
                {products.map((product) => (
                    <ProductCardUI key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductCardListUI;