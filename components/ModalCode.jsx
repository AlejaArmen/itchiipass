import React from "react";
import Modal from "react-modal";
import Link from "next/link";

export default function CodeModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="rounded-3xl m-8 bg-primary p-8 desktop:mx-96 mt-24 laptop:mx-36 shadow-xl border-none shadow-deepGray"
    >
      {/*Formulario de inicio de sesión*/}
      <form className="flex flex-col items-center bg-transparent gap-2 laptop:gap-0">
        <h1 className="bg-transparent text-deepGray pb-8 laptop:pb-4 text-center">
          Validar asistencia
        </h1>
        {/*Correo*/}
        <label
          htmlFor=""
          className="bg-transparent text-2xl text-deepGray pb-4"
        >
          Ingrese el código del evento
        </label>
        <div className="bg-transparent flex flex-col">
          <input
            type="email"
            name="email"
            className="p-4 desktop:w-96 text-center laptop:w-80 laptop:px-0 text-xl rounded-2xl text-primary border-none"
            placeholder="Código"
          />
          <button className="bg-deepNeutralbtn hover:bg-hoverColor w-24 p-4 rounded-3xl border-none self-center mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 bg-transparent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-8 text-lg rounded-3xl p-3 border-none hover:bg-failed"
        >
          Cerrar
        </button>
      </form>
    </Modal>
  );
}
