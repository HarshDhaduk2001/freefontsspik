import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Feature from "./components/Feature";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
      <Feature />
      <Footer />
    </div>
  );
};

export default App;
