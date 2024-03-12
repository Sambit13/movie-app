import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import { useState } from "react";
import { useEffect } from "react";
import axios from '../utils/axios'
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroller';

const Trending = () => {
    const navigate=useNavigate();
    const [category,setcategory]=useState("all");
    const[duration,setduration]=useState("day");
    const[trending,settrending]=useState([]);
    const [page,setpage]=useState(1);
    const [hasMore,sethasMore]=useState(true);
    document.title="Sonu's | Trendinng";

    const GetTrending= async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
           
            // settrending(data.results);
            if(data.results.length > 0){
                settrending((prevdata)=> [...prevdata,...data.results]);
                setpage(page+1);
            }else{
                sethasMore(false);
            }
        } 
       
       

        catch (error) {
            console.log("Error: " + error);
        }
      };
    //   console.log(trending);
      const refreshHandler = ()=>{
        if(trending.length === 0){
            GetTrending();
        }else{
            setpage(1);
            settrending([]);
            GetTrending();
        }
      }


      useEffect(()=>{
        refreshHandler();
      },[category,duration])
    


    
  return trending.length > 0 ? (
    <div className="  w-screen h-screen ">
        
        <div className="w-full  flex items-center px-[5%] ">
            {/* <Link onClick={()=>navigate(-1)}></Link> */}
            <h1 className="text-2xl font-semibold text-zinc-300 w-[20%]">
            <i className="hover:text-[#6556CD] w-[15px] h-[15px] text-md hover:bg-zinc-400 bg-zinc-800 rounded-full ri-arrow-left-line mr-3" onClick={()=>navigate(-1)}></i>Trending</h1>
            <Topnav/>
            <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=>setcategory(e.target.value)}/>
            <div className="w-[2%]"></div>
            <Dropdown title="Duration" options={["week","day"]} func={(e)=>setduration(e.target.value)}/>
        </div>


        <InfiniteScroll
    pageStart={0}
    loadMore={GetTrending}
    hasMore={hasMore} // Update this based on your condition
    loader={<Loading key={0} />} // Use your Loading component
>
    <Cards data={trending} title={category}/>
</InfiniteScroll>
        
    </div>
  ): <Loading/>
}

export default Trending