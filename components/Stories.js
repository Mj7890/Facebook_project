import React from 'react'
import therock from "../assets/therock.jpg"
import therock20 from "../assets/therock20.jpg"
import mike from "../assets/1miketyson.jpg"
import mikeprofile from "../assets/mikeprofile.webp"
import mrbeastbackground from "../assets/mrbeastbackground.webp"
import mrbeast from "../assets/1mrbeast.jpg"
import kobebackground from "../assets/kobebackground.jpg"
import kobe from "../assets/1kobe.webp"
import arnoldbackground from "../assets/arnoldbackground.webp"
import arnold from "../assets/1arnold.jpg"
import Image from 'next/image'


const Stories = () => {
    const stories = [
        { profile: therock, background: therock20 },
        { profile: mikeprofile, background: mike },
        { profile: mrbeast, background: mrbeastbackground },
        { profile: arnold, background: arnoldbackground },
        { profile: kobe, background: kobebackground },]


    return (
        <div className="flex items-center w-screen h-36 sm:w-full px-2 roumded-[1rem] mx-2 mt-4 sm:mt-8">
            <div className=' w-full  flex justify-between space-x-1 sm:space-x-4 p-1 mx-auto max-w-[25rem] sm:max-w-[33rem] px-2 bg-white rounded-[1rem] py-3'>
                {stories.map((story) => (
                    <div className=' relative flex bg-red-300 w-[4.5rem] h-32 sm:w-24 sm:h-40 rounded-[1rem]'>
                        <div className='flex'>
                            <Image src={story.background} className=" flex object-cover  rounded-[1rem]" />
                        </div>
                        <div className='flex absolute w-9 h-9 p-1 bg-blue-400 rounded-full top-1 left-1'>
                            <Image src={story.profile} className="rounded-full object-cover" />
                        </div>

                    </div>
                ))}
            </div>
        </div>

    )
}

export default Stories