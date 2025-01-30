import React, { useContext, useEffect, useState } from 'react';
import useInternetConnection from './hook/useInternetConnection';
import { ThemeContext } from './context/ThemeContext';
import { WebRouter } from './view/routes';

function App() {
  const {
    theme,
    colorPalette,
    defaultDark,
    defaultTheme,
  } = useContext(ThemeContext);

  const [isConnected, setIsConnected] = useState<boolean>(true)

  const isOnlineConnected = useInternetConnection();
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsConnected(window.navigator.onLine);
    }, 2000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div 
      className="kui-app"
      data-theme={defaultTheme === "default" ? (defaultDark ? "dark" : "light") : theme}
      data-palette={colorPalette}
    >
      <WebRouter/>
      {
        !isConnected ? (
          <div className={`kui-offline-alert`}>
            <strong>Vous n'êtes pas connecté à internet!!</strong>
            <p>Veuillez verifier l'etat de votre connexion à internet et <button type='button' onClick={() => window.location.reload()} style={{textDecoration: "underline"}}>réactualiser...</button></p>
          </div>
        ) : (
          !isOnlineConnected ? (
            <div className={`kui-offline-alert`}>
              <strong>Vous n'êtes pas connecté à internet!!</strong>
              <p>Veuillez verifier l'etat de votre connexion à internet et <button type='button' onClick={() => window.location.reload()} style={{textDecoration: "underline"}}>réactualiser...</button></p>
            </div>
          ) : null
        )
      }
    </div>
  );
}

export default App;
