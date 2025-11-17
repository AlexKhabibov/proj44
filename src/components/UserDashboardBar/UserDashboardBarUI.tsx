import UserDashboardBarLogic from "./UserDashboardBarLogic";

export default function UserDashboardBarUI() {

    const {
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
    } = UserDashboardBarLogic();

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
