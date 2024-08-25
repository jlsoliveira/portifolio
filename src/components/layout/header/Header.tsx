"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Burger } from "@/icons";
import Image from "next/image";
import style from "./Header.module.css";
import { useWindowWidth } from "@/hook";

export function Header() {
  const [openBurger, setOpenBurger] = useState(true);
  const [scrolled, setScrolled] = useState(true);
  const pathname = usePathname();
  const windowWidth = useWindowWidth();
  const isHomePage = pathname === "/";

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const router = useRouter();

  const handleScrollLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string,
  ) => {
    e.preventDefault();

    router.push("/");

    const section = document.getElementById(sectionId);

    if (windowWidth <= 1024) {
      setOpenBurger(false);
    }
    if (section) {
      const elementRect = section.getBoundingClientRect();
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const elementTop = elementRect.top + scrollTop;

      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });

      history.pushState(null, "", window.location.pathname);
    }
  };

  function handleBurger() {
    if (windowWidth <= 1024) {
      setOpenBurger(!openBurger);
    }
  }

  useEffect(() => {
    if (windowWidth < 1024) {
      setOpenBurger(false);
    } else {
      setOpenBurger(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth]);

  return (
    <header
      className={`${style.header} ${scrolled ? "bg-primary-100" : ""} ${!isHomePage ? "bg-primary-100" : ""}`}
    >
      <div className={style.header_container}>
        <div className={style.header_container_logo}>
          <a href="#home" onClick={(e) => handleScrollLink(e, "home")}>
            <Image
              src="/logo.svg"
              alt="Hannal_Liz logo"
              width={180}
              height={37}
              priority
            />
          </a>
        </div>
        <button className={style.header_burger} onClick={() => handleBurger()}>
          <Burger />
        </button>
        {openBurger && (
          <div>
            <nav className={style.header_container_menu}>
              <button
                className={style.header_burger}
                onClick={() => handleBurger()}
              >
                X
              </button>
              <ul className={`${style.header_container_menu_ul}`}>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleScrollLink(e, "about")}
                    className={style.header_container_menu_link}
                  >
                    <span className={style.header_container_menu_link_span}>
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={(e) => handleScrollLink(e, "skills")}
                    className={style.header_container_menu_link}
                  >
                    <span className={style.header_container_menu_link_span}>
                      Skills
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    onClick={(e) => handleScrollLink(e, "experience")}
                    className={style.header_container_menu_link}
                  >
                    <span className={style.header_container_menu_link_span}>
                      Experience
                    </span>
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#projects"
                    onClick={(e) => handleScrollLink(e, 'projects')}
                    className={style.header_container_menu_link}
                  >
                    <span className={style.header_container_menu_link_span}>Projects</span>
                  </a>
                </li> */}
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollLink(e, "contact")}
                    className={style.header_container_menu_link}
                  >
                    <span className={style.header_container_menu_link_span}>
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className={style.header_overlay}></div>
          </div>
        )}
      </div>
    </header>
  );
}
