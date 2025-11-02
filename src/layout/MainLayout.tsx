import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserDashboard from "../components/UserDashboard";
import SearchBar from "../components/SearchBar";

function MainLayout() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <SearchBar />
                <UserDashboard />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;
