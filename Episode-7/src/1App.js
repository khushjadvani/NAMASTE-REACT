// ---------------------------EPISODE 7 ----------------------

import React, { lazy, Suspence } from "react";
import React, { useState , useEffect } from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
// import "../../Episode-4/1index.css"
// import Grosary from "./components/Grocery";
import UserContext from "./utils/userContext";

//to grocery : put in lazy tag
// const Grocery = lazy(() => import("./components/Grocery"));

// AppLayout component to show: Header, Body, Footer
//for showing  login dynamically
const AppLayout = () => {

  const [userName , setuserName] = useState();

  //authentication
  useEffect(() => {
    const data = {
      name: "khush jadvani",
    };

    setuserName(data.name);
  }, []);

  return (
    <UserContext.Provider value = { {loggedInUser : userName , setuserName}}>
      <div className="app">
        {/* <h1 class="text-8xl font-bold underline">Hello world!</h1> */}
        <Header />,
        <Outlet />,
        <Footer />
      </div>
    </UserContext.Provider>
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
      // {
      //   path: "/Grocery",
      //   element: (
      //     // <Suspence fallback={<h1>Loading...</h1>}>
      //     //   <Grocery />
      //     // </Suspence>
      //     <Grocery />
      //   ),
      // },
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
