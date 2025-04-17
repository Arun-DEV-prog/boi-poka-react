import React from 'react'
import {
    createBrowserRouter,
    
  } from "react-router";
import Root from '../Pages/Root/Root';
import Errorpage from '../Pages/Erropage/Errorpage';
import Home from '../Pages/Home/Home';
  

export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      ErrorBoundary:Errorpage,
      children:[
        {
            index:true,
            path:'/',
            Component:Home
        }
      ]
    },
  ]);
  