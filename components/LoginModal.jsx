import React from "react";
import Modal from "react-modal";
import Link from "next/link";

export default function LoginModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Iniciar sesión"
      className="rounded-3xl m-8 bg-primary p-8 desktop:mx-96 desktop:mt-24 shadow-xl border-none shadow-deepGray"
    >
      {/*Formulario de inicio de sesión*/}
      <form className="flex flex-col items-center bg-transparent gap-2">
        <h1 className="bg-transparent text-deepGray pb-8">Inicar sesión</h1>
        {/*Correo*/}
        <label htmlFor="" className="bg-transparent text-2xl text-deepGray">
          Correo institucional
        </label>
        <input
          type="email"
          name="email"
          className="p-4 desktop:w-96 desktop:text-center text-lg rounded-2xl text-primary border-none"
          placeholder="#Control@chihuahua2.tecnm.mx"
        />
        {/*Contraseña*/}
        <label htmlFor="" className="bg-transparent text-2xl mt-6 text-deepGray">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="Contraseña"
          className="desktop:w-96 desktop:text-center p-4 text-lg rounded-2xl border-none text-primary"
        />
        {/*Boton de inicio de sesión*/}
        <button
          type="submit"
          href="/"
          className="mt-4 p-4 text-2xl bg-neutralbtn hover:bg-deepNeutralbtn border-none shadow-md text-lightGray rounded-3xl"
        >
          Iniciar sesión
        </button>
        <hr className="my-6 w-full border-t-2 border-black" />
        {/*Texto para registro*/}
        <p className="flex flex-col items-center text-xl bg-transparent text-deepGray">
          ¿No tienes una cuenta?
          <br />
          <Link href="/registro"  className="text-background bg-transparent">
            Regístrate
          </Link>
        </p>

        <button
          onClick={onClose}
          className="m-5 text-2xl rounded-3xl p-4 border-none hover:bg-failed"
        >
          Cerrar
        </button>
      </form>
    </Modal>
  );
}
