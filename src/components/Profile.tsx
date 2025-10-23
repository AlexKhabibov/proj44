// import { Link, useNavigate } from "react-router";

// function Profile() {

//     const navigate = useNavigate();

//     return (
//         <div>
//             <div style={{ display: "flex", gap: "15px", alignItems: "center", marginLeft: '20px' }}>
//                 {user ? (
//                     <>
//                         <span
//                             style={{ cursor: "pointer", textDecoration: "underline" }}
//                             onClick={() => navigate("/profile")}
//                         >
//                             {user.name}
//                         </span>

//                         <Link
//                             to="/favorites"
//                             style={{
//                                 color: "white",
//                                 textDecoration: "none",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "5px",
//                             }}
//                         >
//                             ❤️ {user.favorites.length}
//                         </Link>

//                         <Link
//                             to="/cart"
//                             style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}
//                         >
//                             👜 {user.cart.length}
//                         </Link>

//                         <button
//                             onClick={logout}
//                             style={{
//                                 marginLeft: "15px",
//                                 padding: "5px 10px",
//                                 cursor: "pointer",
//                                 borderRadius: "4px",
//                                 border: "none",
//                                 color: "white",
//                                 textDecoration: "none"
//                             }}
//                         >
//                             Выйти
//                         </button>
//                     </>
//                 ) : (
//                     <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
//                         Войти
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Profile;