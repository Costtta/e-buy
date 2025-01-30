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
    const link = document.createElement('link')
    link.rel = 'icon'
    link.href = '/public/logo.avif'
    link.type = 'image/x-icon'
    const head = document.head;
    head.appendChild(link)
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
