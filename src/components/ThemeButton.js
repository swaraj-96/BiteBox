import React, { useEffect, useState } from "react";

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
    <div>
      <button
        className="bg-black text-white p-2 rounded-md dark:bg-white dark:text-black"
        onClick={ () => {
            setDarkMode(!darkMode)
        }}
      >
        {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeButton;
