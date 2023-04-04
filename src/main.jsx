import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import FoodDetails from './pages/FoodDetails/FoodDetails'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
        {
          path:"/",
          element:<Landing></Landing>,
          loader:()=> fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        },
        {
          path:"about",
          element:<About></About>
        },
        {
          path:"foodDetails/:foodId",
          element:<FoodDetails></FoodDetails>,

        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
