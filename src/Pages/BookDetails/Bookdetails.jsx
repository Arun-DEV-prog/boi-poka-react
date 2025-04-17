import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const Bookdetails = () => {
     const {id}=useParams();
     const bid=parseInt(id)
    const data=useLoaderData();
   const singBook=data.find(book=>book.bookId===bid);
   const { bookName,image,author,
    category,publisher,rating,
    review,tags,
    yearOfPublishing
    


    
}=singBook;
       
  return (
    <div className=' w-[300px] mx-auto p-4 bg-gray-100 m-4 shadow-lg rounded-lg'>
       <img className='w-[400px] h-[350px] rounded-lg ' src={image} alt="" />
       <h5 className='text-xl text-center mt-3'>{bookName}</h5>
       <div className=' w-[200px] m-2 mx-auto flex justify-between'>
       <button className='btn btn-accent '>Read</button>
       <button className='btn btn-info '>Whitlist</button>
       </div>
    </div>
  )
}

export default Bookdetails
