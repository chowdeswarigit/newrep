import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice'
import { useActionData, useParams, useSearchParams } from 'react-router-dom'
import Comments from './Comments'
// import VideoCard from './VideoCard'
import VideoContainer from './VideoContainer'

const WatchPage = () => {

    const disPatch =  useDispatch() 
    const [searchParams] = useSearchParams() 
    // const [searchname] = () 
    // console.log(searchname)


    // console.log(searchParams)
    
    useEffect(()=>{

        disPatch(closeMenu())
    },[])
  return (
    <div className='flex flex-row'>
       <div className='w-100'>
        <iframe width="1000"
         height="550"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
        </iframe>
    </div>
      <div>
        <Comments/>
      </div>
    </div>
    
   
  )
}   

export default WatchPage