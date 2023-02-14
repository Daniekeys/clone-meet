import React from "react";
import CenterLayout from "../layouts/CenterLayout";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import {FaTiktok} from "react-icons/fa";
import a from "next/link";
import bettingIcon from "../assets/png/Betting-icons.svg";
import grad from "../assets/png/Gradient-image.png";
import logo from "../assets/svg/logo.svg";
import arrow from "../assets/svg/arrow-head.svg";
import Image from "next/image";
const ComingSoon = () => {
  return (
    <div className="w-full relative bg-black min-h-screen h-full flex flex-col">
      <CenterLayout>
        <div className="relative h-screen">
          <div className="w-full grid place-items-center  relative  ">
            <div className="pt-20"></div>
            <Image src={logo} width={70} height={70} alt="rice" />

            <h1 className="mt-6 text-white text-center text-[32px] lg:text-[120px] font-bold z-[20] font-Gilroy">
              Coming Soon
            </h1>
            <p className="text-base lg:text-[32px] text-white z-[20] font-Gilroy text-center ">
              Put your <span className="text-[#F8BA05]"> money </span> where
              your <span className="text-[#F8BA05]"> mouth</span> is,{" "}
           
            </p>
            <div className="w-full lg:w-5/12 mx-auto mt-6  ">
              <p className=" px-4  lg:px-8 py-3 rounded-md text-white text-center bg-[#513BD0] w-fit mx-auto cursor-pointer">
                <a
                  href="https://forms.gle/p3QoKmqB6vzaUaXi7"
                  target="_blank"
                  rel="noreferrer"
                  alt="links"
                >
                  <span className="text-white text-md lg:text-base font-Gilroy cursor-pointer">
                    Be the first to know when we launch
                  </span>
                </a>
              </p>
            </div>
            <div className="w-full px-8 flex justify-start lg:w-5/12  lg:mx-auto  ">
              <Image
                src={arrow}
                alt="danilor"
                className="w-10 lg:w-16 h-auto  "
              />
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row lg:justify-end lg:absolute lg:bottom-12 lg:right-0  lg:space-x-4 items-center mt-12 lg:mt-0">
            <p className="text-white lg:text-base text-md font-Gilroy">
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
                  <BsInstagram className="text-white text-xl cursor-pointer" />{" "}
                </div>
              </a>
              <a
                href="https://twitter.com/makewebethq?s=21&t=eJLqQ4aUuSbliSoKhWmwUA "
                target="_blank"
                rel="noreferrer"
                alt="links"
              >
                <div>
                  <BsTwitter className="text-white text-xl cursor-pointer" />{" "}
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/make-we-bet-hq/"
                target="_blank"
                rel="noreferrer"
                alt="links"
              >
                <div>
                  <BsLinkedin className="text-white text-xl cursor-pointer" />{" "}
                </div>
              </a>
              <a href="/home" target="_blank" rel="noreferrer" alt="links">
                <div>
                  <FaTiktok className="text-white text-xl cursor-pointer" />{" "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </CenterLayout>
      <div className="absolute bottom-0 ">
        <Image
          src={grad}
          alt="danilor"
          width={800}
          height={800}
          className=" "
        />
      </div>
      <div className="absolute bottom-0 ">
        <Image
          src={bettingIcon}
          alt="danilor"
          width={200}
          height={200}
          className=""
        />
      </div>
    </div>
  );
};

export default ComingSoon;
