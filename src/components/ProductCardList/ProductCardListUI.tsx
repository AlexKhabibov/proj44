import ProductCardUI from "../ProductCard/ProductCardUI";
import ProductCardListLogic from "./ProductCardListLogic";

function ProductCardListUI() {

    const { products, loading, error } = ProductCardListLogic();

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
                <ProductCardUI key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductCardListUI;