"use client"
import Link from "next/link";
import LoginButton from "./LoginButton";
import React, { useState } from "react";
import LoginModal from "./LoginModal";

export default function NavBar() {
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
      <nav className="">
        <div className="flex justify-between">
          <div>
            <img src="/itchii-logo.png" className="w-32" alt="" />
          </div>
          <div className="self-center">
            <Link href="/" className="no-underline text-white justify-end">
              <h1 className="text-6xl">ITCHIIPASS</h1>
            </Link>
          </div>
          <div className="flex">
            <LoginButton className="self-center" onClick={openModal}/>
            <LoginModal isOpen={isModalOpen} onClose={closeModal}/>
            <img src="/tecnm-logo.png" className="w-32" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
