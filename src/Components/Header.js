import { useState } from "react";
import { LOGO_URL } from "../utils/Common";
import { Link } from "react-router-dom";

const HeaderLayout = () => {

  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login")
  // const onlineStatus = useOnlineStatus();
  
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img className="w-32" src={LOGO_URL}></img>
        </div>
        <div className="nav-items"> 
          <ul className="flex p-6 m-2 items-center">
            {/* <li>online status : {onlineStatus}</li> */}
            <li className="px-6"><Link to="/">Home</Link></li>
            <li className="px-6"><Link to="/about">About us</Link></li>
            <li className="px-6"><Link to="/contact">Contact us</Link></li>
            <li className="px-6"><Link to="/grocery">Grocery</Link></li>
            <li className="px-6">Cart</li>
            <button className="login" onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default HeaderLayout;