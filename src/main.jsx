import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Characters from './components/Characters/Characters';
import Character from './components/Characters/Character';
import Spells from './components/Spells/Spells.jsx';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Nav/><Characters/><Footer/></>
  },
  {
    path: "/Characters/:id",
    element: <><Nav/><Character/><Footer/></>
  },
  {
    path: "Spells",
    element: <><Nav/><Spells/><Footer/></>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
