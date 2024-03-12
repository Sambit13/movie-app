import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { asyncloadtv, removetv } from "../store/actions/tvActions"
import { Outlet, useLocation, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Loading from './Loading'
import HorizontalCards from './partials/HorizontalCards'


const TvDetails = () => {
  const { path } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { info } = useSelector((state) => state.tv)

  useEffect(() => {
    dispatch(asyncloadtv(id))
    return () => {
      dispatch(removetv())
    }
  }, [id])
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6),rgba(0,0,0,0.6)) , url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className=" relative w-screen h-[200vh] px-[10%] z-[50]"
    >
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link className="hover:text-[#6556CD] ri-arrow-left-line mr-3 " onClick={() => navigate(-1)}></Link>
        <a target="_blank" href={info.detail.homepage}><i className="ri-external-link-line"></i></a>
        <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
      </nav>

      <div className="w-full flex">
        <img
          className="h-[60vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
        />
        <div className="content ml-[5%] text-white">
          <h1 className="text-6xl font-bold ">{info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}<small className="text-xl font-semibold text-zinc-300">({info.detail.first_air_date.split("-")[0]})</small></h1>
          <div className=" mt-4 mb-5 flex  items-center gap-x-5">
            <span className=" text-white w-[7vh] h-[7vh] rounded-full text-[15px] font-semibold flex justify-center items-center bg-yellow-600">{(info.detail.vote_average * 10).toFixed()}<sup className="text-[10px]">%</sup></span>
            <h1 className="w-[60px] font-semibold text-2xl font-semibold">User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime} min</h1>
          </div>
          <h1 className="text-xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>
          <h1 className="text-xl mt-5  mb-0 ">Overview:</h1>
          <p className="w-[90vh] mb-6">{info.detail.overview}</p>
          
          <Link autoplay to={`/tv/details/${id}/trailer`} className="py-3 px-5 bg-[#6556CD] rounded-lg hover:bg-violet-700">
  <i className="text-xl mr-2 ri-play-fill"></i>Play Trailer
</Link>
        </div>
      </div>

      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {/* Watch provider sections... */}
      </div>
       
      <hr className="mt-5 mb-5 h-[2px] bg-zinc-900" />
      <h1 className="text-2xl font-bold  text-white">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden mb-5 p-5">

      {info.detail.seasons.length > 0 ? info.detail.seasons.map((s,i)=>(
             // eslint-disable-next-line react/jsx-key
             <div className="w-[15vh] mr-[10%]">
             <img className="h-[30vh] min-w-[14vw]  shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
          src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} /><h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {s.name}
          </h1>
          </div >
      )) : <h1 className="text-3xl mt-5 text-white font-black text-center"> Nothing to show</h1>  }


     

      </div>



      <hr className="mt-5 mb-5 h-[2px] bg-zinc-900" />
      <h1 className="text-2xl font-bold  text-white">Recommendations</h1>
      <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />
      <Outlet />
    </div>
  ) : <Loading />
}

export default TvDetails