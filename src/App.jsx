import React from "react";
import Header from "./Components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
