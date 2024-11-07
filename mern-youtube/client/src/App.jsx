import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Authlogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
// import CheckAuth from "./components/common/check-auth";
// import UnauthPage from "./pages/unauth-page";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { checkAuth } from "./store/auth-slice";
// import { Skeleton } from "@/components/ui/skeleton";
// import PaypalReturnPage from "./pages/shopping-view/paypal-return";
// import PaymentSuccessPage from "./pages/shopping-view/payment-success";
// import SearchProducts from "./pages/shopping-view/search";


function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
    
   
     
        <Routes>
          <Route path="/auth" element={<AuthLayout/>}>
            <Route path="login" element={<Authlogin/>} ></Route>
            <Route path="register" element={<AuthRegister/>}></Route>
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
           <Route path="dashboard" element={<AdminDashboard/>}/>
           <Route path="products" element={<AdminProducts/>}/>
           <Route path="orders" element={<AdminOrders/>}/>
           <Route path="features" element={<AdminFeatures/>}/>
          </Route>
          <Route path="/shop" element={<ShoppingLayout/>}>

           <Route path="home" element={<ShoppingHome/>} />
           <Route path="listing" element={<ShoppingListing/>} />
           <Route path="checkout" element={<ShoppingCheckout/>} />
           <Route path="account" element={<ShoppingAccount/>} />

          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
   
    </div>
  )
}

export default App;