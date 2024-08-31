"use client";
import { Button } from "@/components/Button";
import starBg from "@/assets/stars.png";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Features } from "../sections/Features";
import { CallToAction } from "../sections/CallToAction";
import { LogoTicker } from "../sections/LogoTicker";
import { Testimonials } from "../sections/Testimonials";
import { Hero } from "@/sections/Hero";
import UnlockCode from "@/sections/UnlockCode";

export const Home = () => {
  return (
    <>
      <Hero />
      <UnlockCode />
      <Features />
      <Testimonials />
      <CallToAction />
      <LogoTicker />
    </>
  );
};
