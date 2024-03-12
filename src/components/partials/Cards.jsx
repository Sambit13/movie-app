
import { Link } from "react-router-dom"
const Cards = ({data,title}) => {
  return (
    <div className="flex flex-wrap w-full h-full p-[5%] pl-[8%] bg-[#1F1E24]" >
        
    {data.map((c,i)=>(
        <Link 
        // eslint-disable-next-line react/prop-types
        to={`/${c.media_type || title}/details/${c.id}`}
        className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
            <img className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" src={`https://image.tmdb.org/t/p/original/${c.poster_path      ||  c.backdrop_path  || c.profile_path}`}/>
            <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
                 {c.name || c.title ||c.original_name || c.original_title}
                 </h1>

                 {c.vote_average && <div className="pl-2 absolute right-[-10%] bottom-[25%] text-white w-[7vh] h-[7vh] rounded-full text-[15px] font-semibold flex justify-center items-center bg-yellow-600">
                  {(c.vote_average * 10).toFixed()}<sup className="text-[10px]">%</sup>
                 </div> }
                 
           
        </Link>
    ))}
    </div>
  )
}

export default Cards