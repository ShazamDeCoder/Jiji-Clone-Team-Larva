import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
        <div className='h-64 w-auto bg-[#00b53f] border-none rounded-b-3xl flex flex-col gap-6 justify-center items-center'>
            <h1 className='text-white text-[20px] font-bold'>What are you looking for?</h1>
            <div className='flex gap-6'>
                
                <div>
                    <button type="button" className='w-[126px] h-[48px] text-[#7f8e99] rounded-2xl bg-white border-none font-normal text-[16px] relative -mx-2'>All Nigeria</button>
                    <span><IoMdArrowDropdown className=" text-[20px] text-[#98a6b1] absolute mx-23 -my-8" /></span>

                </div>

                <div>
                    <input type="search" name="search" id="search" placeholder='I am looking for...' className='w-[432px] h-[48px] rounded-2xl bg-white border-none  font-normal text-[20px] p-4 focus:outline-none'/>
                    <span><IoSearchOutline className=" text-[25px] text-[#98a6b1]  absolute mx-100 -my-9"/></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero