export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export interface IUser {
    id: number;
    name: string;
    email: string;
    token?: string;
}

export interface IAuthContext {
    user: IUser | null;
    login: (user: IUser) => void;
    logout: () => void;
    toggleFavorite: (productId: number) => void;
    toggleCart: (productId: number) => void;
}

export interface CardInfoProps {
    product: IProduct;
}

interface UserData {
    cart: IProduct[];
    favorites: IProduct[];
}

export interface AuthState {
    user: IUser | null;
    isAuth: boolean;
    usersData: Record<string, UserData>;
    login: (user: IUser) => void;
    logout: () => void;
    addToCart: (product: IProduct) => void;
    removeFromCart: (id: number) => void;
    addToFavorites: (product: IProduct) => void;
    removeFromFavorites: (id: number) => void;
}

export interface ProductCardProps extends Partial<IProduct> {
    product: IProduct;
}

export type UserDashboardBarUIProps = {
    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    isAuth: boolean;
    user: { id: number; name: string; email: string } | null;
    cart: IProduct[];
    favorites: IProduct[];
    onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
    onRegister: () => void;
    onLogout: () => void;
};