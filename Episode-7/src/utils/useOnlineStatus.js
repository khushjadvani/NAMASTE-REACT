import { useState ,useEffect } from "react";

const useOnlineStatus = () => {

    //cheak online status
    //is boolean val

    const [onlineStatus, setOnlineStatus] = useState(true);


    useEffect (()=>{

        window.addEventListener("offline", () => {
           setOnlineStatus(false);
        });

        
        window.addEventListener("online", () => {
            setOnlineStatus(true);
         });

    },[]);
    return onlineStatus;
}

export default useOnlineStatus;