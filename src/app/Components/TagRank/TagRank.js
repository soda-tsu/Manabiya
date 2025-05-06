// components/ImageCellRenderer.tsx

"use client";

import Image from "next/image";
import styles from "./TagRank.module.css";

const TagRank = (params) => {
  if (!params.value) return null;

  let imageChoose;

  if (params.value === "01") {
    imageChoose = "/facil.jpg";
  } else if (params.value === "02") {
    imageChoose = "/normal.jpg";
  } else if (params.value === "03") {
    imageChoose = "/justo.jpg";
  } else if (params.value === "04") {
    imageChoose = "/tenso.jpg";
  } else if (params.value === "05") {
    imageChoose = "/brabo.jpg";
  } else if (params.value === "06") {
    imageChoose = "/fluente.jpg";
  } else if (params.value === "07") {
    imageChoose = "/shogun.jpg";
  } else if (params.value === "08") {
    imageChoose = "/kami.jpg";
  }

  return (
    <div
      className={styles.tagRank}
      style={{ backgroundImage: `url(${imageChoose})` }}
    />
  );
};

export default TagRank;
