"use client";

import Link from "next/link";
import { Scheduledata } from "./Scheduledata";

export default function Daycard({ day }) {
  // const currentday= day;
  const data = Scheduledata.at(day);
  // console.log(data);
  // console.log(data.at(0).classname);

  // console.log(data.filter((f)=> {return f.currentday}));

  return (
    <>
      {data.map((m) => {
        return (
          <>
            <div className="day-card gap-3 flex items-center text-center justify-between py-[25px] px-[55px] bg-[#f2f2f2] my-5 shadow-[0px_20px_20px_10px_#00000024]">
              <div>
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Class Name
                </p>
                <p className="text-[18px] text-black font-bold mt-3">{m.classname}</p>
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                <p className="text-[18px] text-black font-bold mt-3">{m.time}</p>
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Trainer
                </p>
                <p className="text-[18px] text-black font-bold mt-3">{m.trainer}</p>
              </div>
                <div className="text-black">
                  <Link href={"/contact"} className=" rounded-xl py-[15px] px-[30px] bg-[#d6c7c7] "
                  >Join Now</Link>
                </div>
            </div>
          </>
        );
      })}
    </>
  );
}
