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
    <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={darkMode}
          onChange={() => {
            setDarkMode(!darkMode)
          }}
          className='sr-only'
        />
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            darkMode ? 'bg-[#374151]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              darkMode? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
      </label>
    </>
    
    
  );
};

export default ThemeButton;
