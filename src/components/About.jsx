import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate=useNavigate();
  return (
    <div className="w-[80%] mx-auto mt-5">
        <h1 className="text-7xl font-semibold text-white">Welcome to <span className="text-violet-500">Sonu's Movie</span> </h1>
        <h1 className="text-zinc-400 text-2xl mt-5" >What we offer</h1>
        <div className="text-zinc-400 pl-5 pt-5">
        <p>- Comprehensive movie reviews and recommendations</p>
        <p>- Detailed movie information and trailers</p>
        <p>- Exclusive interviews and behind-the-scenes content</p>
        <p>- Upcoming releases and community discussions</p>
        </div>

        <h1 className="text-zinc-400 text-2xl mt-5" >Why Choose Us?</h1>
        <div className="text-zinc-400 pl-5 pt-5">
        <p>- Expertise in movies with unbiased reviews</p>
        <p>- Diverse selection catering to all tastes</p>
        <p>- User-friendly experience with regular updates</p>
        <p>- Contact us for questions, feedback, or suggestions</p>
        </div>

        <p className="text-zinc-400 text-2xl mt-10 ml-[10%]">  Thank you for choosing <span className="text-violet-500">Sonu's Movie</span> Enjoy the magic of movies with us!</p>
        <button className="w-30px h-30px bg-violet-500 rounded-lg px-7 py-4 text-zinc-300 mx-[40%] mt-8 hover:bg-violet-600 hover:font-semibold"
        // eslint-disable-next-line react/no-unknown-property
        onClick={()=>navigate(-1)} >Go back</button>
    </div>
  )
}

export default About