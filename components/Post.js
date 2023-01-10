import React from 'react'
import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import share from "../assets/share.png"
import { RiArrowDownSLine } from "react-icons/ri"
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai"
import { BiLike, BiSmile, BiWorld } from "react-icons/bi"
import { FaRegCommentAlt } from "react-icons/fa"
import Image from 'next/image';


const Post = () => {
  return (
    <div className='bg-white rounded-[1rem] px-4 py-4'>
      {/* Header */}
      <div className=' flex items-center justify-between'>
        <div className='flex items-center '>
          <div className='w-12 h-12'>
            <Image src={guy} className="rounded-full" />
          </div>
          <div className='ml-3'>
            <p className=' font-bold '>Joe Doe</p>
            <div className='flex'>
              <p className='text-xs'>3 hours ago&#8226;</p>
              <BiWorld className="ml-2 shrink-0" />
            </div>
          </div>
        </div>

        <div className='w-10 h-10'>
          <Image src={dots} />
        </div>
      </div>
      {/* Input */}
      <div className='my-3 '>
        <p>My brand new car</p>
      </div>
      {/* Image */}
      <div className='-mx-4'>
        <Image src={car} />
      </div>

      {/* Number of Likes + Buttons */}
      <div className=''>
        <div className='flex justify-between text-[#8e8d8d] mt-2'>
          <div className='flex items-center '>
            <div className='w-[1.1rem]  h-[1.1rem]'>
              <Image src={like} />
            </div>
            <div className='ml-[2px] w-5  h-5'>
              <Image src={hearth} />
            </div>
            <p className='pl-2'>John Watts and another 11,435</p>

          </div>
          <p>374 Comments</p>
        </div>
        <div className='border-b my-2'></div>


        <div className='flex justify-between mx-4'>
          <div className='flex items-center'>
            <BiLike className='w-6 h-6' />
            <p className='pl-2 text-[18px]'>Like</p>
          </div>
          <div className='flex items-center'>
            <FaRegCommentAlt className='w-6 h-6' />
            <p className='pl-2 text-[18px]'>Comment</p>
          </div>
          <div className='flex items-center'>
            <div className='w-6 h-6'>
              <Image src={share} />
            </div>

            <p className='pl-2 text-[18px]'>Share</p>
          </div>
        </div>
        <div className='border-b'></div>
      </div>


      {/* Comment Section */}
      <div className='max-h-40 overflow-y-auto '>
        <div className='flex justify-between text-[#8e8d8d]'>
          <p>See 394 previous Comments</p>
          <div className='flex items-center '>
            <p>Most Relevant </p>
            <RiArrowDownSLine />
          </div>
        </div>

        {/*  */}
        <div className="">
          {/* First Comment */}
          <div className=''>
            <div className='mt-3 flex items-center'>
              <div className='w-10 h-10'>
                <Image src={guy} alt="" className='rounded-full' />
              </div>
              <p className='ml-2 font-bold' >Joe Doe</p>
              <p className='ml-2'>Awesome Black, pitfall</p>
            </div>
            <div className="ml-[3rem] flex -mt-1.5">
              <p className='mr-2'>Like</p>
              <p>Reply</p>
            </div>
          </div>
          {/* Second Comment */}
          <div className=''>
            <div className='mt-3 flex items-center'>
              <div className='w-10 h-10'>
                <Image src={guy} alt="" className='rounded-full' />
              </div>
              <p className='ml-2 font-bold' >Joe Doe</p>
              <p className='ml-2'>Second Comment</p>
            </div>
            <div className="ml-[3rem] flex -mt-1.5">
              <p className='mr-2'>Like</p>
              <p>Reply</p>
            </div>
          </div>
          {/* Third Comment*/}
          <div className=''>
            <div className='mt-3 flex items-center'>
              <div className='w-10 h-10'>
                <Image src={guy} alt="" className='rounded-full' />
              </div>
              <p className='ml-2 font-bold' >Joe Doe</p>
              <p className='ml-2'>Awesome Black, pitfall</p>
            </div>
            <div className="ml-[3rem] flex -mt-1.5">
              <p className='mr-2'>Like</p>
              <p>Reply</p>
            </div>
          </div>

        </div>
      </div>
      {/* Input */}
      <div className='flex items-center mt-4'>
        <div className=' w-10 h-10'>
          <Image src={guy} className="rounded-full shrink-0 " />
        </div>
        <div className='w-full ml-2 bg-[#f2f3f7] rounded-full flex items-center relative'>
          <input type="text" placeholder='Write a comment' className='outline-0 text-[#f2f3f7] p-1 rounded-full w-full bg-[#f2f3f7]' />

          <div className="flex  absolute right-[4.5rem] space-x-2 text-[#8e8d8d]">
            <BiSmile />
            <AiOutlineCamera />
            <AiOutlineGif />
          </div>

          <div className='mr-4 bg-blue-400 text-white rounded-full '>

            <button className=' font-bold px-2 '>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post 