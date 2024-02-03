// const heading = React.createElement("h1", {}, "Hello World From React JS");
// //root at uper side so we declare in react to know them
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //append that
// root.render(heading);

//after giving parameter object
// const heading = React.createElement("h1", {id:"heading", XYZ :"abc"}, "Hello World From React JS");
//root at uper side so we declare in react to know them
// const root = ReactDOM.createRoot(document.getElementById("root"));
//append that
// root.render(heading);

const parent = React.createElement(
    "div", 
    { id: "parent" },
        React.createElement(
            "div", 
            { id: "child" }, 
                 [React.createElement("h1", {}, "I'm an h1 tag"),
                 React.createElement("h1", {}, "I'm an h1 tag")]

                        )       );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);

  