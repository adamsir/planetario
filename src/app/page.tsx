import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planetario | The best planet explorer on this planet (Mars soon™)",
  description: "The best planet explorer on this planet (Mars soon™)",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Planetario logo"
          width={190}
          height={60}
          priority
        />
        <div className={styles.intro}>
          <h1>The best planet explorer on this planet (Mars soon™)</h1>
        </div>
        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/planets"
          >
            <Image
              className={styles.logo}
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Explore now
          </Link>
        </div>
      </main>
    </div>
  );
}
