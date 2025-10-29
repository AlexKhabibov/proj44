import type { IProduct } from "../data/types";

function ProductCard({ name, description, price, image }: IProduct) {

    const handleRedirect = () => {

    }

    return (
        <div
            className="card"
            style={{ width: 220, padding: 10, border: "1px solid #ccc", borderRadius: 8 }}
        >
            {/* зона клика */}
            <div onClick={handleRedirect} style={{ cursor: "pointer" }}>
                {/* сделать редирект */}
                <img
                    src={image}
                    alt={name}
                    style={{ width: "100%", height: 150, objectFit: "contain", borderRadius: 4 }}
                />
                <h3>{name}</h3>
                <p style={{ minHeight: 40 }}>{description}</p>
                <p>{price} ₽</p>
            </div>
            {/* добавить кнопки "лайк" и "в корзину" */}
        </div>
    );
}

export default ProductCard;