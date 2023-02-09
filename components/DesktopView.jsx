import React from "react";
import CenterLayout from "../layouts/CenterLayout";
import { GoLocation } from "react-icons/go";
import { BsBell, BsBriefcase } from "react-icons/bs";
import { BsCalendar4Event } from "react-icons/bs";
import { TbAlignJustified } from "react-icons/tb";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { MdOutlineAttachFile } from "react-icons/md";
import { AiOutlineBold } from "react-icons/ai";
import { BiItalic } from "react-icons/bi";
import { FiUnderline } from "react-icons/fi";
import { BsShare } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GrList } from "react-icons/gr";
import { MdOutlineTranslate } from "react-icons/md";
import { RiGridFill } from "react-icons/ri";
import {FcVideoCall} from "react-icons/fc"
import { IoMdArrowDropdown } from "react-icons/io";
const DesktopView = () => {
  return (
    <CenterLayout>
      <div className="w-full bg-white my-8 h-[80vh] xl:w-10/12 mx-auto flex flex-col">
        <div className="w-full flex items-center">
          <div className="w-7/12 flex items-center space-x-6">
            <FaTimes className=" text-2xl text-[#888] mr-6" />
            <input
              type="text"
              className="flex-grow border-b-[3px] border-t-0 border-r-0 border-l-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 border-blue-500 placeholder:text-[#888] placeholder:text-3xl h-12 placeholder:leading-10 outline-none focus:border-b-[3px] text-3xl  "
              placeholder="Add tilte"
            />
            <button className="bg-blue-500 text-white font-thin px-6 py-2 rounded-md outline-none border-none">
              Save
            </button>
          </div>
          <div className="w-5/12 flex justify-end items-center">
            <RiGridFill className=" text-2xl text-[#888] mr-6" />
          </div>
        </div>
        <div className="w-9/12 flex space-x-4 mt-6 items-center lg:pl-16">
          <p className="bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 ">
            2 Feb 2023
          </p>
          <p className="bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 ">
            5:30am
          </p>
          <p className=" text-[#888] font-normal cursor-pointer  ">to</p>
          <p className="bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 ">
            6:30am
          </p>
          <p className="bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 ">
            2 Feb 2023
          </p>
          <p className=" text-[#888] font-normal cursor-pointer  ">Time zone</p>
        </div>
        <div className="flex mt-4  space-x-4 items-center lg:pl-16">
          <input
            type="checkbox"
            name="check"
            id="checker"
            className="w-6 h-6"
          />
          <p className="text-base text-[#888]">All day</p>
          <p className="bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 ">
            6:30am
          </p>
          <div className="flex items-center bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 space-x-1">
            <p>Doesn't repeat</p>
            <IoMdArrowDropdown />
          </div>
        </div>
        <div className="w-full mt-8 flex space-x-10">
          {/* left side */}
          <div className="w-7/12 flex flex-col">
            <div className="w-full border-b border-gray-200 items-center space-x-4  flex ">
              <p className="text-blue-500 border-b-[3px] border-blue-500 ">
                Event Details
              </p>
              <p className=" text-[#888]  cursor-pointer">Find a time</p>
            </div>
            <div className="flex space-x-6 items-center mt-4">
              <FcVideoCall className="text-4xl" />
              <p className="cursor-pointer text-white bg-blue-500 p-4 rounded-md font-normal">
                Add Google Meet video Conferencing
              </p>
            </div>
            <div className="flex space-x-6 items-center mt-4">
              <GoLocation className="text-2xl text-[#888] mr-0" />
              <input
                type="text"
                className="bg-gray-100 outline-none border-none p-2 placeholder:text-base placeholder:text-[#888] flex-grow "
                placeholder="Add location"
              />
            </div>
            {/* start bof a session #################33\ */}
            <div className="mt-2 w-full flex items-center ">
              <BsBell className="text-2xl text-[#888]  mr-6 " />
              <div className="flex items-center bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 space-x-1">
                <p>Email</p>
                <IoMdArrowDropdown />
              </div>
              <p className="bg-[#efefef] text-[#888]   py-2 pl-2 pr-6 mx-2 ">
                10
              </p>
              <div className="flex items-center bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 space-x-1">
                <p>minutes</p>
                <IoMdArrowDropdown />
              </div>
              <FaTimes className="text-[#888] text-xl ml-4" />
            </div>
            {/* end of a session */}
            {/* start bof a session #################33\ */}
            <div className="mt-2 w-full flex items-center pl-12 ">
              <div className="flex items-center bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 space-x-1">
                <p>Notification</p>
                <IoMdArrowDropdown />
              </div>
              <p className="bg-[#efefef] text-[#888]   py-2 pl-2 pr-6 mx-2 ">
                30
              </p>
              <div className="flex items-center bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 space-x-1">
                <p>minutes</p>
                <IoMdArrowDropdown />
              </div>
              <FaTimes className="text-[#888] text-xl ml-4" />
            </div>
            {/* end of a session */}
            <p className="pl-12 text-[#888] font-normal my-2">
              Add notification
            </p>
            {/* start bof a session #################33\ */}
            <div className="mt-2 w-full flex items-center  ">
              <BsCalendar4Event className="text-2xl text-[#888] mr-6" />

              <p className=" text-[#888]   py-2 pl-2 pr-2 mx-2 ">Default</p>
              <div className="flex items-center bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 space-x-1">
                <p className="w-6 h-6 bg-sky-500 rounded-full"></p>
                <IoMdArrowDropdown />
              </div>
              <FaTimes className="text-[#888] text-xl ml-4" />
            </div>
            {/* end of a session */}
            {/* start bof a session #################33\ */}
            <div className="mt-2 w-full flex items-center ">
              <BsBriefcase className="text-2xl text-[#888] mr-6  " />
              <div className="flex items-center bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 space-x-1">
                <p>Busy</p>
                <IoMdArrowDropdown />
              </div>

              <div className="flex items-center bg-[#efefef] text-[#888] font-normal cursor-pointer p-2 space-x-1">
                <p>Default visisbility</p>
                <IoMdArrowDropdown />
              </div>
              <AiOutlineQuestionCircle className="text-[#888] text-xl ml-4" />
            </div>
            {/* end of a session */}
            {/* start bof a session #################33\ */}
            <div className="mt-2 w-full flex items-start ">
              <TbAlignJustified className="text-2xl text-[#888] mr-6" />
              <div className="flex flex-col  bg-[#efefef] flex-grow rounded-md h-64 p-4  ">
                <div className="flex  space-x-6">
                  <MdOutlineAttachFile className="text-xl text-[#888]" />
                  <AiOutlineBold className="text-xl text-[#888]" />
                  <BiItalic className="text-xl text-[#888]" />
                  <FiUnderline className="text-xl text-[#888]" />
                  <GrList className="text-xl text-[#888]" />
                  <AiOutlineUnorderedList className="text-xl text-[#888]" />
                  <BsShare className="text-xl text-[#888]" />
                  <MdOutlineTranslate className="text-xl text-[#888]" />
                </div>
                <textarea
                  type="text"
                  className="mt-4 bg-inherit text-[#888] placeholder:text-[#888]  w-full outline-none border-none h-56 "
                  placeholder="Add description"
                />
              </div>
            </div>
            {/* end of a session */}
          </div>

          {/* END OF THE LEFT SIDE SESSION @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}

          {/* right side  #########################################*/}
          <div className="w-5/12 flex flex-col">
            <div className="w-full border-b border-gray-200 items-center space-x-4  flex ">
              <p className="text-blue-500 border-b-[3px] border-blue-500 ">
                Guest
              </p>
            </div>
            <div className="w-full mt-4">
              <input
                type="text"
                className="bg-gray-100 outline-none border-none p-2 w-full placeholder:text-base placeholder:text-[#888] flex-grow "
                placeholder="Add location"
              />
                      </div>
                      <p className="text-[#666] mt-12">
                          Guest permissions
                      </p>
                      <div className="flex items-center space-x-6 mt-3">
                          <input type="checkbox" name="" id=""  className="w-5 h-5" />
                          <p className="text-[#666]">Modify event</p>
                      </div>
                      <div className="flex items-center space-x-6 mt-3">
                          <input type="checkbox" name="" id="" checked className="w-5 h-5" />
                          <p className="text-[#666]">Invite others</p>
                      </div>
                      <div className="flex items-center space-x-6 mt-3">
                          <input type="checkbox" name="" id="" checked className="w-5 h-5" />
                          <p className="text-[#666]">See guest list</p>
                      </div>
          </div>
        </div>
      </div>
    </CenterLayout>
  );
};

export default DesktopView;
