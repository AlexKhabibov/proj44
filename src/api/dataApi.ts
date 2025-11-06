import type { IProduct } from "../data/types";

async function fetchData<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка при запросе:", error);
        throw error;
    }
}

export async function loadProducts() {
    const url = "https://fakestoreapi.com/products";
    const products = await fetchData<IProduct[]>(url);
    return products;
}