import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { ToastContainer } from "react-toastify";
import { CategoryProvider } from "./contexts/CategoryContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='1055881909624-6u5s1vm5aoglf5lh5ohvprua3tbn507t.apps.googleusercontent.com' >
      <AuthProvider>
        <CategoryProvider>
          <ProductsProvider>
            <CartProvider>
              <AppRoutes />
              <ToastContainer
                autoClose={3000}
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
              />
            </CartProvider>
          </ProductsProvider>
        </CategoryProvider>
      </AuthProvider></GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
