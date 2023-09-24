"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

import { FiPlusSquare } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function Navbar() {
  const currentRoute = usePathname();

  const current = "text-red-500 font-bold"

  const [open, setopen] = useState(false);

  const hamburgerClick = () => {
    setopen(!open);
  };

  return (
    <div className=" z-50 min-h-[81px] fixed top-0 flex justify-between items-center px-5 py-4 w-full bg-black text-white ">
      <div>
        <h3 className="flex gap-2 font-bold text-2xl text-red-500 items-center justify-center">
          Fitness-Spot <GiWeightLiftingUp />
        </h3>
      </div>
      <div>
        <ul className=" flex gap-5 navlink ">
          <Link className= {currentRoute === "/"?( current ):("hover:font-bold hover:text-red-500 ") } href={"/"}>
            Home
          </Link>
          <Link className={currentRoute === "/about"?(current):("hover:font-bold hover:text-red-500 ") } href={"/about"}>
            About
          </Link>
          <Link
            className={currentRoute === "/pricing"?(current):("hover:font-bold hover:text-red-500 ") }
            href={"/pricing"}
          >
            Pricing
          </Link>
          <Link
            className={currentRoute === "/schedule"?(current):("hover:font-bold hover:text-red-500 ") }
            href={"/schedule"}
          >
            Schedule
          </Link>
          <Link
            className={currentRoute === "/contact"?(current):("hover:font-bold hover:text-red-500 ") }
            href={"/contact"}
          >
            Contact
          </Link>
        </ul>
      </div>

      <div className="join-btn">
        <Link
          href={"/contact"}
          className=" p-2 border-2  hover:bg-red-500 hover:text-white flex gap-3 items-center justify-center"
        >
          <FiPlusSquare className="text-3xl hover:text-red-500 hover:bg-white" />
          Join Class Now
        </Link>
      </div>
      <HiOutlineMenuAlt1
        className="hamburger text-3xl"
        onClick={() => setopen(true)}
      />

      {/* <div> */}
      {open === true ? (
        <div className=" absolute z-10 bg-black top-0 right-0 left-0 ">
          <span
            className=" text-2xl absolute right-3 top-3 cursor-pointer"
            onClick={() => setopen(false)}
          >
            X
          </span>
          <ul className=" flex flex-col items-center justify-center gap-5  h-[100vh]">
            <Link
              className=" hover:font-bold hover:text-red-500"
              href={"/"}
              onClick={() => setopen(false)}
            >
              Home
            </Link>
            <Link
              className=" hover:font-bold hover:text-red-500"
              href={"/about"}
              onClick={() => setopen(false)}
            >
              About
            </Link>
            <Link
              className=" hover:font-bold hover:text-red-500"
              href={"/pricing"}
              onClick={() => setopen(false)}
            >
              Pricing
            </Link>
            <Link
              className=" hover:font-bold hover:text-red-500"
              href={"/schedule"}
              onClick={() => setopen(false)}
            >
              Schedule
            </Link>
            <Link
              className=" hover:font-bold hover:text-red-500"
              href={"/contact"}
              onClick={() => setopen(false)}
            >
              Contact
            </Link>
            <Link
              href={"/contact"}
              className=" p-2 border-2  hover:bg-red-500 hover:text-white flex gap-3 items-center justify-center"
              onClick={() => setopen(false)}
            >
              <FiPlusSquare className="text-3xl hover:text-red-500 hover:bg-white" />
              Join Class Now
            </Link>
          </ul>
        </div>
      ) : (
        <div className=" hidden"></div>
      )}
    </div>
    // </div>
  );
}
