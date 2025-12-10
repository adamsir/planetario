import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Planetario logo"
          width={190}
          height={60}
          priority
        />
      </Link>
    </header>
  );
}
