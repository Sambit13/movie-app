import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import { useState } from "react";

const PersonDetails = () => {
  const { path } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  // eslint-disable-next-line no-undef
  const [category,setcategory]=useState();
  const { info } = useSelector((state) => state.person);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[8%] w-screen h-[160vh] bg-[#1F1E24] ">
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link className="hover:text-[#6556CD] ri-arrow-left-line mr-3 " onClick={() => navigate(-1)}></Link>
      </nav>

      <div className="w-full flex">
        {/* Part 2 left poster and details */}
        <div className="w-[20%]">
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          <div className="text-2xl text-white flex gap-x-5">
            <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
            <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-circle-fill"></i></a>
            <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-fill"></i></a>
            <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i className="ri-twitter-x-fill"></i></a>
          </div>
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">Personal Details</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400">{info.detail.gender === 2 ? "Male" : "Female"}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>
        </div>

        {/* Part 3 details and informations */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-7xl text-zinc-200 font-bold my-5">{info.detail.name}</h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Biography
          
          </h1>
          <p className="text-zinc-400 mt-3">{info.detail.biography.split(' ').slice(0, 75).join(' ')}</p>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
          Famous for
          </h1>
          <HorizontalCards  data={info.combinedCredits.cast}/>
          

        

       
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
