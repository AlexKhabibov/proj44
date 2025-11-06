import { useEffect, useState } from "react";
import type { IProduct } from "../data/types";
import ProductCard from "./ProductCard";
import { loadProducts } from "../api/dataApi";

function ProductCardList() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const data = await loadProducts(); // ✅ вызываем функцию из dataApi
                if (!cancelled) setProducts(data);
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : "Неизвестная ошибка");
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();
        return () => { cancelled = true; };
    }, []);

    if (loading || error)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    width: '1200px',
                }}
            >
                <h3 style={{ padding: 20, color: error ? "red" : "inherit" }}>
                    {loading ? "Загрузка товаров..." : `Ошибка: ${error}`}
                </h3>
            </div>
        );

    return (
        <div style={{ display: "flex", gap: 20, padding: 20, flexWrap: "wrap", justifyContent: 'center' }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductCardList;