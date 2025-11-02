import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState, IProduct, IUser } from "../data/types";

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            isAuth: false,
            cart: [],
            favorites: [],

            login: (user: IUser) => set({ user, isAuth: true }),
            logout: () => set({ user: null, isAuth: false, cart: [], favorites: [] }),

            addToCart: (product: IProduct) => {
                const cart = get().cart;
                if (!cart.find(p => p.id === product.id)) {
                    set({ cart: [...cart, product] });
                }
            },
            removeFromCart: (id: number) =>
                set({ cart: get().cart.filter(p => p.id !== id) }),

            addToFavorites: (product: IProduct) => {
                const fav = get().favorites;
                if (!fav.find(p => p.id === product.id)) {
                    set({ favorites: [...fav, product] });
                }
            },
            removeFromFavorites: (id: number) =>
                set({ favorites: get().favorites.filter(p => p.id !== id) }),
        }),
        { name: "auth-storage" }
    )
);
