import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import UserDashboardBar from "../components/UserDashboardBar";

function MainLayout() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <SearchBar />
                <UserDashboardBar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;
