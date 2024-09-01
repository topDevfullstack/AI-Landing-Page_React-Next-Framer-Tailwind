import React from 'react'
import LogoIcon from "@/assets/IMG_20240828_143915 (1).png";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="rounded-lg flex justify-center items-center h-10 w-10 mr-2 transition-all ease-linear duration-700">
        <Image
          src={LogoIcon}
          alt="logo"
          className="h-10 w-10"
        />
      </div>
      <h1 className="text-white font-semibold text-xl mr-1 transition-all ease-linear duration-600">
        Codevertex
      </h1>
    </div>
  )
}

export default Loader