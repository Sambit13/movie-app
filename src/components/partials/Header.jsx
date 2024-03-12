
import { Link } from "react-router-dom";
const Header = ({data}) => {
    // console.log(data);
  return (
    <div 
    style={{
        background:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3),rgba(0,0,0,0.3)) , url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition:'top 30% right 100px',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        
    }}
    className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%] ml-[5%] mx-auto">
        <h1 className="text-5xl font-bold text-white w-[70%]" > {data.name || data.title || data.original_name || data.original_title}</h1>
        <p className="w-[70%] text-white mt-3">{data.overview.slice(0,100)}...<Link className="text-blue-400"
        // eslint-disable-next-line react/prop-types
        to={`/${data.media_type}/details/${data.id}`}
        >more</Link></p>
        <p className="text-white">
        
        <i className=" text-yellow-300 ri-slideshow-2-fill mr-1"></i>{data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-2 mt-5 bg-[#6556CD] text-white  rounded">Watch Trailer</Link>
    </div>
  )
}

export default Header