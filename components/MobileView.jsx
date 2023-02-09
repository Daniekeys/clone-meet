import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import Swicther from "./Switch";
const MobileView = () => {
  return (
    <div className="w-full md:hidden flex flex-col max-w-[600px] mx-auto h-full ">
      <div className="flex justify-between mt-3 px-4">
        <FaTimes className="text-[#555] text-lg" />

        <p className="px-6 py-2 bg-blue-500 text-white rounded-xl ">Save</p>
      </div>
      <div className="w-full border-b-[1px] mt-4 ">
        <input
          type="text"
          className="flex-grow pl-8 border-t-0 border-r-0 border-l-0 focus:border-t-0 focus:border-r-0  placeholder:text-[#555] text-lg placeholder:text-2xl h-12 placeholder:leading-10 outline-none focus:border-b-[3px] text-2xl bg-transparent w-full  "
          placeholder="Add tilte"
        />
      </div>
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center justify-between mt-8">
        <div className="flex space-x-4 items-center">
          <AiOutlineClockCircle className="text-2xl text-[#555] text-lg" />
          <p className="text-[#555] text-lg font-semibold">All day</p>
        </div>
        <Swicther />
      </div>
      {/* END of a session  */}
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center justify-between mt-8">
        <p className="text-[#555] text-lg ml-10 font-semibold">Wed, Feb 1, 2023</p>
        <p className="text-[#555] text-lg font-semibold">10:30PM</p>
      </div>
      {/* END of a session  */}
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center justify-between mt-8">
        <p className="text-[#555] text-lg font-semibold ml-10">Wed, Feb 1, 2023</p>
        <p className="text-[#555] text-lg font-semibold">10:30PM</p>
      </div>
      {/* END of a session  */}
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center space-x-4  mt-8">
        <FaGlobeAfrica className="text-[#555] text-lg text-2xl  " />
        <p className="text-[#555] text-lg font-semibold">Pacific Standard Time</p>
      </div>
      {/* END of a session  */}
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center space-x-4  mt-8 mb-8">
        <MdRefresh className="text-[#555] text-lg text-2xl  " />
        <p className="text-[#555] text-lg font-semibold">Does not repeat</p>
      </div>
      {/* END of a session  */}
      <hr className="w-full h-[1px] " />
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center space-x-4  mt-8 mb-8">
        <FiUsers className="text-[#555] text-lg text-2xl  " />
        <p className="text-[#555] text-lg font-semibold">Add people</p>
      </div>
      {/* END of a session  */}
      <p className="ml-12 font-semibold border border-[#888] p-2 rounded-md w-fit">
        View Schedules
      </p>
      <hr className="w-full h-[1px] my-6 " />
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center space-x-4   ">
        <AiOutlineVideoCamera className="text-[#555] text-lg text-2xl  " />
        <p className="text-[#555] text-lg font-semibold">Add video confressing</p>
      </div>
      {/* END of a session  */}
      <hr className="w-full h-[1px] my-6 " />

      {/* start of a session  */}
      <div className="w-full px-4 flex items-center space-x-4   ">
        <GoLocation className="text-[#555] text-lg text-2xl  " />
        <p className="text-[#555] text-lg font-semibold">Add location</p>
      </div>
      {/* END of a session  */}
      <hr className="w-full h-[1px] my-6 " />
      <div className="w-full px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <AiOutlineBell className="text-[#555] text-lg text-2xl  " />
          <p className="text-[#555] text-lg font-semibold">10 mins before as email</p>
        </div>
        <FaTimes className="text-[#555] text-lg text-2xl  " />
      </div>
      <div className="w-full px-4 flex justify-between items-center mt-4">
        <div className="flex pl-10">
          <p className="text-[#555] text-lg font-semibold">30 mins before </p>
        </div>
        <FaTimes className="text-[#555] text-lg text-2xl  " />
      </div>
      <div className="mt-4 pl-14">
        <p className="text-[#555] text-lg font-semibold">Add Notification </p>
      </div>
      <hr className="w-full h-[1px] my-6 " />
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center space-x-4   ">
        <GoLocation className="text-[#555] text-lg text-2xl  " />
        <p className="text-[#555] text-lg font-semibold">Add location</p>
      </div>
      {/* END of a session  */}
      <hr className="w-full h-[1px] my-6 " />
      {/* start of a session  */}
      <div className="w-full px-4 flex items-center space-x-4   ">
        <p className="bg-blue-500 w-6 h-6 rounded-full"></p>
        <p className="text-[#555] text-lg font-semibold">Default</p>
      </div>
      {/* END of a session  */}
    </div>
  );
};

export default MobileView;
