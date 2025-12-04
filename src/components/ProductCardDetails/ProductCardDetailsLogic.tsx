// components/ProductCardDetails/ProductCardDetailsLogic.ts
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadProducts } from "../../api/dataApi";
import type { IProduct } from "../../data/types";

function ProductCardDetailsLogic() {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            setLoading(true);
            const products = await loadProducts();
            const found = products.find((p) => p.id === Number(id)) || null;

            setProduct(found);
            setLoading(false);
        }

        fetchProduct();
    }, [id]);

    return {
        product,
        loading
    };
}

export default ProductCardDetailsLogic;