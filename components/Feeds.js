import React from 'react'
import LeftSideBar from "../components/LeftSideBar"
import CreatePost from './CreatePost'
import Posts from './Posts'
import RightSideBar from './RightSideBar'
import Stories from './Stories'

const Feeds = () => {
  return (
    <div className='flex bg-[#f2f3f7] '>
        {/* LeftSideBar */}
        <LeftSideBar/>
        <div className='mx-auto'> 
          {/* Stories */}
        <Stories/>
        {/* CreatePost */}
        <CreatePost/>
        {/* Posts */}
        <Posts/>
        </div>
        
        
        {/* RightSideBar */}
          <RightSideBar/>
    </div>
  )
}

export default Feeds