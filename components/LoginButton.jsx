import React, { useState, useEffect } from "react";

export default function LoginButton({ onClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <>
      <div className="bg-transparent">
        <button
          //Boton de inicio de sesión
          className="bg-deepNeutralbtn hover:bg-hoverColor text-primary font-bold flex justify-center shadow-md shadow-background p-2 rounded-3xl text-lg border-none"
          onClick={onClick}
        >
          {isMobile ? (
            //Icono de inicio de sesión para dispositivos móviles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-16 h-16 stroke-primary bg-transparent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            //Icono de inicio de sesión para dispositivos de escritorio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-16 h-16 bg-transparent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
