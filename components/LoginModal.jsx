import React from "react";
import Modal from "react-modal";

export default function LoginModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Iniciar sesión"
    >
      <h1>Ventana de inicio de sesion</h1>
      <button onClick={onClose} className="m-5 text-3xl rounded-md hover:bg-failed">Cerrar</button>
    </Modal>
  );
}
