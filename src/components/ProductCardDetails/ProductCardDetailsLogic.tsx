import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadProducts } from "../../api/dataApi";
import type { IProduct } from "../../data/types";
import { useAuthStore } from "../../store/useAuthStore";

function ProductCardDetailsLogic() {
    const { id } = useParams();

    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    const user = useAuthStore((state) => state.user);
    const usersData = useAuthStore((state) => state.usersData);
    const addToFavorites = useAuthStore((state) => state.addToFavorites);
    const removeFromFavorites = useAuthStore((state) => state.removeFromFavorites);
    const addToCart = useAuthStore((state) => state.addToCart);
    const removeFromCart = useAuthStore((state) => state.removeFromCart);

    useEffect(() => {
        loadProducts().then((products) => {
            const found = products.find((p) => p.id === Number(id));
            setProduct(found || null);
            setLoading(false);
        });
    }, [id]);

    const favorites = user ? usersData[user.email]?.favorites || [] : [];
    const cart = user ? usersData[user.email]?.cart || [] : [];

    const isFavorite = product ? favorites.some((p) => p.id === product.id) : false;
    const isInCart = product ? cart.some((p) => p.id === product.id) : false;

    const handleFavoriteClick = () => {
        if (!user || !product) return;
        if (isFavorite) removeFromFavorites(product.id);
        else addToFavorites(product);
    };

    const handleCartClick = () => {
        if (!user || !product) return;
        if (isInCart) removeFromCart(product.id);
        else addToCart(product);
    };

    return {
        product,
        loading,
        isFavorite,
        isInCart,
        handleFavoriteClick,
        handleCartClick,
    };
}

export default ProductCardDetailsLogic;