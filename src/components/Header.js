import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [authButton, setAuthButton] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //acesssing the contextAPI value through useContext keyword
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between sm:bg-white shadow-xl bg-yellow-50 items-center px-4 sticky top-0 z-40">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold">
            Online Status : {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 font-bold">
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link style={{ textDecoration: "none" }} to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4 font-bold">
            <Link style={{ textDecoration: "none" }} to="/cart">
              Cart - ({cartItems.length})
            </Link>
          </li>
          <button
            className="login-btn font-bold"
            onClick={() => {
              //ternary operator
              authButton == "Login"
                ? setAuthButton("Logout")
                : setAuthButton("Login");
            }}
          >
            {authButton}
          </button>
          {/* use of contextAPI all over the component a/c to the demand */}
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
