import type { IProduct } from "../../data/types";
import { useAuthStore } from "../../store/useAuthStore";

function ProductCardLogic(product: IProduct) {
    const { id } = product;

    const user = useAuthStore((state) => state.user);
    const usersData = useAuthStore((state) => state.usersData);
    const addToFavorites = useAuthStore((state) => state.addToFavorites);
    const removeFromFavorites = useAuthStore((state) => state.removeFromFavorites);
    const addToCart = useAuthStore((state) => state.addToCart);
    const removeFromCart = useAuthStore((state) => state.removeFromCart);

    const favorites = user ? usersData[user.email]?.favorites || [] : [];
    const cart = user ? usersData[user.email]?.cart || [] : [];

    const isFavorite = favorites.some((p) => p.id === id);
    const isInCart = cart.some((p) => p.id === id);

    const handleFavoriteClick = () => {
        if (!user) return;
        if (isFavorite) removeFromFavorites(id);
        else addToFavorites(product);
    };

    const handleCartClick = () => {
        if (!user) return;
        if (isInCart) removeFromCart(id);
        else addToCart(product);
    };

    return {
        isFavorite,
        isInCart,
        handleFavoriteClick,
        handleCartClick
    };
}

export default ProductCardLogic;