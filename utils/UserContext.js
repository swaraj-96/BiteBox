import { createContext } from "react";

//creating contextAPI using createContext keyword
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;


