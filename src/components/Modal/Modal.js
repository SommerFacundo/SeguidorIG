import React from "react";
import styles from "./Modal.module.css"

export function Modal({show,onClose,children}){
    if(!show){
        return null;
    }
    return(
        <div className={styles.modal_backdrop}>
      <div className={styles.modal_content}>
        <button className={styles.modal_close} onClick={onClose}>X</button>
        <div className={styles.modal_body}>
          {children}
        </div>
      </div>
    </div>
    )
}