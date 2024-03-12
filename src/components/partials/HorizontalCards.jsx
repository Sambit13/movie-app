// import Dropdown from "./Dropdown";
import { Link  } from "react-router-dom";
const HorizontalCards = ({ data}) => {
    return (
      
       
  
        <div className="w-[100%] flex overflow-y-hidden mb-5 p-5" >
          {data.map((d, i) => (
            <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%] mr-5  bg-zinc-900 mb-5 overflow-y-auto">
              <img
                src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
                className="w-full object-cover h-[45%]"
                alt={d.name || d.title || d.original_name || d.original_title}
              />
              <div></div>
              <div className="text-white p-3 ">
                <h1 className=" text-[16px] font-bold ">
                  {d.name || d.title || d.original_name || d.original_title}
                </h1>
                <p className=" mt-1 text-[13px] ">
                  {d.overview.slice(0, 60)}...
                  <span className="text-zinc-400 font-semibold">more</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      
    );
  };
  
  export default HorizontalCards;
  