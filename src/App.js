import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import FAQ from "./components/FAQ";
import License from "./components/License";
import Howtoinstall from "./components/Howtoinstall";
import AboutContact from "./components/AboutContact";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-whiteColor dark:bg-blackColor text-blackColor dark:text-whiteColor">
      <Header />
      <ThemeToggle />
      <div className="flex-grow">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutContact />} />
          <Route path="contactus" element={<AboutContact />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="howtoinstall" element={<Howtoinstall />} />
          <Route path="licenses" element={<License />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
