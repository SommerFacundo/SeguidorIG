import React,{useEffect, useState} from "react";
import styles from "./LoadArchiveSection.module.css"
import { MdOutlineUploadFile } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export function LoadArchiveSection({followings,setFollowings,followers,setFollowers,showModal,setShowModal}){
    const [cargaFinalizada, setCarga] = useState(false);
    const handleFileChange = (event) => {
      const files = event.target.files;
      const newFileContents = [];
      const newFollowings = [];
      const newFollowers = [];
      let filesProcessed = 0;
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onprogress = (event) => {
          if (event.lengthComputable) {
            const percentLoaded = Math.round((event.loaded / event.total) * 100);
            setProgressBar(percentLoaded);
          }
        };
  
        reader.onload = (e) => {
          const htmlString = e.target.result;
          newFileContents.push(htmlString);
  
          // Analizar el contenido HTML y extraer datos específicos
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, 'text/html');
  
          // Aquí seleccionamos el contenido de un div con un role específico
          const extractedDiv = doc.querySelector('div[role="main"]');
          const nameFollowingArray = file.name === "following.html" ? newFollowings : file.name === "followers_1.html" ? newFollowers : [];

          if (extractedDiv) {
            let divChildren = extractedDiv.children;
          for (let i = 0; i < divChildren.length; i++) {
            const anchor = divChildren[i].querySelector("a");
            if (anchor) {
              nameFollowingArray.push(anchor.innerHTML);
            }
          }
          }
          filesProcessed++;

          // Actualizamos el estado después de procesar todos los archivos
          if (filesProcessed === files.length) {
            setFollowings(newFollowings);
            setFollowers(newFollowers);
          }
        };
        reader.onloadend = (e)=>{
            setCarga(true);
        }
        reader.readAsText(file);
      });
     

    };
    return(
        <div className={styles.loadArchiveSection}>
          <div className={styles.loadArchiveSectionDiv1}>
            <div className={styles.sectionTextLoad}>
                <h3>Subir Archivos</h3><br></br>
                <p>
                following & followers_1
                </p>
            </div>
            <div className={styles.loadArchive}>
                <div className={styles.uploadArchivesBtn} name="uploadArchive" onClick={()=>{
                    document.getElementsByName("uploadArchiveInpt")[0].click()}
                    
                    
                    }>
                     {cargaFinalizada ? <FaCheckCircle className={styles.checkCharge}/> : <MdOutlineUploadFile/> } 
                     {cargaFinalizada ? <p className={styles.checkChargeText}>Archivo cargado correctamente</p> :                      <p className={styles.chargeIncomplete}>*following, followers_1*</p>
                    }

                <input type="file" multiple accept=".html" name="uploadArchiveInpt" className={styles.inputLoadArchive} onChange={handleFileChange}></input>
                </div>
    

                </div>

          </div>
          {cargaFinalizada &&
                <div className={styles.containBtnEstadisticas}>
                  <button onClick={()=>setShowModal(true)}>Resultados</button>
                </div>
          
          
          
          }
        </div> 
    )
}