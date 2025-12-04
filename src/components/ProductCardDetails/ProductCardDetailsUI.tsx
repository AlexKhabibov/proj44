import ProductCardDetailsLogic from "./ProductCardDetailsLogic";
import styles from "./ProductCardDetailsUI.module.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

function ProductCardDetailsUI() {
    const {
        product,
        loading,
        isFavorite,
        isInCart,
        handleFavoriteClick,
        handleCartClick,
    } = ProductCardDetailsLogic();

    if (loading) {
        return <h2 className={styles.status}>Загрузка...</h2>;
    }

    if (!product) {
        return <h2 className={styles.status}>Товар не найден</h2>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>

                <img className={styles.image} src={product.image} alt={product.title} />

                <div className={styles.info}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.price}>{product.price} ₽</p>
                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.actions}>
                        <button
                            onClick={(e) => { e.stopPropagation(); handleFavoriteClick(); }}
                            className={styles.actionButton}
                        >
                            {isFavorite ? <FaHeart color="red" /> : "Добавить в избранное"}
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); handleCartClick(); }}
                            className={styles.actionButton}
                        >
                            {isInCart ? <FaShoppingCart color="#f39c12" /> : "Добавить в корзину"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCardDetailsUI;