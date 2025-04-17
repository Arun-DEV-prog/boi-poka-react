import React, { Suspense, useEffect, useState } from 'react'
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allbooks,setAllbooks]=useState([]);

    // useEffect(()=>{
    //   fetch('booksData.json')
    //   .then(res=>res.json())
    //   .then(data=>setAllbooks(data))
    // },[])

    // const bookPromise=fetch('./booksData.json').then(res=>res.json())
  return (
    <div className=''>
       <h1 className=' text-3xl text-center p-6 '>Books</h1>
       <Suspense fallback={<span>Loading...</span>}>
               <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7   '>
               {
                data.map((signlebook)=><Book key={signlebook.bookId} signlebook={signlebook} ></Book>)
               }
               </div>
       </Suspense>
    </div>
  )
}

export default Books
