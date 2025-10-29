import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import MainPage from "../pages/MainPage";
import FavoritesPage from "../pages/FavoritesPage";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProjectsPage from "../pages/ProjectsPage";
import MarketingPage from "../pages/MarketingPage";
import InformationPage from "../pages/InformationPage";
import DocksPage from "../pages/DocksPage";
import FeedbacksPage from "../pages/FeedbackPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // общий Layout как каркас, который будет доступен всегда, куда бы мы не перешли на странице
        children: [
            { index: true, element: <MainPage /> },
            { path: "favorites", element: <FavoritesPage /> },
            { path: "cart", element: <CartPage /> },
            { path: "product/:id", element: <ProductDetailsPage /> },
            { path: "projects", element: <ProjectsPage /> },
            { path: "feedbacks", element: <FeedbacksPage /> },
            { path: "marketing", element: <MarketingPage /> },
            { path: "information", element: <InformationPage /> },
            { path: "docks", element: <DocksPage /> },
        ],
    },
]);
