import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from 'react-infinite-scroller';
import Cards from "./partials/Cards";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Movie = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    // const [duration, setDuration] = useState("day");
    const [movie, setmovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title="Sonu's | Movies";


    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
           
            if (data.results.length > 0) {
                setmovie((prevData) => [...prevData, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    const refreshHandler = () => {
        if (movie.length === 0) {
            GetMovie();
        } else {
            setPage(1);
            setmovie([]);
            GetMovie();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);
  return movie.length > 0 ? (
    <div className="  w-screen h-screen ">
        
        <div className="w-full  flex items-center px-[5%] ">
            {/* <Link onClick={()=>navigate(-1)}></Link> */}
            <h1 className="text-2xl font-semibold text-zinc-300 w-[20%]">
            <i className="hover:text-[#6556CD] ri-arrow-left-line mr-3" onClick={()=>navigate(-1)}></i>
            Movie <small className="ml-2 text-sm text-zinc-500">({category})</small></h1>
            <Topnav />
            <Dropdown title="Category" options={["popular","top_rated","upcoming","now_playing"]} func={(e)=>setCategory(e.target.value)}/>
            <div className="w-[2%]"></div>
            
        </div>


        <InfiniteScroll
    pageStart={0}
    loadMore={GetMovie}
    hasMore={hasMore} // Update this based on your condition
    loader={<Loading key={0} />} // Use your Loading component
>
    <Cards data={movie} title="movie"/>
</InfiniteScroll>
        
    </div>
  ): <Loading/>
}

export default Movie