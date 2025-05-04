"use client";
import Link from "next/link";
import styles from "./HideLink.module.css";
import { useState } from "react";

function HideLink({ height, width, top, left, href, title }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={href}
      className={styles.squareOption}
      style={{
        background: "transparent",
        position: "absolute",
        height: height,
        width: width,
        top: top,
        left: left,
      }}
    >
      {hover && <div className={styles.banner}>{title}</div>}
    </Link>
  );
}

export default HideLink;
