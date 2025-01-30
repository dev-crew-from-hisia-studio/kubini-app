import { useEffect, useState } from "react";

const useInternetConnection = () => {
    const [isConnected, setIsConnected] = useState<boolean>(true);
  
    useEffect(() => {
      const checkInternetConnection = async () => {
        try {
          await fetch('https://www.google.com', {
            method: 'HEAD',
            mode: 'no-cors',
          });
          setIsConnected(true);
        } catch (error) {
          setIsConnected(false);
        }
      };
  
      const intervalId = setInterval(() => {
        checkInternetConnection();
      }, 2000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return isConnected;
};
  
export default useInternetConnection;