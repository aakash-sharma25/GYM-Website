import Image from "next/image";
import banner from "../../public/images/hero/hero-img.jpg";
import {FiArrowRight} from "react-icons/fi"
import Mainbutton from "./Mainbutton";

export default function Banner() {
  return (
    <div className="banner ">
      {/* <Image src={banner} alt="banner image" /> */}
      {/* <div className=" text-white absolute top-[35%] right-[18%] "> */}
      <div className=" flex items-center justify-center h-[100vh] flex-col gap-5 text-[48px] ml-[20%]" >
        <p className=" font-bold">MAKE YOUR BODY</p>
        <p className=" text-slate-300"> FIT & PERFECT</p>
        <Mainbutton text={"Our Classes"} icon={<FiArrowRight className=" text-3xl "/>}/>
      </div>
        
      {/* </div> */}
      
      
    </div>
  );
}
