import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

const Logo = () => {
  return (
    <Link to="/">
      <img className="w-[80px]" src={LOGO_URL} />
    </Link>
  );
};

export default Logo;
