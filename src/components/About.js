import { LOGO_URL } from "../../utils/constants";
import img1 from '../../images/Logo.png'

const About = () => {
  return (
    <div className="container-md py-16  text-center min-h-[80vh] ">
      <div className="bg-white py-2 items-center rounded-t-2xl shadow-2xl dark:border dark:border-gray-700 dark:bg-[#222B45]">
        <img src={img1} className="w-24 max-w-[480px] mx-auto rounded-lg" />
      </div>

      <div className=" mx-auto bg-appTheme py-4 px-6 rounded-b-2xl shadow-2xl space-y-4 md:text-base text-s text-center items-center">
        <h1 className="text-3xl mb-2 font-bold">BiteBox</h1>

        <p>
          <span className="text-btnTheme font-semibold">BiteBox</span> is a food
          ordering application built with React.js, Swiggy’s live API &
          Tailwind CSS.The application provides users with real-time access to
          Swiggy’s live restaurant data, enabling them to explore a variety of
          restaurants and their details seamlessly
        </p>
        <p>
          <span className="text-btnTheme font-semibold">Tech Stack used :</span>{" "}
          React.js, parcel, Redux-toolkit, Jest(testing) & Tailwind CSS.
        </p>
        <p>
          <p>
            <span className="text-btnTheme font-semibold">Key Features :</span>{" "}
            Live Swiggy Data Integration, Higher Order Component, Shimmer UI,
            Lazy Loading, Testing, Cart Functionality & Responsive Design.
          </p>
          <p className="my-4"> 
            <span className="text-btnTheme font-semibold">Upcoming Features :</span>{" "}
            Location based Restaurants suggestion, Authentication, Payment Gateway & many more...</p>
          <p className="my-4">
            <a
              className="text-btnTheme font-semibold  p-2 rounded-lg  bg-white hover:bg-btnTheme hover:text-white"
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
