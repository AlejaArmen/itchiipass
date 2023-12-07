"use client";
import Link from "next/link";
import LoginButton from "@/components/LoginButton";
import React, { useState } from "react";
import LoginModal from "@/components/LoginModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal abierto");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        {/*Pagina de inicio*/}
        <h2 className="text-6xl pt-10 flex ml-8 font-semibold bg-transparent">
          Bienvenidos Bisontes
        </h2>
        <p className="text-xl pb-4 text-center">A su plataforma de confianza para los eventos del tec ll. </p>
        <div className="w-auto h-auto p-6 bg-primary rounded-3xl flex flex-col items-center justify-center">
          <p className="bg-transparent text-deepGray font-bold p-4 text-4xl">Inicia sesión</p>
          <p className="bg-transparent pb-4 text-5xl">🚀</p>
          <LoginButton className="bg-trasparent" onClick={openModal} />
          <LoginModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
      </div>
    </>
  );
}
