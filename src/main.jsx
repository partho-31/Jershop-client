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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
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
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
