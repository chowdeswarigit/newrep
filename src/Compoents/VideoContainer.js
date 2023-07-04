import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../Utils/constants' 

import axios from 'axios'


import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import WatchPage from './WatchPage'

const VideoContainer = () => {


    const [videos,setVideos] = useState([])



    useEffect (()=>{
         getVideos()

    },[])
const getVideos =async ()=>{

    const data = await fetch (YOUTUBE_API_KEY) 
    const json = await data.json()

    setVideos(json.items)
}

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   params: {
//     q: 'desp',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': '1e2fcb0bfamsh7dbf7c9928e91e2p13c058jsn55163ac5f5e0',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };
// const getVideos = async() =>{

//   try {
//     const response =  await axios.request(options);
//     console.log(response.data.results);
//     console.log("hhh")
//     setVideos(response.data.results)
//   } catch (error) {
//     console.error(error);
//   }

// }

  return (
    <div className='flex flex-wrap'>
      {videos.map(item => 
     <Link to={"/watch?v="+item.id}> <VideoCard key={item.id} info ={item}  /></Link>)}
    </div>
  )
}

export default VideoContainer