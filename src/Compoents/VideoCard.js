import WatchPage from "./WatchPage"

const VideoCard = ({info}) =>{
console.log(info)

const{snippet,statistics} = info 

const {channelTitle,title,thumbnails} = snippet 


    return(
        <div className="p-2 m-3 w-72 shadow-lg"  >

            <img  alt ="image" className="rounded-lg" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold py-2" >{title}</li>
                <li>{channelTitle}</li>
                <li>{(statistics.viewCount/1000000).toFixed(1)}M views</li>
            </ul>

        </div>
    )
}
export default VideoCard