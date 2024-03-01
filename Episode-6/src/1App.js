   // ---------------------------EPISODE 6 ----------------------

import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/header";
import Footer from "./components/footer";

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <div className = "app">
      <Header/>,
      <Body/>,
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);