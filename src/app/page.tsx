"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Home } from "@/pages/Home";

export default function page() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/call-to-action" element={<CallToAction />} />
        <Route path="/logo-ticker" element={<LogoTicker />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
