import React from "react";
import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <div className=" footer flex justify-evenly items-center px-5 py-10 mt-5 bg-white text-black flex-wrap">
      <div className=" flex flex-col gap-5 w-[50%] footercont items-center justify-center">
        <h1>Gym</h1>
        <p>
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>
        <div className=" flex text-3xl justify-between w-[30%] gap-5 text-center">
          <FiFacebook className=" hover:text-red-500 hover:cursor-pointer" />
          <FiInstagram className=" hover:text-red-500 hover:cursor-pointer" />
          <FiYoutube className=" hover:text-red-500 hover:cursor-pointer" />
        </div>
        <p>Privacy Policy | © 2023 Gymate Design by RadiusTheme</p>
      </div>

      <div className=" footer-inner flex justify-between w-[40%]">
        <div className=" flex flex-col gap-5">
          <h2 className=" font-bold text-3xl">Our Classes</h2>
          <ul className=" flex flex-col gap-3">
            <li className="hover:text-red-500 hover: cursor-pointer">
              Fitness Classes
            </li>
            <li className="hover:text-red-500 hover: cursor-pointer">
              Aerobics Classes{" "}
            </li>
            <li className="hover:text-red-500 hover: cursor-pointer">
              Power Yoga{" "}
            </li>
            <li className="hover:text-red-500 hover: cursor-pointer">
              Learn Machines{" "}
            </li>
            <li className="hover:text-red-500 hover: cursor-pointer">
              Full-body Strength
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-5">
          <h2 className=" font-bold text-3xl">Working Hours</h2>
          <ul className=" flex flex-col gap-3">
            <li className="hover:text-red-500 hover: cursor-pointer font-bold">
              Monday - Friday
            </li>
            <li className="hover:text-red-500 hover: cursor-pointer">
              {" "}
              7:00am - 21:00pm
            </li>
            <li className="hover:text-red-500 hover: cursor-pointer font-bold">
              Saturday:
            </li>
            <li className="hover:text-red-500 hover: cursor-pointer">
              7:00am - 19:00pm{" "}
            </li>
            <li className="hover:text-red-500 hover: cursor-pointer font-bold">
              Sunday - Closed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
