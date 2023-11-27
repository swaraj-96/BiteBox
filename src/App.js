import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

//this is for home page/parent route layout
const AppLayout = () => {
  //demonstration of demo authentication & how to used this value to update the context api value globally
  //through context.provider
  const [userName, setUserName] = useState();
  useEffect(() => {
    //make an demp API call and send username & password
    const data = {
      name: "Swaraj",
    };
    setUserName(data.name);
  }, []);

  return (
    //wrapped the whole component & update the default value of contextAPI using below provider syntax all over the app where it is being used
    // we can also pass a state function as a props to contextapi using provider to use it all over the app
    // privider is used to wrap our whole app and connect it to our central store with props value as our store name.
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app flex flex-col min-h-screen">
          <Header />
          <Outlet />
          <Footer/>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//this will route different component/page
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, //parent path
    children: [
      //children path of app layout
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//it will render approuter which consists path of all component through RouterProvider
//via react-router-dom library
root.render(<RouterProvider router={appRouter} />);
