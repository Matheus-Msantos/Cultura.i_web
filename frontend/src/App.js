import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Base.scss';

import CheckoutPage from './Pages/Checkout/Checkout';
import HomePage from './Pages/Home/Home';
import OrderCompletedPage from './Pages/OrderCompleted/OrderCompleted';
import ProductPage from './Pages/Product/Product';
import LoginPage from './Pages/Login/Login';
import RegisterPage from './Pages/Register/Register';
import ProfilePage from './Pages/Profile/Profile';
import OrderPage from './Pages/Order/Order';

import AdminProductPage from './Pages/Admin/Product/ListProduct';
import AdminRegisterProductPage from './Pages/Admin/Product/RegisterProduct';
import AdminEditProductPage from './Pages/Admin/Product/EditProduct';
import AdminCategoryPage from './Pages/Admin/Category/ListCategory';
import AdminRegisterAddress from './Pages/Admin/Category/RegisterAddress';
import AdminEditCategoryPage from './Pages/Admin/Category/EditCategory';
import AdminAddressPage from './Pages/Admin/Address/ListAddress';
import AdminRegisterAddressPage from './Pages/Admin/Address/RegisterAddress';
import AdminEditAddressPage from './Pages/Admin/Address/EditAddress';
import AdminAdvertPage from './Pages/Admin/Advert/ListAdvert';
import AdminRegisterAdvertPage from './Pages/Admin/Advert/RegisterAdvert';
import AdminEditAdvertPage from './Pages/Admin/Advert/EditAdvert';
import AdminUserPage from './Pages/Admin/Users/ListUser';
import AdminEditUserPage from './Pages/Admin/Users/EditUser';
import AdminOrderPage from './Pages/Admin/Order/ListOrder';
import ProfileEditPage from './Pages/Profile/ProfileEdit';
import CategoryPage from './Pages/Category/Category';
import RegisterProducerPage from './Pages/Register/RegisterProducer';
import RegisterAdvertPage from './Pages/Register/RegisterAdvert';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-completed" element={<OrderCompletedPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/producer" element={<RegisterProducerPage />} />
          <Route path="/register/advert" element={<RegisterAdvertPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />

          <Route path="/admin" element={<AdminProductPage />} />
          <Route path="/admin/product/register" element={<AdminRegisterProductPage />} />
          <Route path="/admin/product/edit/:id" element={<AdminEditProductPage />} />
          <Route path="/admin/category" element={<AdminCategoryPage />} />
          <Route path="/admin/category/register" element={<AdminRegisterAddress />} />
          <Route path="/admin/category/edit/:id" element={<AdminEditCategoryPage />} />
          <Route path="/admin/address" element={<AdminAddressPage />} />
          <Route path="/admin/address/register" element={<AdminRegisterAddressPage />} />
          <Route path="/admin/address/edit/:id" element={<AdminEditAddressPage />} />
          <Route path="/admin/advert" element={<AdminAdvertPage />} />
          <Route path="/admin/advert/register" element={<AdminRegisterAdvertPage />} />
          <Route path="/admin/advert/edit/:id" element={<AdminEditAdvertPage />} />
          <Route path="/admin/user" element={<AdminUserPage />} />
          <Route path="/admin/user/edit/:id" element={<AdminEditUserPage />} />
          <Route path="/admin/order" element={<AdminOrderPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
