import React, {useState, useEffect} from "react";

export default function LoginButton({ onClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return()=>{
      window.removeEventListener('resize', checkWindowSize);
    };
  },[]);

  return (
    <>
      <div className="max-sm:">
        <button
          className="bg-neutralbtn hover:bg-successbtn text-white font-bold flex justify-center my-5 mx-4 p-3 rounded-3xl text-lg"
          onClick={onClick}
        >
        {isMobile ?(

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="roun w-8 h-8 stroke-primary bg-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        ) : (
          "Inicio de sesión"
        )
        }
        </button>
      </div>
    </>
  );
}