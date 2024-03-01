import React from "react";
// import { Component } from "react";

class UserClass extends React.Component {
  //fetch data from about by constructor
  constructor(props) {
    super(props);

    // console.log(this.props.Name + "constructor");
    //this is for count
    // this.state = {
    //   count: 0,
    //   // count2  : 2
    // };

    //this is for fetch API
    this.state =  {
      UserInfo : {
        Name : "dummy" ,
        location : "default",
        avtar_url : "http://dummy-photo.com",
      },
    };

  }
  //ttps://api.github.com/users/khushjadvani
  // now time to commit phase
  //to fetch an API prifixe is async
  async componentDidMount() {
    console.log(this.props.Name + "componentDidMount");

    const data = await fetch("https://api.github.com/users/khushjadvani");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo : json ,
    })
  }

  render() {
    //to redeadable form data use we do this
    //instead of writing this.props.name

    // const { Name, location } = this.props;

    //to destructur our count to state
    // const { count, count2 } = this.state;

    // console.log(Name + "render");
    const { Name, location , avtar_url } = this.state.UserInfo;

    const { userInfo, setuserInfo } = this.state;

    return (
      <div className="usre-card">
        {/* <h1> count : {count}</h1> */}
        {/* <button
          className="c_btn"
          onClick={() => {
            //never update state variable directly

            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increased
        </button> */}
        {/* <h1> count2 : {count2}</h1> */}
        {/* console.log({Name} + "render"); */}

        <img src ={avtar_url} alt="avtar url"></img>
        <h2>Name: {Name}</h2>
        <h3> Location :{location}</h3>
        <h3>Contact : jadvanikhush32@gmail.com </h3>

      </div>
    );
  }
}

export default UserClass;



// ---Mounting---

// constructor( dummy)
// render( dummy)
//     <HTML call dummy
// component Did Mount 
//     <API call>
//     <this.setstate>-> state variable is upadated

// ----UPDATE----
//     render (api call)
//     <HTML(NEW API DATA)
//     component Did Mount
