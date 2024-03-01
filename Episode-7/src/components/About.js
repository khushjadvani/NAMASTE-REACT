import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {

  constroctor(props){
    // console.log(props.Name +"parent constructor");
    
    Super(props);
  }

  componentDidMount(){
    // console.log("parent componentDidMount");

  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is About section</h2>
        {/* < User Name = {"khush (function)"}/> */}

        <UserClass  Name = {"khush (class) "} location = {"gujrat (class)"} />
        {/* <UserClass  Name = {"1st (class) "} location = {"gujrat (class)"} />
        <UserClass  Name = {"2nd (class) "} location = {"gujrat (class)"} /> */}

      </div>
    );
    
  }
}


//it is about written using an functinal component
// const About = () => {
//     return (
//       <div>
//         <h1>About Us</h1>
//         <h2>This is About section</h2>
//         < User Name = {"khush (function)"}/>

//         <UserClass  Name = {"khush (class) "} location = {"gujrat (class)"} />
//         <UserClass  Name = {"1st (class) "} location = {"gujrat (class)"} />
//         <UserClass  Name = {"2nd (class) "} location = {"gujrat (class)"} />

//       </div>
//     );
//   };
  
  export default About;

    // parent render 
   
    // 1st (class) constructor
    // 1st (class) render
    
    // 2nd (class) constructor
    // 2nd (class) render
   
    // 1st (class) componentDidMount
    // 2nd (class) componentDidMount
    // parent componentDidMount
    
