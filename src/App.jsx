import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Layout/LayOut'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminPage from './admin/AdminPage'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import CheckOut from './pages/CheckOut'
import PaymentSuccess from './pages/PaymentSuccess'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path:"/productdetails/:id",
           element:<ProductDetails /> 
        },
        {
          path: "/admin",
          element: <AdminPage />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/checkout",
          element: <CheckOut/>
        },
        {
          path: "/paymentsuccess",
          element: <PaymentSuccess/>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
