import React, { useState,useEffect} from "react";
import styles from "./Navbar.module.css"
export function Navbar(){
    return(
        <>
            <nav className={styles.navbarContain}>
                <div className={styles.navbarTitle}><a href="#">Analytics_<span>IG</span></a></div>
                <div className={styles.navbar_subLinks}>
                    <div><a href="#">Inicio</a></div>
                    <div><a href="#">Quién te dejó de seguir</a></div>
                    <div><a href="#">Estadisticas</a></div>
                </div>
            </nav>
        </>
    )
}
