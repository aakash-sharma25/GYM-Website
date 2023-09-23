import React from 'react'

import img4 from "../../../public/images/call/background.jpg"
import Image from 'next/image'
import PricingCard from "../../components/PricingCard"
import img1 from "../../../public/images/classes/fitness.jpg"
import img2 from "../../../public/images/classes/karate.jpg"
import img3 from "../../../public/images/classes/powerlifting.jpg"

export default function page() {
  return (
    <div>
   

        <div className='pricing pb-5 mt-[80px] '>
         <Image src={img4} alt='banner' />
            <div className=' flex justify-evenly items-center gap-y-10 m-10 pricing'> 
                <PricingCard img={img1} price={"49"} type={"Beginner"}/>
                <PricingCard img={img2} price={"79"} type={"Intermediate"}/>
                <PricingCard img={img3} price={"99"} type={"Advance"}/>
            </div>
            <div></div>
            <div></div>
        </div>

    </div>
  )
}
