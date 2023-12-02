import React from "react";

export default function LoginButton({onClick}) {
  return (
    <>
      <button className="bg-neutralbtn hover:bg-successbtn text-white font-bold px-4 mr-4 my-8 rounded-3xl text-lg"
      onClick={onClick}>
        Iniciar sesión
      </button>
    </>
  );
}