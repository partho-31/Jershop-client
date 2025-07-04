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
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";
import ForgetPassword from "../pages/ForgetPassword";
import PasswordChange from "../pages/PasswordChange";
import PhotoUpload from "../components/products/Gallary/PhotoUpload";
import UserProfilePage from "../components/dashboard/profile/UserProfilePage";
import EditProfileForm from "../components/dashboard/profile/EditProfileForm";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="activate/:uid/:token/" element={<ActivateAcc />} />
        <Route path="payment/success/" element={<PaymentSuccess />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductViewPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="products/:id/add-product_image" element={<PhotoUpload />} />
        
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
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="profile/edit" element={<EditProfileForm/>} />
        <Route path="passwordChange" element={<PasswordChange />} />
        <Route path="addCategory" element={<AddCategoryForm />} />
        <Route path="products/add" element={<AddProductForm />} />
        <Route path="orders" element={<OrderPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
