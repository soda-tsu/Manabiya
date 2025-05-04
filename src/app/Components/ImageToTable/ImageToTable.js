// components/ImageCellRenderer.tsx

"use client";
import Image from "next/image";

const ImageToTable = (params) => {
  // O valor da célula é acessado via params.value
  if (!params.value) return null;

  return (
    <Image
      src={params.value} // Valor da célula passado automaticamente
      width={230}
      height={322.5}
      style={{
        display: "block",
        objectFit: "contain",
        maxWidth: "100%",
        height: "auto",
      }}
      alt={`Capa: ${params.data.Nome || "Anime"}`}
    />
  );
};

export default ImageToTable;
