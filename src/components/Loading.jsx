import loader from '/dribbble.gif'

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-black'>
       <img className="w-[50%] " src={loader} /> 
    </div>
  )
}

export default Loading