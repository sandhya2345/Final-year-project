import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Services from './components/Services'
import Hospital from './components/Hospital'
import News from './components/News'
import PredictDisease from './components/PredictDisease'
import Signup from './components/Signup'


function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element:  <><Navbar/><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar/><Login/></>
    },

    {
      path: "/about",
      element:<><Navbar/><About/></>
    },

    {
      path: "/services",
      element:<><Navbar/><Services/></>
    },
    {
      path: "/hospital",
      element:<><Navbar/><Hospital/></>
    },

    {
      path: "/news",
      element:<><Navbar/><News/></>
    },

    {
      path: "/predict",
      element:<><Navbar/><PredictDisease/></>
    },

    {
      path: "/signin",
      element:<><Navbar/><Signup/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
