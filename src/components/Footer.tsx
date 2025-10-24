import { Link } from "react-router";

function Footer() {

    return (
        <footer
            style={{
                display: "flex",
                gap: '50px',
                alignItems: "center",
                padding: "10px 20px",
                background: "#282c34",
                color: "white",
            }}
        >
            <Link to='/projects'>Проекты</Link>
            <Link to='/feedbacks'>Отзывы</Link>
            <Link to='/information'>Инорфмация</Link>
            <Link to='/marketing'>Рекламодатели</Link>
            <Link to='/docs'>Документация</Link>
        </footer>
    );
}

export default Footer;