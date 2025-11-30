import ProductCardDetails from "../components/ProductCardDetails/ProductCardDetailsUI";
import type { ProductCardProps } from "../data/types";

function ProductDetailsPage({ product }: ProductCardProps) {
    return (
        <>
            <ProductCardDetails key={product.id} product={product}/>
        </>
    );
}

export default ProductDetailsPage;