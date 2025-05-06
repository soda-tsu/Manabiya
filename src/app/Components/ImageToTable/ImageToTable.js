// components/ImageCellRenderer.tsx

"use client";

import styles from "./ImageToTable.module.css";

const ImageToTable = (params) => {
  // O valor da célula é acessado via params.value
  if (!params.value) return null;

  return (
    <div
      className={styles.imageToTable}
      style={{ backgroundImage: `url(${params.value})` }}
    ></div>
  );
};

export default ImageToTable;
