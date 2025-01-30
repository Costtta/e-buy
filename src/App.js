import { useEffect } from "react";
import Connection from "./components/Connection";
import Electronics from "./components/Electronics";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Jewelery from "./components/Jewelery";
import Men from "./components/Men";
import Navbar from "./components/Navbar";
import Women from "./components/Women";


function App() {
  useEffect(() => {
    document.title = "E-Buy"
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <Men />
      <Jewelery />
      <Electronics />
      <Women />
      <Features />
      <Feedback />
      <Connection />
      <Footer />
    </>
  );
}

export default App;
