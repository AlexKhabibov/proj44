import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import FavoritesPage from "../pages/FavoritesPage";
import UserDashboardPage from "../pages/UserDashboardPage";
import CartPage from "../pages/CartPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProjectsPage from "../pages/ProjectsPage";
import FeedbacksPage from "../pages/FeedbackPage";
import MarketingPage from "../pages/MarketingPage";
import InformationPage from "../pages/InformationPage";
import DocksPage from "../pages/DocksPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={< MainPage />} />
            <Route path="/dashboard" element={< UserDashboardPage />} />
            <Route path="/favorites" element={< FavoritesPage />} />
            <Route path="/cart" element={< CartPage />} />
            <Route path="/product/:id" element={< ProductDetailsPage />} />
            <Route path="/projects" element={< ProjectsPage />} />
            <Route path="/feedbacks" element={< FeedbacksPage />} />
            <Route path="/marketing" element={< MarketingPage />} />
            <Route path="/information" element={< InformationPage />} />
            <Route path="/docks" element={< DocksPage />} />
        </Routes>
    );
}

export default AppRoutes;