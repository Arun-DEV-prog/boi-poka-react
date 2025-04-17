import React from 'react'
import {
    createBrowserRouter,
    
  } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Erropage/Errorpage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Bookdetails from '../Pages/BookDetails/Bookdetails';
  

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      ErrorBoundary:Errorpage,
      children:[
        {
            index:true,
            loader:()=>fetch('booksData.json'),
            path:'/',
            Component:Home
        },
        {
            path:'/about',
            Component:About
        },
        {
            path:'/booksdetails/:id',
            loader:()=>fetch('booksData.json'),

            Component:Bookdetails
        }
      ]
    },
  ]);
  