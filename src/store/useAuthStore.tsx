import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState, IProduct, IUser } from "../data/types";

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            isAuth: false,
            usersData: {},

            login: (user: IUser) => {
                const { usersData } = get();
                const userData = usersData[user.email] || { cart: [], favorites: [] };
                set({
                    user,
                    isAuth: true,
                    usersData: {
                        ...usersData,
                        [user.email]: userData
                    }
                });
            },

            logout: () => set({ user: null, isAuth: false }),

            addToCart: (product: IProduct) => {
                const { user, usersData } = get();
                if (!user) return;

                const userData = usersData[user.email] || { cart: [], favorites: [] };
                if (!userData.cart.find(p => p.id === product.id)) {
                    const newCart = [...userData.cart, product];
                    set({
                        usersData: {
                            ...usersData,
                            [user.email]: { ...userData, cart: newCart }
                        }
                    });
                }
            },

            removeFromCart: (id: number) => {
                const { user, usersData } = get();
                if (!user) return;

                const userData = usersData[user.email] || { cart: [], favorites: [] };
                const newCart = userData.cart.filter(p => p.id !== id);
                set({
                    usersData: {
                        ...usersData,
                        [user.email]: { ...userData, cart: newCart }
                    }
                });
            },

            addToFavorites: (product: IProduct) => {
                const { user, usersData } = get();
                if (!user) return;

                const userData = usersData[user.email] || { cart: [], favorites: [] };
                if (!userData.favorites.find(p => p.id === product.id)) {
                    const newFav = [...userData.favorites, product];
                    set({
                        usersData: {
                            ...usersData,
                            [user.email]: { ...userData, favorites: newFav }
                        }
                    });
                }
            },

            removeFromFavorites: (id: number) => {
                const { user, usersData } = get();
                if (!user) return;

                const userData = usersData[user.email] || { cart: [], favorites: [] };
                const newFav = userData.favorites.filter(p => p.id !== id);
                set({
                    usersData: {
                        ...usersData,
                        [user.email]: { ...userData, favorites: newFav }
                    }
                });
            }
        }),
        { name: "auth-storage" }
    )
);