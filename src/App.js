import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./components/pages/Home";
import FAQ from "./components/pages/FAQ";
import License from "./components/pages/License";
import Howtoinstall from "./components/pages/Howtoinstall";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Contact from "./components/pages/Contact";
import Forum from "./components/pages/Forum";
import Categories from "./components/pages/Categories";
import Login from "./components/pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/pages/Signup";
import ForgotPassword from "./components/pages/ForgotPassword";

const App = () => {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/forgot-password";

  return (
    <div className="flex flex-col min-h-screen bg-whiteColor dark:bg-blackColor text-blackColor dark:text-whiteColor">
      {!hideHeaderFooter && <Header />}
      <ThemeToggle hideHeaderFooter={hideHeaderFooter} />
      <ToastContainer />
      <div className="flex-grow">
        <Routes>
          <Route index element={<Home />} />
          Signup
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="categories" element={<Categories />} />
          <Route path="forum" element={<Forum />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="howtoinstall" element={<Howtoinstall />} />
          <Route path="licenses" element={<License />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
