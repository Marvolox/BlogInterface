import React from 'react';

//components
import Post from './Post'
import Home from './Home'
import Navbar from './assets/Navbar';
import RandomStuff from './RandomStuff';
import Animals from './Animals';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path='Home' element={< Home/>}/>
      <Route path="Post" element={<Post />} />
      <Route path='RandomStuff' element = {<RandomStuff/>}/>
      <Route path='Animals' element = {<Animals/>}/>
    </Route>
  )
);


function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
