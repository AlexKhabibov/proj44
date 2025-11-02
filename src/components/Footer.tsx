import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer
            style={{
                display: "flex",
                justifyContent: 'space-around',
                padding: "10px 20px",
                background: "#282c34",
                fontSize: '12px',
                textDecoration: 'none',
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