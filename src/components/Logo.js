import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

const Logo = () => {
  return (
    <Link to="/">
      <img className="md:w-20 w-18  p-2 items-center" src={LOGO_URL} />
    </Link>
  );
};

export default Logo;
