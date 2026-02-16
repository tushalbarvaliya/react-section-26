import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import logoImage from "@/public/images/logo.png";
import style from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image src={logoImage} alt="" priority />
          NextLevel Food
        </Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
