import MainLayout from "../layout/MainLayout";
import MainPage from "../pages/MainPage";
import FavoritesPage from "../pages/FavoritesPage";
import CartPage from "../pages/CartPage";
// import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProjectsPage from "../pages/ProjectsPage";
import MarketingPage from "../pages/MarketingPage";
import InformationPage from "../pages/InformationPage";
import FeedbacksPage from "../pages/FeedbackPage";
import CatalogPage from "../pages/CatalogPage";
import ContactsPage from "../pages/ContactsPage";
import DocsPage from "../pages/DocksPage";
import { createBrowserRouter } from "react-router-dom";
import UserProfilePage from "../pages/UserProfilePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // общий Layout как каркас через Outlet, который будет доступен всегда, куда бы мы не перешли на странице
        children: [
            { index: true, element: <MainPage /> },
            { path: "favorites", element: <FavoritesPage /> },
            { path: "cart", element: <CartPage /> },
            { path: "catalog", element: <CatalogPage /> },
            { path: "contacts", element: <ContactsPage /> },
            { path: "dashboard", element: < UserProfilePage /> },
            // { path: "product/:id", element: <ProductDetailsPage /> },
            { path: "projects", element: <ProjectsPage /> },
            { path: "feedbacks", element: <FeedbacksPage /> },
            { path: "marketing", element: <MarketingPage /> },
            { path: "information", element: <InformationPage /> },
            { path: "docs", element: <DocsPage /> },
        ],
    },
]);