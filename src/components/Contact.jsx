import { useNavigate } from "react-router-dom"

const Contact = () => {
    const navigate=useNavigate();
  return (
    <div className="w-[80%] mx-auto mt-5 overflow-hidden overflow-y-auto" >
        <h1 className="text-7xl font-semibold text-white">Contact Us: </h1>
        <h1 className="text-zinc-400 text-2xl mt-5" >Have questions, feedback, or suggestions? We would love to hear from you! Feel free to contact us via email, social media, or our online contact form</h1>
        <div className="text-zinc-400 text-xl mt-5 flex gap-[10%]">
        <p>Phone num: 6734907863</p>
        <p>Email: sranjan21@gmail.com</p>
        <button 
    className="w-30px h-30px bg-violet-500 rounded-lg px-7 py-3 text-zinc-300 mx-[10%]  hover:bg-violet-600 hover:font-semibold whitespace-nowrap mb-2 "
    onClick={() => navigate(-1)} // Navigate back when clicked
>
    Go back
</button>
        </div>


        <div className="mt-10 flex flex-col border border-zinc-500 p-5 mb-5 rounded-md">
        <label className="text-white">Enter your name</label>
        <div className="flex gap-5">
        <input type="text" placeholder="first name" className="p-2 mt-2 bg-zinc-300 text-black"/>
        <input type="text" placeholder="last name" className="p-2 mt-2 bg-zinc-300 text-black"/>

        </div>
        
            <label className="text-white  mt-3">E mail</label>
            <input type="email" placeholder="Enter email here" className="p-2 mt-2 bg-zinc-300 text-black"/>
            <label className="text-white mt-3">Phone number</label>
            <input type="phone" placeholder="Mob no" className="p-2 mt-2 bg-zinc-300 text-black"/>
            <label className="text-white mt-3">Write your Querry</label>
            <input type="text" placeholder="Add text" className="p-2 mt-2 rounded-sm bg-zinc-300 text-black"/>
            
            <input type="submit" className="w-30px h-30px bg-red-500 rounded-lg px-7 py-4 text-zinc-300 mx-[40%] mt-5 hover:bg-red-600 hover:font-semibold"></input>
        
        </div>
       
        
    </div>
  )
}

export default Contact