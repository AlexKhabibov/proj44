// import { Routes, Route } from "react-router-dom";



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={< />} />
            <Route path="/login" element={< />} />
            <Route path="/dashboard" element={< />} />
            <Route path="/favorites" element={< />} />
            <Route path="/cart" element={< />} />
            <Route path="/product/:id" element={< />} />
        </Routes>
    );
}

export default AppRoutes;