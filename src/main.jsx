import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import About from "./Pages/About.jsx";
import NotFoundPage from "./Components/NotFoundPage.jsx";
import ProductList from "./Pages/ProductPage.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/products", element: <ProductList /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
