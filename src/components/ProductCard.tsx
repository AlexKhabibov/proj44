import type { ProductCardProps } from "../data/types";
import { useAuthStore } from "../store/useAuthStore";
import { FaHeart, FaRegHeart, FaShoppingCart, FaCartPlus } from "react-icons/fa";

function ProductCard({ id, name, description, price, image }: ProductCardProps) {
    const addToFavorites = useAuthStore((state) => state.addToFavorites);
    const removeFromFavorites = useAuthStore((state) => state.removeFromFavorites);
    const addToCart = useAuthStore((state) => state.addToCart);
    const removeFromCart = useAuthStore((state) => state.removeFromCart);
    const favorites = useAuthStore((state) => state.favorites);
    const cart = useAuthStore((state) => state.cart);

    const isFavorite = favorites.some((p) => p.id === id);
    const isInCart = cart.some((p) => p.id === id);

    const handleFavoriteClick = () => {
        if (isFavorite) removeFromFavorites(id);
        else addToFavorites({ id, name, description, price, image });
    };

    const handleCartClick = () => {
        if (isInCart) removeFromCart(id);
        else addToCart({ id, name, description, price, image });
    };

    return (
        <div
            className="card"
            style={{ width: 220, padding: 10, border: "1px solid #ccc", borderRadius: 8 }}
        >
            <div style={{ cursor: "pointer" }}>
                <img
                    src={image}
                    alt={name}
                    style={{ width: "100%", height: 150, objectFit: "contain", borderRadius: 4 }}
                />
                <h3>{name}</h3>
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

export default ProductCard;