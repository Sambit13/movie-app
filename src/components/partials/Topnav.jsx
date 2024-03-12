import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
// import noimage from 'noimage.jepg'; // Adjust the path to your noimage.jpg file

const Topnav = () => {
    const [query, setQuery] = useState("");
    const [searches, setSearches] = useState([]);

    const getSearch = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    useEffect(() => {
        getSearch();
    }, [query]);

    return (
        <div className="w-[60%] h-[10vh] relative flex items-center mx-auto rihgt-[0px]">
            <i className="ri-search-line text-3xl text-zinc-400"></i>
            <input
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                type="text"
                placeholder="Search anything"
                className="mx-10 w-[50%] text-zinc-200 bg-transparent border-none outline-none"
            />
            {query.length > 0 && (
                <i onClick={() => setQuery("")} 
                className="ri-close-fill text-3xl text-zinc-400 right-0"></i>
            )}

            <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
                {searches.map((s, i) => (
                    <Link
                    to={`/${s.media_type}/details/${s.id}`}
                    key={i} className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold bg-zinc-100 w-[100%] p-7 flex justify-start items-center rounded border-b-2 border-zinc-200 text-zinc-600">
                        <img 
                            
                            src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"}
                            className="w-[10vw] h-[10vh] object-cover rounded-md mr-5 shadow-lg"
                            alt="Poster"
                        />
                        <span>{s.name || s.title || s.original_name || s.original_title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Topnav;
