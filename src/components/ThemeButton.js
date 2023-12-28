import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect( () => {
        if(darkMode){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
       
    }, [darkMode])

   
  return (
    <>
    <label className='themeSwitcherTwo relative  cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={darkMode}
          onChange={() => {
            setDarkMode(!darkMode)
          }}
          className='sr-only w-6'
        />
        <span
          className={`slider mx-1 flex md:h-8 md:w-[60px] h-6 w-[40px] items-center rounded-full p-1 duration-200 ${
            darkMode ? 'bg-[#374151]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot md:h-6 md:w-6 h-3 w-3 rounded-full bg-white  duration-200 ${
              darkMode? 'md:translate-x-[28px] translate-x-[20px]' : ''
            }`}
          ></span>
        </span>
      </label>
    </>
    
    
  );
};

export default ThemeButton;
