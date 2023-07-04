import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { AiFillHome } from "react-icons/ai";
import {MdSubscriptions} from 'react-icons/md'
import{CgYoutube} from "react-icons/cg"

// console.log(AiOutlineHome)
const SideBar =() =>{



    const isOpen =    useSelector((state)=>state.app.isOpenMenu) 
    if(!isOpen) return null


    return (
        <div className='p-5 shadow-lg w-48  bg-yellow fixed sticky '>
           
           <ul>
            <div className='flex cursor-pointer '>
             <AiFillHome />
            <li className='px-3'><Link to='/'>Home</Link></li></div>
            <div className='flex mt-5 cursor-pointer'>
                <CgYoutube />
            <li className='px-3'>Shorts</li>
            </div>
           
           <div className='flex mt-5     cursor-pointer'>
            <MdSubscriptions className='cursor:pointer'/>
            <li className='px-3'> Subscriptions</li> 
           </div>
           
            
           </ul>
           <h1 className='font-bold pt-5'>Subscriptions!</h1>
           <ul>

            <li>Music</li>
            <li>Movie</li>
            <li>Gaming</li>
            <li>Sports</li>
           </ul>
           <h1 className='font-bold pt-5'>WatchLater</h1>
           <ul>
            <li>Music</li>
            <li>Movie</li>
            <li>Gaming</li>
            <li>Sports</li>
           </ul>
        </div>
    )
}
export default SideBar