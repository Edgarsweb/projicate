import Link from "next/link";
import React from "react";
import navStyles from "../styles/Nav.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
// import en from '../locales/en';
// import ru from '../locales/ru';
// import {
//   TwitterOutlined 
// } from "@ant-design/icons";
// import {coinPic} from "../public/coin.png"

const Nav = () => {
  const router = useRouter();
  const { locale } = router;
  // const t = locale === 'en' ? en : ru;
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
 
  const currentRoute = router.pathname;
  
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className={navStyles.header}>
      <nav className={navStyles.navbar}>
        <Link href="/">
          {/* <span className={navStyles.navLogo}>
            GELD<span className={navStyles.web}>COIN</span> */}
            <Image src="/projicate_logo.png" alt="Projicate Logo" width={132} height={132} />
          {/* </span> */}
        </Link>
        {/* </li> */}
        <ul
          className={
            isOpen === false
              ? navStyles.navMenu
              : navStyles.navMenu + " " + navStyles.active
          }
        >
  

         

          <li className={navStyles.navItem} onClick={openMenu}>
            <Link href="/">
            <span
                className={
                  currentRoute === "/"
                    ? navStyles.activeName
                    : navStyles.navItem
                }
              >
               About
                {/* {t.news} */}
              </span>
            </Link>
          </li>


          <li className={navStyles.navItem} onClick={openMenu}>
            <Link href="mailto:team.projicate@gmail.com">
            <span
                className={
                  currentRoute === "/contact"
                    ? navStyles.activeName
                    : navStyles.navItem
                }
              >
                {/* {t.contact} */}
                Contact
              </span>
            </Link>
          </li>
        </ul>

    
        {/* <a href="https://twitter.com/edgarsblog">
          <span>
            <span className={navStyles.navButton}><TwitterOutlined /></span>
          </span>
        </a> */}

        {/* <select 
            onChange={changeLanguage}
            defaultValue={locale}
            className={navStyles.check}
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="ru">RU</option>
          </select> */}

        <button
          className={
            isOpen === false
              ? navStyles.hamburger
              : navStyles.hamburger + " " + navStyles.active
          }
          onClick={openMenu}
        >
          <span className={navStyles.bar}></span>
          <span className={navStyles.bar}></span>
          <span className={navStyles.bar}></span>
        </button>

        
      </nav>
    </header>
  );
};

export default Nav;
