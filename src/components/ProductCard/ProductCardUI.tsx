import type { ProductCardProps } from "../../data/types";
import { FaHeart, FaRegHeart, FaShoppingCart, FaCartPlus } from "react-icons/fa";
import ProductCardLogic from "./ProductCardLogic";
import styles from "./ProductCardUI.module.css";

function ProductCardUI({ product }: ProductCardProps) {
    const {
        isFavorite,
        isInCart,
        handleFavoriteClick,
        handleCartClick,
    } = ProductCardLogic(product);

    const { title, description, price, image } = product;

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img
                    src={image}
                    alt={title}
                    className={styles.image}
                />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>{price} ₽</p>
            </div>

            <div className={styles.actions}>
                <button
                    onClick={handleFavoriteClick}
                    className={styles.iconButton}
                >
                    {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
                </button>

                <button
                    onClick={handleCartClick}
                    className={styles.iconButton}
                >
                    {isInCart ? <FaShoppingCart color="#f39c12" /> : <FaCartPlus color="gray" />}
                </button>
            </div>
        </div>
    );
}

export default ProductCardUI;