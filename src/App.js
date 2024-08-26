import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Feature from "./components/Feature";

const App = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="flex flex-col min-h-screen bg-whiteColor dark:bg-blackColor text-blackColor dark:text-whiteColor">
      <Header />
      <button onClick={() => darkModeHandler()}>
        {
          dark && "dark" // render sunny when dark is true
        }
        {
          !dark && "light" // render moon when dark is false
        }
      </button>
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
