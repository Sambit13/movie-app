import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios';
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from 'react-infinite-scroller';
import Loading from "./Loading";
import Cards from "./partials/Cards";

const Popular = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    // const [duration, setDuration] = useState("day");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title="Sonu's | Popular";


    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
           
            if (data.results.length > 0) {
                setPopular((prevData) => [...prevData, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    const refreshHandler = () => {
        if (popular.length === 0) {
            GetPopular();
        } else {
            setPage(1);
            setPopular([]);
            GetPopular();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);

    return popular.length > 0 ? (
        <div className="  w-screen h-screen ">
            
            <div className="w-full  flex items-center px-[5%] ">
                {/* <Link onClick={()=>navigate(-1)}></Link> */}
                <h1 className="text-2xl font-semibold text-zinc-300 w-[20%]">
                <i className="hover:text-[#6556CD] ri-arrow-left-line mr-3" onClick={()=>navigate(-1)}></i>Popular</h1>
                <Topnav/>
                <Dropdown title="Category" options={["movie","tv"]} func={(e)=>setCategory(e.target.value)}/>
                <div className="w-[2%]"></div>
                
            </div>
    
    
            <InfiniteScroll
        pageStart={0}
        loadMore={GetPopular}
        hasMore={hasMore} // Update this based on your condition
        loader={<Loading key={0} />} // Use your Loading component
    >
        <Cards data={popular} title={category}/>
    </InfiniteScroll>
            
        </div>
      ): <Loading/>
};

export default Popular;
