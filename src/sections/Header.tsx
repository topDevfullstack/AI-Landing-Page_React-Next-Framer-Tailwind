import { useState, useEffect } from "react";
import LogoIcon from "@/assets/IMG_20240828_143915 (1).png";
import MenuIcon from "@/assets/icon-menu.svg";
import Close from "../assets/icon-menu.svg";
import { Button } from "@/components/Button";
import Image from "next/image";
import { NavbarLinks } from "@/components/NavbarLinks";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4  sticky top-0  transition-all duration-400 z-10 ">
      <div
        className={`flex justify-between items-center border border-white/15  rounded-xl  mx-auto backdrop-blur inset-0   ${
          scrolled ? "lg:max-w-3xl md:max-w-xl max-w-52 p-1" : "lg:max-w-6xl md:max-w-2xl p-2.5 max-w-64"
        } transition-all duration-700`}
      >
        {/* Logo and Navigation */}
        <div
          className={`border border-white/25 rounded-lg  transition ${
            scrolled ? "p-0 " : "p-1 "
          }`}
        >
          <div className="flex items-center">
            <div
              className={` rounded-lg mr-2 flex justify-center items-center ${
                scrolled ? "mr-0 h-8 w-8" : "h-10 w-10"
              } transition-all duration-500`}
            >
              <Image
                src={LogoIcon}
                alt="logo"
                className={`${scrolled ? "h-8 w-8" : "h-10 w-10"}`}
              />
            </div>
            {!scrolled && (
              <h1 className="text-white font-semibold text-xl mr-1 transition-all duration-200">
                Codevertex
              </h1>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <nav className="flex gap-8 text-sm">
            {NavbarLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className={`text-white/70 hover:text-white transition ${
                    scrolled ? "" : "text-lg"
                  }`}
                >
                  {link.title}
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <div className="md:block hidden">
            <Button>Get Started</Button>
          </div>
        </div>

        {/* Mobile menu icon */}
        {/* Mobile menu icon */}
        <button className=" lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ y: "30%" }}
            animate={{ y: "1%" }}
            transition={{ duration: 0.8 }}
            className=" fixed top-16 w-full h-auto mt-4 py-4    rounded-lg z-40 flex flex-col items-center justify-center backdrop-blur-md    bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(0,0,0)_75%,transparent)]"
          >
            <ul className="flex flex-col  gap-6 text-center">
              {NavbarLinks.map((link, index) => (
                <li
                  key={index}
                  className=" transition duration-300 rounded-lg py-2 px-4 hover:bg-black "
                >
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-xl text-white/75 hover:text-white transition duration-300"
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};
