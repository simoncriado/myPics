import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles

// Pages & Components
import Home from "./pages/Home";
import Search from "./pages/Search";
import MyFavs from "./pages/MyFavs";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-bgColor w-full min-h-screen ">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myFavs" element={<MyFavs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
