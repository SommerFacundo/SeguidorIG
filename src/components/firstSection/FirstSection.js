import React from "react";
import styles from "./FirstSection.module.css"
export function FirstSection({start,setStart}){
    return(
        <div className={styles.containFirstSection}>
              <div className={styles.fondoFirstSection}>
              </div>
              <div className={styles.firstSectionPrf}>
              <span>¿</span>QUIEN ME DEJÓ DE SEGUIR<span>?</span>
              </div>
              <div className={styles.btnIniciarFirstSection}>
                <button onClick={()=>setStart(true)}>INICIAR</button>
              </div>
              <div className={styles.waveFirstSection}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L20,74.7C40,117,80,203,120,224C160,245,200,203,240,165.3C280,128,320,96,360,101.3C400,107,440,149,480,170.7C520,192,560,192,600,165.3C640,139,680,85,720,69.3C760,53,800,75,840,80C880,85,920,75,960,80C1000,85,1040,107,1080,138.7C1120,171,1160,213,1200,224C1240,235,1280,213,1320,176C1360,139,1400,85,1420,58.7L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
              </div>
        </div>
    )
}