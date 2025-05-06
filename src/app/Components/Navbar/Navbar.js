import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" className={styles.tittle}>
          {/* Manabya */}
          <Image
            src="/Logo.png"
            alt="Logo"
            width={268}
            height={85}
            className={styles.logo}
          />
        </Link>

        <ul>
          <li>
            <Link href="/midias">Mídias</Link>
          </li>
          <li>
            <Link href="/links">Links</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
