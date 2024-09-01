"use client";
import Footer from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Home } from "@/pages/Home";
import Loader from '@/components/PreLoader/Loader'
import { useState, useEffect } from "react";


export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}