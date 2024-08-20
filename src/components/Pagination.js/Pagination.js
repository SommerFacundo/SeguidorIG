import React, { useState } from "react";
import styles from "./Pagination.module.css"
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export function Pagination({data,children}){
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
  
    // Calcular los datos que se deben mostrar en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    // Cambiar de página
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
  
    
}
const totalPages = Math.ceil(data.length / itemsPerPage);

return (
  <div>
    <ul className={styles.containList}>
      {currentItems.map((item, index) => (
        <li key={index}>
            <IoPersonCircleOutline/>
            <p>@{item}</p>
            <div>
                <a href={"https://www.instagram.com/" + item} target="_blank">Dejar de Seguir</a>
            </div>
        </li>
      ))}
    </ul>
    <div className={styles.pagination}>
        <FaCircleArrowLeft/>
      {Array.from({ length: totalPages }, (_, index) => (
        <button 
          key={index + 1} 
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    <FaCircleArrowRight/>
    </div>

  </div>
);
}

