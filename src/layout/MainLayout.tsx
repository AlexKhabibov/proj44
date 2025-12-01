import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import UserDashboardBarUI from "../components/UserDashboardBar/UserDashboardBarUI";
import styles from "./MainLayout.module.css";

function MainLayout() {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.topBar}>
                <SearchBar />
                <UserDashboardBarUI />
            </div>

            {/* Универсальный контейнер для всех страниц */}
            <div className={styles.contentWrapper}>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
}

export default MainLayout;
