import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy load components that are below the fold
const About = lazy(() => import("./components/About"));
const Menu = lazy(() => import("./components/Menu"));
const Signature = lazy(() => import("./components/Signature"));
const Reviews = lazy(() => import("./components/Reviews"));
const Gallery = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Simple loading fallback
const LoadingFallback = () => <div style={{ minHeight: '200px' }} />;

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Menu />
        <Signature />
        <Reviews />
        <Gallery />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
