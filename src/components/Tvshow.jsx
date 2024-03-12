import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from 'react-infinite-scroller';
import Cards from "./partials/Cards";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Tvshow = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    // const [duration, setDuration] = useState("day");
    const [tv, settv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title="Sonu's | Tv shows";


    const GetTv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
           
            if (data.results.length > 0) {
                settv((prevData) => [...prevData, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    const refreshHandler = () => {
        if (tv.length === 0) {
            GetTv();
        } else {
            setPage(1);
            settv([]);
            GetTv();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);
  return tv.length > 0 ? (
    <div className="  w-screen h-screen ">
        
        <div className="w-full  flex items-center px-[5%] ">
            {/* <Link onClick={()=>navigate(-1)}></Link> */}
            <h1 className="text-2xl font-semibold text-zinc-300 w-[20%]">
            <i className="hover:text-[#6556CD] ri-arrow-left-line mr-3" onClick={()=>navigate(-1)}></i>
            tv <small className="ml-2 text-sm text-zinc-500">({category})</small></h1>
            <Topnav />
            <Dropdown title="Category" options={["popular","on_the_air","top_rated","airing_today"]} func={(e)=>setCategory(e.target.value)}/>
            <div className="w-[2%]"></div>
            
        </div>


        <InfiniteScroll
    pageStart={0}
    loadMore={GetTv}
    hasMore={hasMore} // Update this based on your condition
    loader={<Loading key={0} />} // Use your Loading component
>
    <Cards data={tv} title="tv"/>
</InfiniteScroll>
        
    </div>
  ): <Loading/>
}

export default Tvshow