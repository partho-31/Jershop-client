import { Routes } from "react-router";
import { Route } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminDashboard from "../pages/AdminDashboard";
import ProductViewPage from "../pages/ProductViewPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import PrivateRoutes from "./PrivateRoutes";
import ActivateAcc from "../components/registration/ActivateAcc";
import PaymentSuccess from "../components/payments/PaymentSuccess";
import AddProductForm from "../components/products/form/AddProductForm";
import AddCategoryForm from "../components/category/AddCategoryForm";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="activate/:uid/:token/" element={<ActivateAcc />} />
        <Route path="payment/success/" element={<PaymentSuccess />} />
        {/* <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        /> */}
        <Route path="about-us" element={<AboutUs/>} />
        <Route path="contact-us" element={<ContactUs/>} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductViewPage />} />
        <Route path="cart" element={<CartPage />} />
        </Route>
        
        <Route
        path="dashboard"
        element={
          <PrivateRoutes>
          <DashboardLayout />
          </PrivateRoutes>
        }
        >
        <Route index element={<AdminDashboard />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="addCategory" element={<AddCategoryForm/>} />
        <Route path="products/add" element={<AddProductForm />} />
        </Route>
        </Routes>
      );
    };

export default AppRoutes;
