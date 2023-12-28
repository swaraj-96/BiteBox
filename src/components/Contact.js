import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="max-w-[768px] w-[90%] mx-auto py-16  min-h-[80vh] items-center">
      <div className="bg-white py-8 rounded-br-2xl shadow-2xl px-8 text-base dark:bg-[#1E2836] dark:border dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-slate-400">Hello,</p>
        <h1 className="text-2xl font-bold dark:text-white" data-testid='name'>I'm Swaraj Pradhan</h1>
        <p className="text-indigo-400 font-semibold">Frontend Developer</p>
        <div className="my-4">
          <h2 className="font-bold text-lg text-btnTheme dark:text-indigo-800">Contact Me</h2>
          <div className="flex mt-2 gap-2 items-center">
            <IoIosMail className="w-8 h-8 text-gray-700 dark:text-slate-400" />
            <p className="text-gray-500 text-base dark:text-slate-400">pswaraj96@gmail.com</p>
          </div>

          <div className="flex gap-6 items-center my-4">
            <a href="https://github.com/swaraj-96">
              <FaGithub className="w-8 h-8 text-gray-700 transition ease-in-out   hover:scale-110 duration-300 hover:-translate-y-1 hover:text-red-800 dark:text-red-800 dark:hover:text-indigo-800" />
            </a>
            <a href="https://www.linkedin.com/in/swaraj-pradhan-92b347173">
              <FaLinkedin className="w-8 h-8 text-gray-700 transition ease-in-out  hover:scale-110 duration-300 hover:-translate-y-1 hover:text-red-800 dark:text-red-800 dark:hover:text-indigo-800" />
            </a>
            <a href="https://twitter.com/swaraj_sj96">
              <FaXTwitter className="w-8 h-8 text-gray-700 transition ease-in-out   hover:scale-110 duration-300 hover:-translate-y-1 hover:text-red-800 dark:text-red-800 dark:hover:text-indigo-800" />
            </a>
            <a href="https://github.com/swaraj-96">
              <FaInstagram className="w-8 h-8 text-gray-700 transition ease-in-out   hover:scale-110 duration-300 hover:-translate-y-1 hover:text-red-800 dark:text-red-800 dark:hover:text-indigo-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
