import type { IProduct } from "./types";

export const products: IProduct[] = [
    {
        id: 1,
        name: "Кроссовки Nike",
        price: 120,
        description: "Комфортные спортивные кроссовки",
        image: "/assets/nike.png"
    },
    {
        id: 2,
        name: "Футболка Adidas",
        price: 35,
        description: "Стильная футболка",
        image: "/assets/adidas.png"
    },
    {
        id: 3,
        name: "Рюкзак Puma",
        price: 60,
        description: "Удобный рюкзак для спорта и прогулок",
        image: "/assets/puma.png"
    },
    {
        id: 4,
        name: "Бейсболка New Era",
        price: 25,
        description: "Классическая бейсболка с логотипом",
        image: "/assets/newera.png"
    },
    {
        id: 5,
        name: "Спортивные штаны Under Armour",
        price: 50,
        description: "Легкие и дышащие штаны для тренировок",
        image: "/assets/underarmour.png"
    }
];


