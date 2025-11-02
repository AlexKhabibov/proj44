// Товар
export interface IProduct {
    id: number;           // уникальный идентификатор товара
    name: string;         // название товара
    price: number;        // цена
    description: string;  // описание товара
    image: string;        // ссылка на изображение
}

// Пользователь
export interface IUser {
    id: number;           // уникальный идентификатор
    name: string;         // имя пользователя
    email: string;        // email, используется для логина
    token?: string;       // необязательный токен или пароль (можно хранить хэш)
}

// Интерфейс контекста авторизации (если нужен)
export interface IAuthContext {
    user: IUser | null;
    login: (user: IUser) => void;
    logout: () => void;
    toggleFavorite: (productId: number) => void;
    toggleCart: (productId: number) => void;
}

// Пропсы для компонента карточки
export interface CardInfoProps {
    product: IProduct;
}

// Состояние стора авторизации (Zustand)
export interface AuthState {
    user: IUser | null;
    isAuth: boolean;
    cart: IProduct[];
    favorites: IProduct[];
    login: (user: IUser) => void;
    logout: () => void;
    addToCart: (product: IProduct) => void;
    removeFromCart: (id: number) => void;
    addToFavorites: (product: IProduct) => void;
    removeFromFavorites: (id: number) => void;
}

export interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}