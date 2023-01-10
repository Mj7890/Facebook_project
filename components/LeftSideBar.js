import React from 'react'
import guy from "../assets/guy7.jpg"
import Image from 'next/image';
import { MdHome, MdGroups } from 'react-icons/md';
import { BsCart3, BsPeopleFill, BsCalendar2Fill } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineDesktop, AiFillClockCircle } from 'react-icons/ai';

const LeftSideBar = () => {
  return (
    <div className='w-[10rem] hidden sm:block'>
      <div className='flex flex-col pt-4 sm:pt-16 pl-7'>
        <div className='flex items-center font-bold'>
          <MdHome className='w-9 h-9' />
          <p className='ml-2'>Home</p>
        </div>


        <div className='flex items-center mt-4 '>
          <div className='w-10 h-10'>
            <Image src={guy} className='rounded-full' />
          </div>
          <p className='ml-2 font-semibold'>Log In</p>
        </div>
        <div className='border-b my-4'></div>
        <div className='space-y-6'>
          <div className='flex items-center'>
            <AiOutlineDesktop className='w-8 h-8' />
            <p className='ml-2 font-semibold'>Watch</p>
          </div>
          <div className='flex items-center'>
            <BsPeopleFill className='w-8 h-8' />
            <p className='ml-2 font-semibold'>Friends</p>
          </div>
          <div className='flex items-center'>
            <MdGroups className='w-8 h-8' />
            <p className='ml-2 font-semibold'>Groups</p>
          </div>
          <div className='flex items-center'>
            <BsCart3 className='w-8 h-8' />
            <p className='ml-2 font-semibold'>MarketPlace</p>
          </div>
          <div className='flex items-center'>
            <BsCalendar2Fill className='w-7 h-7' />
            <p className='ml-2 font-semibold'>Events</p>
          </div>
          <div className='flex items-center'>
            <AiFillClockCircle className='w-8 h-8' />
            <p className='ml-2 font-semibold'>Memories</p>
          </div>
          <div className='flex items-center'>
            <RiArrowDropDownLine className='w-7 h-7' />
            <p className='ml-2'>See More</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar