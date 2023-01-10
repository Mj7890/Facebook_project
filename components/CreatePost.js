import Image from 'next/image';
import React from 'react'
import guy from "../assets/guy7.jpg";
import camera from "../assets/camera.png"
import smile from "../assets/smile.png"
import photos from "../assets/photos.png"


const CreatePost = () => {
  return (
    <div className='w-screen sm:w-full pb-4'>
      <div className='mx-auto max-w-[25rem] sm:max-w-[33rem] sm:px-2 bg-white rounded-[1rem]'>
        <div className=' mt-8  flex items-center w-full p-3 pt-4  '>
          <div className='w-14 h-14 shrink-0'>
            <Image src={guy} className="rounded-full" />
          </div>
          <div className='flex items-center  ml-5 w-full'>
            <input type="text" placeholder="what's on your mind joe Doe?" className='outline-0 bg-[#f2f3f7] p-1 rounded-full pl-3 w-full h-12 ' />
          </div>
          <div className='flex items-center bg-blue-500 px-2 rounded-full h-10 ml-4'>
            <button className='font-bold text-white'>Post</button>
          </div>

        </div>
        <div className='border-b mb-4 mt-2' ></div>
        <div className='flex justify-between mx-4 mb-8'>
          <div className='flex'>
            <div className='w-7 h-7'>
              <Image src={camera} />
            </div>
            <p className='pl-2 whitespace-nowrap text-[16px]'>Live Video</p>
          </div>
          <div className='flex justify-between sm:mx-9 pb-3'>
          <div className='w-7 h-7'>
            <Image src={photos} />
          </div>
          <p className='pl-2 text-[16px]'>Image/Video</p>
          </div>

          <div className='flex'>
          <div className='w-7 h-7'>
            <Image src={smile} />
          </div>
          <p className='pl-2 text-[16px]  '>Feeling/Activity</p>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default CreatePost