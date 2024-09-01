'use client';
// import React from "react";
import Image from "next/image";

// Images
import Logo from "@/assets/IMG_20240828_143915 (1).png";

// Footer Data
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
            <div className=" h-10 w-10 rounded-lg ml-12 flex justify-center items-center ">
              <Image src={Logo} alt="logo" className="h-10 w-10" />
              <h1 className="text-white font-semibold text-xl">Codevertex</h1>
            </div>
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                Help Center
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Learning Paths
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  Web Development
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  Data Science
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  Machine Learning
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  DevOps
                </div>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Tutorials
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  Python Basics
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  JavaScript Essentials
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  React in Depth
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  Next.js Overview
                </div>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  Documentation
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  FAQs
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  Community Forum
                </div>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                  Customer Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  {ele}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            Made with ❤️ by CodeVertex © 2024 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
