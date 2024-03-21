import { useState } from "react";
import { LOGO_URL } from "../utils/Common";
import { Link } from "react-router-dom";

const HeaderLayout = () => {

  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login")
  // const onlineStatus = useOnlineStatus();
  
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items"> 
          <ul>
            {/* <li>online status : {onlineStatus}</li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderLayout;