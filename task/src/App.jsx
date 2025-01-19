import React from "react";
import "./index.css";
import Beautiful from "./pages/Beautiful";
import Navbar from "./components/Navbar";
import Company from "./pages/Company";
import Features from "./pages/Features";
import Sisy from "./pages/Sisy";
import Qustions from "./pages/Qustions";
import Blog from "./pages/Blog";
import NewTrail from "./pages/NewTrial";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Beautiful />
      <Company />
      <Features />
      <Sisy />
      <Qustions />
      <Blog />
      <NewTrail />
      <Footer />
    </div>
  );
};

export default App;
