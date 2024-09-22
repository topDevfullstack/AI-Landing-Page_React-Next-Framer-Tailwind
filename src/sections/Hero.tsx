"use client"
import { Button } from "@/components/Button";
import starBg from "@/assets/stars.png";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react"

export const Hero = () => {
  const sectionRef = useRef(null)
const { scrollYProgress } = useScroll({
  target: sectionRef, 
  offset: ['start end' , 'end start'] 
});

const backgroundPositionY = useTransform(scrollYProgress , [0,1] , [-300, 300])

  return (
    <motion.section
    ref={sectionRef}
    animate ={{
      backgroundPositionX: starBg.width,
    }}
    transition={{
      ease: "linear",
      repeat: Infinity,
      duration: 120,
    }}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
      style={{
        backgroundImage: `url(${starBg.src})`,
        backgroundPositionY, 
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_75%,transparent)] "></div>
      {/* star planet  */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] "></div>
      {/* star ring 1  */}
      <motion.div
      style={{
        translateX: "-50%",
        translateY: '-50%'
      }}
      animate={{
        rotate: "1turn"
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }}
       className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20  ">
        <div className="absolute h-2 w-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-2 w-2  left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-5 w-5  left-full border border-white  rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center"></div>
        <div className="h-2 w-2 bg-white rounded-full  "></div>
      </motion.div>
      {/* star ring 2  */}
      <motion.div
      style={{
        translateX: "-50%",
        translateY: '-50%'
      }}
      animate={{
        rotate: "-1turn"
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }}
       className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed "></motion.div>
      {/* star ring 3  */}
      <motion.div
       style={{
        translateX: "-50%",
        translateY: '-50%'
      }}
      animate={{
        rotate: "1turn"
      }}
      transition={{
        duration: 90,
        repeat: Infinity,
        ease: "linear"
      }}
       className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] opacity-20 rounded-full border border- white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="absolute h-2 w-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-2 w-2  left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
      </motion.div>

      <div className="container relative mt-16 ">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center">
          10 lorem
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque id
          dicta, fuga nesciunt esse accusantium inventore repellendus sunt
          beatae enim?
        </p>
        <div className="flex mt-5 justify-center">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};