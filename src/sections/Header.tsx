"use client"
import { useState } from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
// import CloseIcon from "@/assets/close-icon-png-2.jpg"; // Import your close icon
import Close from '../assets/icon-menu.svg'
import { Button } from "@/components/Button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-3xl mx-auto backdrop-blur">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
           <Button>Get Started</Button>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <Close /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-20 opacity-95 bg-black text-white fixed inset-0 z-50 flex flex-col justify-center items-center h-[50%] w-[80%] mx-auto rounded-2xl ">
            <nav className="flex flex-col gap-8 text-lg">
              <a href="#" className="hover:text-yellow-500">Features</a>
              <a href="#" className="hover:text-yellow-500">Pricing</a>
              <a href="#" className="hover:text-yellow-500">Services</a>
              <a href="#" className="hover:text-yellow-500">Contact</a>
            </nav>
            <button onClick={toggleMenu} className="absolute top-5 right-5">
              <Close className="h-8 w-8 -top-20 -left- bg-yellow-300 absolute" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
