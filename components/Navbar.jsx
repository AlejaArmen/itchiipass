"use client";
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
        <div className="flex items-center justify-between px-4 py-2">
          <img
            src="/itchii-logo.png"
            className="desktop:w-32 desktop:h-32"
            height="50"
            width="50"
            alt=""
          />

          <Link href="/" className="no-underline text-primary font-semibold">
            <h1 className="text-2xl desktop:text-6xl desktop:px-64 text-primary">
              ITCHIIPASS
            </h1>
          </Link>

          <LoginButton className="bg-trasparent" onClick={openModal} />
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          <img
            src="/tecnm-logo.png"
            className="desktop:w-32 desktop:h-32"
            height="50"
            width="50"
            alt=""
          />
        </div>
      </nav>
    </>
  );
}
