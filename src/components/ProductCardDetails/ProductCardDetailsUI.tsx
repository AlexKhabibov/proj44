import type { ProductCardProps } from "../../data/types";
import ProductCardUI from "../ProductCard/ProductCardUI";

function ProductCardDetails({ product }: ProductCardProps) {

    return (
        <>
            <ProductCardUI key={product.id} product={product} />
        </>
    );
}

export default ProductCardDetails;