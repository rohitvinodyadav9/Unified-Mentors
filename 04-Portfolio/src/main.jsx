// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './LAyout.jsx'
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'
import Services from './Components/Services.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Hero/>} />
      <Route path='Skills' element={<Skills/>} />
      <Route path='Services' element={<Services/>} />
      <Route path='Project' element={<Project/>} />
      <Route path='Contact' element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)