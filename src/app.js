import React from "react";
import ReactDOM from "react-dom/client";
import HeaderLayout from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./utils/error";
import Contact from "./Components/Contact-us";
import RestaurantMenu from "./Components/Restaurant-menu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
    element : <About />
    },
    {
      path : "/Contact",
    element : <Contact />
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
