import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Uitility/addToBD';
import Book from '../Book/Book';
const Readlist = () => {
    const[readList,setReadList]=useState([]);
    const[sort,setSort]=useState("");
     const data=useLoaderData();

     useEffect(()=>{
          const storbookdata=getStoredBook();
            const ConvertedStoreBook=storbookdata.map(bookId=>parseInt(bookId));
            const myReadList=data.filter(book=>ConvertedStoreBook.includes(book.bookId));
            setReadList(myReadList)
     },[data])

     const handleSort=(type)=>{
        setSort(type)
         if(type==='pages'){
             const sortBypage=[...readList].sort((a,b)=>a.totalPages-b.totalPages);
             setReadList(sortBypage)
             console.log(sortBypage)
         }
     }
  return (
     
    <div>
        <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort by:{sort ? sort: ""} </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('pages')}>Pages</a></li>
    <li><a onClick={()=>handleSort('Rating')}>Rating</a></li>
  </ul>
</div>
       <Tabs>
    <TabList>
      <Tab>ReadBookList</Tab>
      <Tab>My WhishList</Tab>
    </TabList>

    <TabPanel>
      <h2>Book I read: {readList.length}</h2>
       <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-5'>
       {
        readList.map(b=><Book key={b.bookId} signlebook={b}></Book>)
      }
       </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default Readlist
