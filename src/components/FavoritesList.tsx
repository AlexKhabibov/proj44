import { useAuthStore } from "../store/useAuthStore";
import ProductCard from "../components/ProductCard/ProductCardUI";

function FavoritesList() {
    const { user, usersData } = useAuthStore();
    const favorites = user ? usersData[user.email]?.favorites || [] : [];

    return (
        <div>
            <h2>Избранное</h2>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {favorites.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default FavoritesList;