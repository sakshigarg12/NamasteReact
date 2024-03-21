import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderLayout from "./Components/Header";
import Body from "./Components/Body";
import Error from "./utils/error";
import Contact from "./Components/Contact-us";
import RestaurantMenu from "./Components/Restaurant-menu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const About = lazy(() => import("./Components/About"));
const Grocery  = lazy(() => import("./Components/Grocery"));

//component where whole different components are added for making whole app layout
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderLayout />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
  element : <AppLayout />,
  children : [
    {
      path : "/",
    element : <Body />
    },
    {
      path : "/about",
    element : <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>
    },
    {
      path : "/Contact",
    element : <Contact />
    },
    {
      path :"/grocery",
      element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
    },
    {
      path : "/restaurants/:resId",
    element : <RestaurantMenu />
    },
  ],
  errorElement : <Error />,
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
