"use client";
import React from "react";
import { links } from "@/app/utils/links";
import styles from "./page.module.css";

function Links() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Nome</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {links.map((item, index) => (
            <tr
              key={index}
              onClick={() =>
                window.open(item.href, "_blank", "noopener,noreferrer")
              }
            >
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Links;
