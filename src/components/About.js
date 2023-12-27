import { LOGO_URL } from "../../utils/constants";
import img1 from '../../images/Logo.png'

const About = () => {
  return (
    <div className="container-md py-16  text-center min-h-[80vh] ">
      <div className="bg-white py-2 items-center rounded-t-2xl shadow-2xl dark:border dark:border-gray-700 dark:bg-[#222B45]">
        <img src={LOGO_URL} className="w-24 max-w-[480px] mx-auto rounded-lg" />
      </div>

      <div className=" mx-auto bg-appTheme dark:bg-[#1E2836] py-4 px-6 rounded-b-2xl shadow-2xl space-y-4 md:text-base text-s text-center items-center dark:border dark:border-gray-700">
        <h1 className="text-3xl mb-2 font-bold dark:text-white ">BiteBox</h1>

        <p className="dark:text-slate-400">
          <span className="text-btnTheme font-semibold dark:text-[#3758F9]">
            BiteBox
          </span>{" "}
          is a food ordering application built with React.js, Swiggy’s live API
          & Tailwind CSS.The application provides users with real-time access to
          Swiggy’s live restaurant data, enabling them to explore a variety of
          restaurants and their details seamlessly.
        </p>
        <p className="dark:text-slate-400">
          <span className="text-btnTheme font-semibold dark:text-[#3758F9]">
            Tech Stack used :
          </span>{" "}
          React.js, parcel, Redux-toolkit, Jest(testing) & Tailwind CSS.
        </p>
        <p>
          <p className="dark:text-slate-400">
            <span className="text-btnTheme font-semibold dark:text-[#3758F9]">
              Key Features :
            </span>{" "}
            Live Swiggy Data Integration, Higher Order Component, Shimmer UI,
            Lazy Loading, Testing, Cart Functionality & Responsive Design.
          </p>
          <p className="my-4 dark:text-slate-400">
            <span className="text-btnTheme font-semibold dark:text-[#3758F9]">
              Upcoming Features :
            </span>{" "}
            Location based Restaurants suggestion, Authentication, Payment
            Gateway & many more...
          </p>
          <p className="my-4 dark:text-slate-400">
            <a
              className="text-btnTheme font-semibold  p-2 rounded-lg  bg-white hover:bg-btnTheme hover:text-white dark:bg-[#3758F9] dark:text-white dark:hover:bg-blue-800"
              href="https://github.com/swaraj-96/BiteBox/"
            >
              GitHub
            </a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
