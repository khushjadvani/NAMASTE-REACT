// Title component for display logo
/* <a href="/">: This is an HTML-like tag represented in JSX.
 It creates an anchor (<a>) element with a href attribute set to "/", which typically represents the root of a website */
//  he alt attribute provides alternative text for the image, useful for accessibility and if the image fails to load.

import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_URL} />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // let btnName = "log in";
  const [btnNameReact, setbtnNameReact] = useState("log In");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser)

  return (

    // <div className = "text-5xl underline">
    //   hello world
    // </div>


 

    //?Header
    <div className=" flex justify-between bg-gray-900 text-white ">
      {/* <Title /> */}
      <div className="logo-container">
        <a href="/">
          <img className="logo w-56" src={LOGO_URL} />
        </a>
      </div>
      <div className="nav-items flex m-10 p-1">
        <ul className=" flex justify-between items-center p-4 mr-9  cursor-pointer ">
          <li className="onlineStatus mr-10  ">
            Online Status :{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="home mr-5" >
            <Link to="/"> Home </Link>
          </li>
          <li className="about  mr-5 ">
            <Link to="/About"> About </Link>
          </li>
          <li className="contact mr-5" >
            <Link to="/Contact"> Contact Us </Link>
          </li>
          <li className="grocery mr-5">
            <Link to="/Grocery"> Grocery </Link>
          </li>
          <li className="cart mr-5">
            <i className="fa-solid fa-cart-shopping m-2 text-xl "></i>
            cart
          </li>
          <li>
            <button
              className="login-btn border-2 rounded-full p-1 m-1"
              onClick={() => {
                if (btnNameReact === "log In") setbtnNameReact("log out");
                else setbtnNameReact("log In");
                // console.log(setbtnNameReact);
              }}
            >
              <image className="login-logo m-2 text-xl w-4 h-4">
                <i class="fa-solid fa-right-to-bracket"></i>
              </image>

              {btnNameReact}


            </button>
          </li>
          <li>
          {loggedInUser}
          </li>
        </ul>
      </div>
    </div>

    
  );
};

export default Header;
