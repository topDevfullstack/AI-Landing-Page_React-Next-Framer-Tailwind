"use client";
import React from 'react';
import { Features } from "../sections/Features";
import { CallToAction } from "../sections/CallToAction";
// import { LogoTicker } from "../sections/LogoTicker";
import { Testimonials } from "../sections/Testimonials";
import { Hero } from "@/sections/Hero";
import UnlockCode from "@/sections/UnlockCode";
import CodeBlock2 from '@/sections/CodeBlock2' 
import {FAQs} from "@/sections/FAQs";

export const Home = () => {
  return (
    <>
      <Hero />
      <UnlockCode />
      <CodeBlock2 />
      <CallToAction />
      <Features />
      <Testimonials />
      <FAQs />
      {/* <LogoTicker /> */}
    </>
  );
};

export default Home;