import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import logo from '../../images/Logo.png'


const Logo = () => {
  return (
    <div className="item-center mr-0">
       <Link to="/" >
      <img className="md:w-20 w-[50px] p-2 md:p-2 transition ease-in-out delay-150  hover:scale-110 duration-300 " src= {logo} />
    </Link>
    </div>
    
  );
};

export default Logo;
