import React from "react";
import Header from "./Components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

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
