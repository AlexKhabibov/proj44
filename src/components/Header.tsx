import { Link } from "react-router-dom";

function Header() {

    return (
        <header
            style={{
                display: "flex",
                gap: '50px',
                alignItems: "center",
                padding: "10px 20px",
                background: "#282c34",
                color: "white",
            }}
        >
            <Link to='/'>Главная</Link>
            <Link to='/catalog'>Каталог</Link>
            <Link to='/dashboard'>Кабинет</Link>
            <Link to='/cart'>Корзина</Link>
            <Link to='/contacts'>Контакты</Link>
        </header>
    );
}

export default Header;