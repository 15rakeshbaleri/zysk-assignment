import React from "react";
import "./index.css";
import Beautiful from "./pages/Beautiful";
import Navbar from "./components/Navbar";
import Companies from "./pages/companies";
import Features from "./pages/Features";
import Sisy from "./pages/Sisy";
import Qustions from "./pages/Qustions";
import Blog from "./pages/Blog";
import Trail from "./pages/trial";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Beautiful />
      <Companies />
      <Features />
      <Sisy />
      <Qustions />
      <Blog />
      <Trail />
      <Footer />
    </div>
  );
};

export default App;
