import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

function UserDashboardBar() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);
    const isAuth = useAuthStore(state => state.isAuth);
    const user = useAuthStore(state => state.user);
    const cart = useAuthStore(state => state.cart);
    const favorites = useAuthStore(state => state.favorites);

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

    if (isAuth && user) {
        return (
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <p>Пользователь: {user.name}</p>
                <p>Избранное: {favorites.length}</p>
                <p>Корзина: {cart.length}</p>
                <button onClick={handleLogout}>Выйти</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleLogin} style={{ display: "flex", gap: 10 }}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button type="submit">Войти</button>
            <button type="button" onClick={handleRegister}>Регистрация</button>
        </form>
    );
}

export default UserDashboardBar;