import { useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function UserDashboard() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const { login } = useAuth(); // получаем метод контекста

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem(email) || "{}");

        if (storedUser.token === password) {
            localStorage.setItem("currentUser", email);
            login(email); // обновляем контекст

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

        const newUser = { email, token: password };
        localStorage.setItem(email, JSON.stringify(newUser));
        localStorage.setItem("currentUser", email);

        login(email); // обновляем контекст

        alert("Регистрация успешна!");
        navigate("/dashboard");
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Войти</button>
                <button onClick={handleRegister} type="button">Регистрация</button>
            </form>
        </div>
    );
}

export default UserDashboard;