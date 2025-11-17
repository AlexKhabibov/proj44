import { useEffect, useState } from "react";
import type { IProduct } from "../../data/types";
import { loadProducts } from "../../api/dataApi";

function ProductCardListLogic() {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const data = await loadProducts();
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

    return { products, loading, error };
}

export default ProductCardListLogic;