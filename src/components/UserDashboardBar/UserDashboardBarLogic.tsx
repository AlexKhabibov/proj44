import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

function UserDashboardBarLogic() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { login, logout, isAuth, user, usersData } = useAuthStore();

    const cart = user ? usersData[user.email]?.cart || [] : [];
    const favorites = user ? usersData[user.email]?.favorites || [] : [];

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem(email) || "{}");

        if (storedUser.token === password) {
            login({ id: Date.now(), name: email, email });
            alert("Вход успешен!");
            navigate("/");
        } else {
            alert("Неверный логин или пароль!");
        }
    };

    const handleRegister = () => {
        if (localStorage.getItem(email)) {
            alert("Пользователь уже существует!");
            return;
        }

        const newUser = { id: Date.now(), name: email, email, token: password };
        localStorage.setItem(email, JSON.stringify(newUser));
        login(newUser);

        alert("Регистрация успешна!");
        navigate("/");
    };

    const handleLogout = () => {
        logout();
        alert("Вы вышли из аккаунта");
        navigate("/");
    };

    return {
        email,
        password,
        setEmail,
        setPassword,
        isAuth,
        user,
        cart,
        favorites,
        handleLogin,
        handleRegister,
        handleLogout
    };
}

export default UserDashboardBarLogic;