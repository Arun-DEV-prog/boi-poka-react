import React from 'react'
import bookimage from '../../assets/books.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookimage}
      className="w-[524] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <p className="py-6">
      
      </p>
      <button className="btn btn-primary">Visit the list</button>
    </div>
  </div>
</div>
  )
}

export default Banner
