import type { ProductCardProps } from "../../data/types";
import { FaHeart, FaRegHeart, FaShoppingCart, FaCartPlus } from "react-icons/fa";
import ProductCardLogic from "./ProductCardLogic";

function ProductCardUI({ product }: ProductCardProps) {

    const {
        isFavorite,
        isInCart,
        handleFavoriteClick,
        handleCartClick,
    } = ProductCardLogic(product);

    const { title, description, price, image } = product;

    return (
        <div
            className="card"
            style={{ width: 220, padding: 10, border: "1px solid #ccc", borderRadius: 8 }}
        >
            <div style={{ cursor: "pointer" }}>
                <img
                    src={image}
                    alt={title}
                    style={{ width: "100%", height: 150, objectFit: "contain", borderRadius: 4 }}
                />
                <h3>{title}</h3>
                <p style={{ minHeight: 40 }}>{description}</p>
                <p>{price} ₽</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                <button
                    onClick={handleFavoriteClick}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20 }}
                >
                    {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
                </button>

                <button
                    onClick={handleCartClick}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20 }}
                >
                    {isInCart ? <FaShoppingCart color="#f39c12" /> : <FaCartPlus color="gray" />}
                </button>
            </div>
        </div>
    );
}

export default ProductCardUI;