import ProductCardUI from "../ProductCard/ProductCardUI";
import CartLogic from "./CartLogic";
import styles from "./CartUI.module.css";

function CartUI() {
    const { cart } = CartLogic();

    if (!cart || cart.length === 0) {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Корзина</h2>
                <p className={styles.emptyMessage}>Ваша корзина пуста</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Корзина</h2>
            <div className={styles.productsGrid}>
                {cart.map((product) => (
                    <ProductCardUI key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default CartUI;