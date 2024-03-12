// Trailer.jsx
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Notfound from '../Notfound';



const Trailer = () => {
    const navigate=useNavigate();
    const {pathname}=useLocation();
    
    const category=pathname.includes("movie") ? "movie" : "tv";
    const ytvideo=useSelector((state)=> state[category].info.videos);
    console.log(ytvideo)
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.9)] z-[1000] flex justify-center items-center">
         <Link className=" absolute hover:text-[#6556CD] ri-close-fill mr-3 top-[5%] right-[5%] text-3xl text-white" onClick={() => navigate(-1)}></Link>

         {ytvideo ? (
            <ReactPlayer 
            controls
            height={500}
            width={1000}
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>
         ):(<Notfound/>)}
        
      </div>
    )
  }
  
  export default Trailer
  