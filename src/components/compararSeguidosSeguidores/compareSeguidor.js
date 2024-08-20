import React, { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { IoPersonCircleOutline } from "react-icons/io5";

import styles from "./compareSeguidor.module.css"
import { Pagination } from "../Pagination.js/Pagination";

export function CompareSeguidor({followers,following,showModal,noFollower,setNoFollowing,setShowModal}){
    const [currentPage, setCurrentPage] = useState(1);
    const [currenItem, setCurrentItem] = useState([])
    const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = noFollower.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcular el número total de páginas
  const totalPages = Math.ceil(noFollower.length / itemsPerPage);

    useEffect(()=>{
        let auxNotFollower = [];
        following.map((valor)=>{
            if(!followers.includes(valor)){
                auxNotFollower.push(valor);
            }
        })
        setNoFollowing(auxNotFollower)
    },[followers,following])
        if(showModal){
            return(
                    <>
                        <Modal show={showModal} onClose={()=>setShowModal(false)}>
                            <div className={styles.containListTitle}>
                                <h3>Lista de No Seguidores</h3>
                                <p>Total:<b>{noFollower.length}</b></p>
                            </div>
                            <div className={styles.containListNoFollows}>
                                <Pagination data={noFollower}/>

                            </div>
                        </Modal>
                    </>
                )
        }


}
