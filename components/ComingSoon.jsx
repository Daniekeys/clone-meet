import React,{useState,useEffect} from "react";
import CenterLayout from "../layouts/CenterLayout";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { useTheme } from "next-themes";
import bettingIcon from "../assets/png/Betting-icons.svg";
import grad from "../assets/png/Gradient-image.png";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import arrow from "../assets/svg/arrow-head.svg";
import blue from "../assets/png/useNow.png";
import Image from "next/image";
import lightMode from "../assets/png/light-mode.jpeg"
import lightOne from "../assets/MakeWeBet/MWB v2/mwb1.png"
import darkOne from "../assets/MakeWeBet/MWB v2/mwb3.png"
// import lightOne from "../assets/svg/mwbb6.svg"
// import darkOne from "../assets/svg/mwbb7.svg"
const ComingSoon = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="w-full relative bg-white dark:bg-black min-h-screen h-full flex flex-col">
      <div className={currentTheme === "dark" ? "absolute bottom-0" : "hidden"}>
        <Image
          src={grad}
          alt="danilor"
          width={800}
          height={800}
          className=" "
        />
      </div>
 
      <div className={currentTheme === "dark" ? "absolute bottom-0" : "hidden"}>
        <Image
          src={bettingIcon}
          alt="danilor"
          width={200}
          height={200}
          className=""
        />
      </div>

      <CenterLayout>
        <div className="relative h-screen">
          <div className="w-full grid place-items-center  relative  ">
            <div className=" w-full h-16 flex justify-end pt-4">
              {currentTheme === "dark" ? (
                <div
                  className="flex space-x-4 cursor-pointer dark:text-white text-blackC"
                  onClick={() => setTheme("light")}
                >
                  <p className="text-white dark:text-white font-Gilroy font-normal">Light </p>
                  <BsFillSunFill className="text-blackText text-2xl dark:text-white" />
                </div>
              ) : (
                <div
                  className="flex space-x-4 cursor-pointer dark:text-white text-blackC"
                  onClick={() => setTheme("dark")}
                >
                  <p className="text-blackText">Dark </p>
                  <BsFillMoonStarsFill className="text-blackText text-2xl dark:text-white" />
                </div>
              )}
            </div>
            <div className="pt-20"></div>
            <Image
              src={currentTheme === "dark" ? darkOne : lightOne}
              width={80}
              height={currentTheme === "dark" ? 80 : 80}
              
              alt="rice"
            />

            {/* <h1 className="mt-6 text-white text-center text-[32px] lg:text-[120px] font-bold z-[20] font-Gilroy">
              Coming Soon
            </h1> */}
            <p className="text-[24px] md:text-[64px] leading-9 md:leading-[56px] font-semibold text-blackText dark:text-white z-[20] font-Gilroy text-center pt-4 pb-6 ">
              Put your <span className="text-[#F8BA05]"> money <br /> </span> where
              your <span className="text-[#F8BA05]"> mouth</span> is.{" "}
            </p>
            <div className="w-full lg:w-5/12 mx-auto mt-6  flex justify-center  ">
              <a
                href="https://forms.gle/p3QoKmqB6vzaUaXi7"
                target="_blank"
                rel="noreferrer"
                alt="links"
                className=" text-md lg:text-base font-Gilroy font-normal cursor-pointer font-semibold  px-4  lg:px-8 py-3 rounded-md text-white text-center bg-[#513BD0] w-fit mx-auto z-[60]"
              >
                Be the first to know when we launch
              </a>
            </div>
            <div className="w-full px-8 flex justify-start lg:w-5/12  lg:mx-auto z-[3] ">
              <Image
                src={arrow}
                alt="danilor"
                className="w-10 lg:w-16 h-auto  "
              />
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row lg:justify-end lg:absolute lg:bottom-12 lg:right-0  lg:space-x-4 items-center mt-12 lg:mt-0">
            <p className="text-blackText dark:text-white lg:text-base text-md font-Gilroy font-normal">
              We are also social:
            </p>
            <div className="flex space-x-4 items-center mt-3 lg:mt-0">
              <a
                href=" https://instagram.com/makewebethq?"
                target="_blank"
                rel="noreferrer"
                alt="links"
              >
                <div>
                  <BsInstagram className=" text-xl cursor-pointer dark:text-white text-blackC" />{" "}
                </div>
              </a>
              <a
                href="https://twitter.com/makewebethq?s=21&t=eJLqQ4aUuSbliSoKhWmwUA "
                target="_blank"
                rel="noreferrer"
                alt="links"
              >
                <div>
                  <BsTwitter className=" text-xl cursor-pointer dark:text-white text-blackC" />{" "}
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/make-we-bet-hq/"
                target="_blank"
                rel="noreferrer"
                alt="links"
              >
                <div>
                  <BsLinkedin className=" text-xl cursor-pointer dark:text-white text-blackC" />{" "}
                </div>
              </a>
              <a href="/home" target="_blank" rel="noreferrer" alt="links">
                <div>
                  <FaTiktok className="  text-xl cursor-pointer dark:text-white text-blackC" />{" "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </CenterLayout>
    </div>
  );
};

export default ComingSoon;
