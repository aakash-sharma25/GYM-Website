"use client";

import React, { useState } from "react";
import Mainbutton from "./Mainbutton";

export default function Bmi() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState(" ");

  const Submithandler = () => {
    if (weight <= 0 || height <= 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi);

      // logic for message
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };
  const changehandler = (e) => {
    // console.log(e.target.name ,e.target.value);
    if (e.target.name === "weight") {
      // console.log("w");
      setweight(e.target.value);
    } else if (e.target.name === "height") {
      // console.log("h");

      setheight(e.target.value);
    }

    //   console.log(height ,weight);
  };

  return (
    <div className=" flex items-center justify-center text-center mt-10 p-5 bg-black">
      <div className=" flex flex-col gap-10">
        <h1 className=" text-2xl font-bold">
          Lets calculate your <span className=" text-red-600">BMI</span>{" "}
        </h1>
        <p className=" text-lg ">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <div className=" flex flex-col gap-5 ">
          <div className=" flex-wrap gap-[50px] flex justify-evenly text-black">
            <input
              type="number"
              placeholder="Weight /kg"
              className=" p-3"
              name="weight"
              onChange={changehandler}
            ></input>
            <input
              type="number"
              placeholder="Height /cm"
              className=" p-3"
              name="height"
              onChange={changehandler}
            ></input>
          </div>
          <div className=" flex-wrap flex justify-evenly">
            <p>Your BMI is:<span className=" text-red-500 font-bold"> {bmi!=0 ? bmi :" " }</span></p>
            <p>Your weight is: <span className=" text-red-500 font-bold"> {message!=" " ? message :" " }</span> </p>
          </div>
          <div onClick={Submithandler}>
            <Mainbutton text={"Calculate BMI"} />
          </div>
        </div>
      </div>
    </div>
  );
}
