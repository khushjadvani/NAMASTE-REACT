// ---------------------------EPISODE 7 ----------------------

import React, { lazy, Suspence } from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/ReastaurentMenu";
// import "../../Episode-4/1index.css"
// import Grosary from "./components/Grocery";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//to grocery : put in lazy tag
const Grocery = lazy(() => import("./components/Grocery"));
// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <div className="app">
      {/* <h1 class="text-8xl font-bold underline">Hello world!</h1> */}
      <Header />,
      <Outlet />,
      <Footer />
    </div>
  );
};

//some info that define what will happen in specifi route
const appRouter = createBrowserRouter([
  {
    path: "/",
    //loading
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          // <Suspence fallback={<h1>Loading...</h1>}>
          //   <Grocery />
          // </Suspence>
          <Grocery />
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
