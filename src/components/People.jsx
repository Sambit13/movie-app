import { useState } from "react";
import { useEffect } from "react";
import axios from "../utils/axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from 'react-infinite-scroller';
import Cards from "./partials/Cards";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const People = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    // const [duration, setDuration] = useState("day");
    const [person, setperson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title="Sonu's | person shows";


    const GetPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
           
            if (data.results.length > 0) {
                setperson((prevData) => [...prevData, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    const refreshHandler = () => {
        if (person.length === 0) {
            GetPerson();
        } else {
            setPage(1);
            setperson([]);
            GetPerson();
        }
    };

    useEffect(() => {
        refreshHandler();
    }, [category]);
  return person.length > 0 ? (
    <div className="  w-screen h-screen ">
        
        <div className="w-full  flex items-center px-[5%] ">
            {/* <Link onClick={()=>navigate(-1)}></Link> */}
            <h1 className="text-2xl font-semibold text-zinc-300 w-[20%]">
            <i className="hover:text-[#6556CD] ri-arrow-left-line mr-3" onClick={()=>navigate(-1)}></i>
            person <small className="ml-2 text-sm text-zinc-500">({category})</small></h1>
            <Topnav />
            
            
        </div>


        <InfiniteScroll
    pageStart={0}
    loadMore={GetPerson}
    hasMore={hasMore} // Update this based on your condition
    loader={<Loading key={0} />} // Use your Loading component
>
    <Cards data={person} title="person"/>
</InfiniteScroll>
        
    </div>
  ): <Loading/>
}

export default People