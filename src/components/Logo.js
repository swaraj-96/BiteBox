import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";


const Logo = () => {
  return (
    <div className="item-center mr-0">
       <Link to="/" >
      <img className="md:w-20 w-14  py-2 pr-2 md:p-2 transition ease-in-out delay-150  hover:scale-110 duration-300 " src= {LOGO_URL} />
    </Link>
    </div>
    
  );
};

export default Logo;
