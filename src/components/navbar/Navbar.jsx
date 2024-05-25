"use client";
import React from "react";
import logo from "../../assets/imgs/Logo.png";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container wrapper_header">
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>

          <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/category"}>Category</Link></li>
            <li><Link href={"/login"}>Register</Link></li>
            <li><button>Login</button></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
