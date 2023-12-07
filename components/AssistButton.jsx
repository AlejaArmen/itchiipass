"use client";
import React from "react";

export default function AssistButton({ onClick }) {
  return (
    <>
      <div className="bg-transparent">
        <button
          //Boton de inicio de sesión
          className="bg-neutralbtn hover:bg-deepNeutralbtn text-primary font-bold flex justify-center shadow-md shadow-background p-2 rounded-3xl text-lg border-none"
          onClick={onClick}
        >
        <p className="self-center laptop:text-2xl bg-transparent laptop:p-2 text-md">Asistencia</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="laptop:w-16 laptop:h-16 w-8 h-8 bg-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
