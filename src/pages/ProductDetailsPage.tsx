import ProductCardDetails from "../components/ProductCardDetails/ProductCardDetailsUI";
import type { ProductCardProps } from "../data/types";

function ProductDetailsPage({ product }: ProductCardProps) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '1400px'}}>
            <ProductCardDetails key={product.id} product={product}/>
        </div>
    );
}

export default ProductDetailsPage;