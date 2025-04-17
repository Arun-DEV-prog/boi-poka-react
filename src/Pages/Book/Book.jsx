import React, { use } from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({signlebook}) => {
    // const data=use(bookPromise);
    // console.log(data)
    const { bookName,image,author,
        category,publisher,rating,
        review,tags,
        yearOfPublishing
        


        
    }=signlebook
  return (
    <div>
       <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
    <img className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-12'>
    {
        tags.map(tag=><button className='btn'>{tag}</button>)
    }
    </div>
    <h2 className="card-title">
          {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p className=' text-xl'>Publish by: {publisher}</p>
     <div className='border-t-2 border-dashed border-blue-400'></div>
    <div className="card-actions justify-end">
        <Link to={`/booksdetails/${signlebook.bookId}`}> <button className='btn-primary btn'>Book Details</button></Link>
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline"><FaStar size={20} className=' text-red-400' />{rating}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Book
