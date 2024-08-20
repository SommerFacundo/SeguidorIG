import React,{useEffect, useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import styles from "./NavbarMobile.module.css"
export function NavbarMobile(){
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className={styles.navbarContain}>
            <div className={styles.navbar}>
                <div className={styles.navbarTitle}>
                    <a href="#">Analytics_<span>IG</span></a>
                </div>
                <div className={styles.navbarBurger}>
                    {showMenu ? 
                    <IoMdClose onClick={()=>setShowMenu(!showMenu)} />
                        :
                    <RxHamburgerMenu onClick={()=>setShowMenu(!showMenu)}/>
                    }
                    
                </div>

            </div>
            {showMenu && 
            <div className={styles.subMenuNavbar}>
                <ul className={styles.subMenuNavbar_ul}>
                    <li>Inicio</li>
                    <li>Quien me dejo de seguir</li>
                    <li>Como funciona?</li>
                    <li>Contacto</li>
                </ul>
            </div>          
            }
        </nav>
    )

}