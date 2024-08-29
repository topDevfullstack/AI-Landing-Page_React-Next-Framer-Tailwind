"use client"
import { useState } from "react";
import LogoIcon from "@/assets/IMG_20240828_143915 (1).png";
import MenuIcon from "@/assets/icon-menu.svg";
// import CloseIcon from "@/assets/close-icon-png-2.jpg"; // Import your close icon
import Close from '../assets/icon-menu.svg'
import { Button } from "@/components/Button";
import Image from 'next/image';
// import LogoIcon from "@/assets/logo.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };       

  return (
    <header className="py-4 border-b  border-white/15   md:border-none sticky top-0 z-10">
      <div className="backdrop-blur  inset-0 absolute -z-10 hidden "></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-4xl mx-auto md:backdrop-blur">
        <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className=" h-10 w-10 rounded-lg ml-12 flex justify-center items-center ">
              <Image src={LogoIcon} alt="logo" className="h-10 w-10 border border-white/25 rounded-lg " />
              {/* <h1 className="text-white font-semibold text-xl">Codevertex</h1> */}
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">Home</a>
              <a href="#" className="text-white/70 hover:text-white transition">Courses</a>
              <a href="#" className="text-white/70 hover:text-white transition">Internship</a>
              <a href="#" className="text-white/70 hover:text-white transition">About Us</a>
              <a href="#" className="text-white/70 hover:text-white transition">Tutorials</a>
              <a href="#" className="text-white/70 hover:text-white transition">Contact</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <div className="md:block hidden" >
           <Button >Get Started</Button>
            </div>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <Close /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-20 opacity-95 bg-black text-white fixed inset-0 z-50 flex flex-col text-center justify-center items-center h-[70%] w-[80%] mx-auto rounded-2xl ">
            <nav className="flex flex-col gap-8 text-lg">
            <a href="#" className="text-white/70 hover:text-white transition">Home</a>
              <a href="#" className="text-white/70 hover:text-white transition">Courses</a>
              <a href="#" className="text-white/70 hover:text-white transition">Internship</a>
              <a href="#" className="text-white/70 hover:text-white transition">Articles</a>
              <a href="#" className="text-white/70 hover:text-white transition">Toturials</a>
              <a href="#" className="text-white/70 hover:text-white transition">Contact</a>
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
