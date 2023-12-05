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
        <div className="">
          <div className="flex items-center justify-between px-4 py-2">
            <img
              src="/itchii-logo.png"
              className=""
              height="50"
              width="50"
              alt=""
            />
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="no-underline text-primary font-semibold"
              >
                <h1 className="text-2xl text-primary">ITCHIIPASS</h1>
              </Link>
            </div>
              <LoginButton className="bg-trasparent" onClick={openModal} />
              <LoginModal isOpen={isModalOpen} onClose={closeModal} />
              <img src="/tecnm-logo.png" className="" height="50" width="50" alt="" />

          </div>
        </div>
      </nav>
    </>
  );
}