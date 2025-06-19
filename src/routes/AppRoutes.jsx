import { Routes } from "react-router";
import { Route } from "react-router";
import HomePage from "../pages/HomePage"
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminDashboard from "../pages/AdminDashboard";
import ProductViewPage from "../pages/ProductViewPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";



const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route index element={<HomePage/>} />
        <Route path='registration' element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path='products/:id' element={<ProductViewPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="order" element={<OrderPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
