//after installing raect in our code after that we import our file 
import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {}, "Hello World From React JS");
// //root at uper side so we declare in react to know them
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //append that
// root.render(heading);

//after giving parameter object
// const heading = React.createElement("h1", {id:"heading", XYZ :"abc"}, "Hello World From React JS");

//real function component


// const parent = React.createElement(
//     "div", 
//     { id: "parent" },
//         React.createElement(
//             "div", 
//             { id: "child" }, 
//                  [React.createElement("h1", {}, "I'm in h1 tag again"),
//                  React.createElement("h1", {}, "I'm an h1 tag")]

//                         )       );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);

  // by using jsx and create heading tag
// const JSXHeading = <h1 id ="heading">NAMASTE REACT using JSX</h1>;

// root at uper side so we declare in react to know them
// const root = ReactDOM.createRoot(document.getElementById("root"));
// append that
// root.render(JSXHeading);

//by using functional component

    //react element
    // const f1 = (
    //     <h1 className  = "head">
    //         namste react using JSX
    //     </h1>
    // );

    // react function component
    // const Headingf1 = () => {
    //     return <h1>namaste react using function componrent</h1>
    // };
    // const Headingf2 = () => (
    //   <h1>namaste react using function componrent</h1>
    //   );
    //   const root = ReactDOM.createRoot(document.getElementById("root"));
    //   root.render(<Headingf2/>);
    
    //component composition
    const Title = () => (
      <h1> namste react in title</h1>
    );
    const HeadingComponent =  () =>
    (
      <div>
        <Title/>
        <h1> namste react in HeadingCOmponent</h1>
      </div>
    );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent/>)
    

