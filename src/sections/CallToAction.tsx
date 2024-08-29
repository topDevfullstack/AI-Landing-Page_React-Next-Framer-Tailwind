"use client";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/Button";
import startBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { useRef, RefObject, useEffect } from "react";
import { TbBackground } from "react-icons/tb";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
   
  const updateMousePosition = (event: MouseEvent) => {
if (!to.current) return;
const { top, left } = to.current.getBoundingClientRect();
mouseX.set(event.x - left); 
mouseY.set(event.y - top);
  }
useEffect(() => {
  window.addEventListener('mousemove' , updateMousePosition);

  return () => {
    window.removeEventListener('mousemove' , updateMousePosition);
  }
}, [])

  return [mouseX , mouseY];
}

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX , mouseY ] = useRelativeMousePosition(borderedDivRef);

const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px , black , transparent)`
  return (
    <section className="py-10 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
            ref={borderedDivRef}

          animate={{
            backgroundPositionX: startBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="border border-white/15 py-24 rounded-xl group overflow-hidden relative "
          style={{
            backgroundImage: `url(${startBg.src})`,
            backgroundPositionY,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] transition duration-700 group-hover:opacity-0 "
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <motion.div

            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  transition duration-700 opacity-0 group-hover:opacity-100"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              Ai drivern sejodjw dwjfwd
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tighter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            </p>
            <div className="flex justify-center mt-8 ">
              <Button>join Wailist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
