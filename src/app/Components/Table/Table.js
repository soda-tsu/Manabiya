"use client";
import Image from "next/image";
import styles from "./Table.module.css";

function Table({ columns, objectContent }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {objectContent.map((item, index) => (
            <tr
              key={index}
              onClick={() =>
                window.open(item.href, "_blank", "noopener,noreferrer")
              }
            >
              {columns.map((column, index) => {
                if (column === "Capa") {
                  return (
                    <td
                      style={{
                        width: "215px",
                        padding: "0px",
                        maxHeight: "301px",
                      }}
                      key={index}
                    >
                      <Image
                        src={item[column]}
                        alt={item[column]}
                        width={215}
                        height={301}
                      />
                    </td>
                  );
                } else {
                  return <td key={index}>{item[column]}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
