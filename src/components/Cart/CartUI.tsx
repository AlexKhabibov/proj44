import { useAuthStore } from "../../store/useAuthStore";
import ProductCard from "../ProductCard/ProductCardUI";

function Cart() {

    const { user, usersData } = useAuthStore();
    const cart = user ? usersData[user.email]?.cart || [] : [];
    return (
        <div>
            <h2>Корзина</h2>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {cart.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Cart;