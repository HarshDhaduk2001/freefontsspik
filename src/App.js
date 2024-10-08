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
import SetPassword from "./components/pages/SetPassword";
import HomeDetails from "./components/pages/HomeDetails";
import CategoriesDetail from "./components/pages/CategoriesDetail";
import FontsPairs from "./components/pages/FontsPairs";

const App = () => {
  const location = useLocation();

  const hideHeaderFooter =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/set-password";

  return (
    <div
      className={`flex flex-col ${
        !hideHeaderFooter ? "items-center justify-center" : ""
      } min-h-screen bg-lightMode1 dark:bg-darkMode1 text-darkCharcol dark:text-whiteColor`}
    >
      <div className={`${!hideHeaderFooter ? "!max-w-[1440px]" : ""}`}>
        {!hideHeaderFooter && <Header />}
        <ThemeToggle hideHeaderFooter={hideHeaderFooter} />
        <ToastContainer />
        <div className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="set-password" element={<SetPassword />} />
            <Route path="categories" element={<Categories />} />
            <Route path="fontspairs" element={<FontsPairs />} />
            <Route path="forum" element={<Forum />} />
            <Route path="contactus" element={<Contact />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="howtoinstall" element={<Howtoinstall />} />
            <Route path="licenses" element={<License />} />
            <Route path="faq" element={<FAQ />} />

            {/* Dynamic Route */}
            <Route path="/:id" element={<HomeDetails />} />
            <Route path="categories/:id" element={<CategoriesDetail />} />
          </Routes>
        </div>
        {!hideHeaderFooter && <Footer />}
      </div>
    </div>
  );
};

export default App;
