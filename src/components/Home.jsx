
import { useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';  
import axios from '../utils/axios';
import { useEffect } from 'react';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loading from './Loading';



const Home = () => {
  const [wallpaper,setWallpaper] =useState(null);
  const [trending,setTrending]=useState(null);
  const [category,setcategory]=useState("all");

  const GetHeaderWallpaper= async () => {
    try {
        const { data } = await axios.get(`/trending/${category}/day`);
        let randomdata=data.results[(Math.random()*data.results.length).toFixed()];
        setWallpaper(randomdata);
        
    } catch (error) {
        console.log("Error: " + error);
    }
};
// console.log(wallpaper);

useEffect(() => {
  GetTrending();
   !wallpaper && GetHeaderWallpaper();
   
}, [GetHeaderWallpaper, category, wallpaper]);
// console.log(trending);


const GetTrending= async () => {
  try {
      const { data } = await axios.get(`/trending/${category}/day`);
     
      setTrending(data.results);
      
  } catch (error) {
      console.log("Error: " + error);
  }
};
// console.log(wallpaper);

useEffect(() => {
 !wallpaper && GetHeaderWallpaper();
}, [category]);
  

  return wallpaper && trending ?  (
    <div className="flex">
      <Sidenav />
      
      <div className="w-[80vw] h-full overflow-auto overflow-x-hidden">
        
        <Topnav/>
        <Header data={wallpaper}/>

        <div className=" p-5 flex justify-between">
          <h1 className="text-3xl font-semibold text-zinc-400">
            Trending
          </h1>
          <Dropdown title="Filter" options={["tv","Movie","All"]} 
          func={(event)=> setcategory(event.target.value)}/>
        </div>
        <HorizontalCards data={trending}/>
      </div>
      
    </div>
  ):<Loading/>
};

export default Home;
