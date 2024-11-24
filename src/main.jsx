import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about/About.jsx'
import Banner from './components/banner/Banner.jsx'
import AboutContaint from './components/about/AboutContaint.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/banner",
        element: <Banner />
      },
      
    ]
  },
  {
    path: "/about",
    element: <About />,
    children:[
      
    ]
    
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
