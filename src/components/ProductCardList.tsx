import { useEffect, useState } from "react";
import type { IProduct } from "../data/types";
import ProductCard from "./ProductCard";

function ProductCardList() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("/data.json");
                if (!res.ok) throw new Error(`Ошибка загрузки (${res.status})`);

                const data = (await res.json()) as IProduct[];
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

    if (loading) return <div style={{ padding: 20 }}>Загрузка товаров...</div>;
    if (error) return <div style={{ padding: 20, color: "red" }}>Ошибка: {error}</div>;

    return (
        <div style={{ display: "flex", gap: 20, padding: 20, flexWrap: "wrap" }}>
            {products.map(product => (
                <ProductCard key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image} id={product.id} />
            ))}
        </div>
    );
}

export default ProductCardList;