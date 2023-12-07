"use client";
import Link from "next/link";

import React, { useState } from "react";


export default function NavBar() {

  return (
    <>
      <nav className="">
        <div className="flex items-center justify-between px-4 py-2">
          <img
            src="/itchii-logo.png"
            className="desktop:w-32 desktop:h-32 laptop:w-24 laptop:h-24"
            height="50"
            width="50"
            alt=""
          />

          <Link href="/" className="no-underline text-primary font-semibold">
            <h1 className="text-2xl desktop:text-6xl laptop:text-5xl desktop:px-64 text-primary">
              ITCHIIPASS
            </h1>
          </Link>
          <img
            src="/tecnm-logo.png"
            className="desktop:w-32 desktop:h-32 laptop:w-24 laptop:h-24"
            height="50"
            width="50"
            alt=""
          />
        </div>
      </nav>
    </>
  );
}
