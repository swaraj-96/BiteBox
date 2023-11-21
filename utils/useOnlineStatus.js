import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //logic to check the internet status of the user only once so we use useEffect
  useEffect(() => {
    //using event listner
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //return the status as boolean value
  return onlineStatus;
};

export default useOnlineStatus;
