import React from 'react'
import bookimage from '../../assets/books.jpg'
const Banner = () => {
  return (
    <div className=' flex justify-around items-center  p-14 w-full mx-auto '>
       <div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <button className='btn-primary btn'>Get Started</button>
       </div>
       <div>
        <img className=' w-[500px] rounded-lg ' src={bookimage} alt="" />
       </div>
    </div>
  )
}

export default Banner
