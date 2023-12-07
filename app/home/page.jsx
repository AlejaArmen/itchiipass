"use client"
import CodeModal from "@/components/ModalCode";
import CardSlides from "@/components/SliderCards";
import AssistButton from "@/components/AssistButton";
import React, { useState } from "react";

export default function HomePage() {
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
      <div className="flex flex-col">
        <div className="flex items-center justify-center pt-4">
          <h1 className="px-8 text-5xl laptop:px-64">Eventos</h1>
          <AssistButton onClick={openModal} />
          <CodeModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <CardSlides/>
      </div>
    </>
  );
}
