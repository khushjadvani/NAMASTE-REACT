
// Title component for display logo
/* <a href="/">: This is an HTML-like tag represented in JSX.
 It creates an anchor (<a>) element with a href attribute set to "/", which typically represents the root of a website */
//  he alt attribute provides alternative text for the image, useful for accessibility and if the image fails to load.

import { LOGO_URL } from "../utils/constant";


const Title = () => (
    <a href="/">
      <img className="logo" 
          src ={LOGO_URL} />
    </a>
  );
  
  // Header component for header section: Logo, Nav Items
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;