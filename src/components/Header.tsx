import { Link } from "react-router-dom";

function Header() {

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                background: "#282c34",
                color: "white",
            }}
        >
            <nav style={{ display: "flex", gap: "15px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    Главная
                </Link>
                <Link to="/favorites" style={{ color: "white", textDecoration: "none" }}>
                    Избранное
                </Link>
                <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
                    Корзина
                </Link>
                <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
                    О нас
                </Link>
                <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
                    Контакты
                </Link>
            </nav>
        </header>
    );
}

export default Header;