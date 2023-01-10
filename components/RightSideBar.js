import React from 'react'
import albert from "../assets/1albert.jpg";
import arnold from "../assets/1arnold.jpg";
import drphil from "../assets/1drphil.webp";
import elon from "../assets/1elon.webp";
import kobe from "../assets/1kobe.webp";
import miketyson from "../assets/1miketyson.jpg";
import mrbeast from "../assets/1mrbeast.jpg";
import rihana from "../assets/1rihana.jpg";
import therock from "../assets/1rock.jpg";



import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import dots from "../assets/dots.png";
import Image from 'next/image';

const RightSideBar = () => {
    return (
        <div>
            <div className=''>
                <div className='flex items-center pr-2'>
                    <p className='pr-2 font-bold'>Contacts</p>
                    <div className="flex items-center space-x-2" >
                    <BsFillCameraVideoFill/>
                    <FiSearch/>
                    <div className='w-7 h-7'>
                        <Image src={dots}/>
                    </div>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default RightSideBar