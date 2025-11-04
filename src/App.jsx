import React from 'react'
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
]);
  return (
    <main>
      <Header/>
      <RouterProvider router={router} />
    </main>
  )
}

export default App