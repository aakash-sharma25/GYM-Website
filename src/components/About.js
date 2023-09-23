import Image from "next/image";
import Mainbutton from "./Mainbutton";
import {FiArrowRight} from "react-icons/fi"

import running from "../../public/images/who-we-are/girl-run.png";
import trainer from "../../public/images/who-we-are/weightlifter.png";
import equipment from "../../public/images/who-we-are/equpments.png";
import machine from "../../public/images/who-we-are/gym.png";

export default function About() {
  return (
    <div className="about flex items-center justify-evenly flex-wrap gap-y-20 p-10 mt-[80px]">
      <div className=" flex flex-col items-center justify-center gap-y-10 mt-20 w-[40%] whoWeAre">
        <p className=" text-2xl font-bold  text-orange-400">Who We Are ?</p>

        <p className=" font-bold text-3xl ">
          Take Your Health And Body To Next Level
        </p>
        <p className=" text-lg">
          Take your health and body to the next level with our comprehensive
          program designed to help you reach your fitness goals.
        </p>

        <div className=" flex justify-evenly w-full font-bold text-2xl wweareimages">

          <div className=" flex flex-col gap-5 items-center justify-center text-center ">
          <Image src={trainer} width={60} alt="ims" />
            <p>PROFESSIONAL TRAINERS</p>
          </div>
          <div className=" flex flex-col gap-y-5 items-center justify-center text-center">
          
          <Image src={equipment} width={60} alt="ims" />
            <p>FANCY GYM MACHINES</p>
          </div>
          <div className=" flex flex-col gap-y-5 items-center justify-center text-center">
        
          <Image src={machine} width={60} alt="ims" />
            <p>MODERN EQUIPMENTS</p>
          </div>
        </div>

        
        <Mainbutton text={"Take a tour "}icon={<FiArrowRight className=" text-3xl "/>}  />
      </div>

      <div className="flex items-center justify-center">
        <Image src={running} alt="girl running" />
      </div>
    </div>
  );
}
