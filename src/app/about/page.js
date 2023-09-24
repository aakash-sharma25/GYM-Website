import About from '@/components/About'
import Image from 'next/image'
import React from 'react'

import img1 from "../../../public/images/AboutPage/2.jpg"
import img2 from "../../../public/images/AboutPage/3.jpg"
import img3 from "../../../public/images/GalleryPage/9.jpg"
import img4 from "../../../public/images/call/background.jpg"

export default function page() {
  return (
    <div>
        <About/>
        <div className='about-images flex flex-wrap gap-6 justify-center'>
          <Image src={img1} alt='imagee' className=' w-[30%] about-gallary' />
          <Image src={img2} alt='imagee' className=' w-[30%] about-gallary'/>
          <Image src={img3} alt='imagee' className=' w-[30%] about-gallary'/>
          <Image src={img4} alt='imagee' className=' w-[100%]about-gallary '/>
          <Image src={img3} alt='imagee' className=' w-[30%] about-gallary'/>
          <Image src={img1} alt='imagee' className=' w-[30%] about-gallary'/>
        </div>
    </div>
  )
}
