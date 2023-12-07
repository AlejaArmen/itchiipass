import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Link from "next/link";

export default function CodeModal({ isOpen, onClose }) {
  const [codigoValido, setCodigoValido] = useState(false);
  const [codigoInvalido, setCodigoInvalido] = useState(false);

  const handleValidarAsistencia = () => {
    const codigoIngresado = document.getElementById("codigoEvento").value;
    const codigoEsValido = codigoIngresado === "12345"; // Cambia esta condición según tus necesidades

    setCodigoValido(codigoEsValido);
    setCodigoInvalido(!codigoEsValido);
  };

  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      timeoutId = setTimeout(() => {
        onClose();
        setCodigoValido(false);
        setCodigoInvalido(false);
      }, 9000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="rounded-3xl m-8 bg-primary p-8 desktop:mx-96 mt-24 laptop:mx-36 shadow-xl border-none shadow-deepGray"
    >
      {/* Formulario de validación de asistencia */}
      <div className="flex flex-col items-center bg-transparent gap-2 laptop:gap-0">
        <h1 className="bg-transparent text-deepGray pb-8 laptop:pb-4 text-center">
          Validar asistencia
        </h1>
        {/* Código del evento */}
        <label htmlFor="" className="bg-transparent text-2xl text-deepGray pb-4">
          Ingrese el código del evento
        </label>
        <div className="bg-transparent flex flex-col">
          <input
            id="codigoEvento"
            type="text"
            className="p-4 desktop:w-96 text-center laptop:w-80 laptop:px-0 text-xl rounded-2xl text-primary border-none"
            placeholder="Código"
          />
          <button
            onClick={handleValidarAsistencia}
            className="bg-deepNeutralbtn hover:bg-hoverColor w-24 p-4 rounded-3xl border-none self-center mt-4"
          >
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

        {/* Mensajes de validación */}
        {codigoValido && (
          <div className="bg-successbtn text-white p-4 rounded-2xl mt-4">
            Asistencia validada correctamente
          </div>
        )}

        {codigoInvalido && (
          <div className="bg-red text-white p-4 rounded-2xl mt-4">
            Código no válido. Intente nuevamente.
          </div>
        )}
      </div>
    </Modal>
  );
}
