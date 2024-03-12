
import { Link } from "react-router-dom";

// import 'remixicon/fonts/remixicon.css'
import './Sidenav.css';

const Sidenav = () => {


  return (
    <div className="w-[20vw] h-screen border-r-2 border-zinc-500 p-7  overflow-hidden overflow-y-auto scrollbar-hidden">
        <h1 className="text-2xl text-white font-bold pl-5">
            <i className="text-[#6556CD] ri-tv-fill text-2xl mr-3"></i>
            <span className="text-2xl">Sonu's.</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
            <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
            </h1>
            <Link to="/trending"className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                  <i className="ri-fire-fill mr-2"></i>
                  Trending</Link>
            <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                <i className="mr-2 ri-bard-fill"></i>Popular</Link>
            <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i className="ri-movie-2-fill mr-2"></i>
            Movies</Link>
            <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
            <i className="ri-tv-2-fill mr-2"></i>
            TV show</Link>
            <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 mb-5">
            <i className="mr-2 ri-team-fill"></i>
            People</Link>
            
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400 "/>
        <nav className="flex flex-col text-zinc-400 text-xl gap-3">
            <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
            </h1>
            <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5 ">
                  <i className="ri-information-fill mr-2"></i>
                  About</Link>
            <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
                <i className="mr-2 ri-phone-fill"></i>Contact Us</Link>
            
            
        </nav>
    </div>
  );
};

export default Sidenav;
