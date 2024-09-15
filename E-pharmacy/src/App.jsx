import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Auth, { useAuth } from "./Authentication/Auth";
import { Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Createstorepage from "./Pages/Createstorepage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import ShopPage from "./Pages/ShopPage";
import ProductInfo from "./Components/Products/ProductInfo";
import Productpage from "./Pages/Productpage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
}
function AuthenticationDoneRoute({ children }) {
  const authContext = useAuth();
  if (!authContext.isAuthenticated) {
    return children;
  } else {
    return <Navigate to={"/"}></Navigate>;
  }
}

function App() {
  return (
    <Auth>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthenticatedRoute>
                <Home></Home>
              </AuthenticatedRoute>
            }
          />{" "}
          {/* Root route */}
          <Route
            path="/createstore"
            element={
              <AuthenticatedRoute>
                <Createstorepage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthenticationDoneRoute>
                <LoginPage />
              </AuthenticationDoneRoute>
            }
          />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route
            path="/shop"
            element={
              <AuthenticatedRoute>
                <ShopPage />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/products/:vendorid"
            element={
              <AuthenticatedRoute>
                <Productpage></Productpage>
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/productdetails/:productid"
            element={
              <AuthenticatedRoute>
                <ProductDetailsPage></ProductDetailsPage>
              </AuthenticatedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Auth>
  );
}

export default App;
