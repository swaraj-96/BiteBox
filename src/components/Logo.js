import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import img1 from '../../images/Logo.png'

const Logo = () => {
  return (
    <Link to="/" >
      <img className="md:w-20 w-16  p-2 items-center transition ease-in-out delay-150  hover:scale-110 duration-300 " src= {img1} />
    </Link>
  );
};

export default Logo;
