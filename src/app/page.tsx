import Image from "next/image";
import styles from "./page.module.css";
import { ExploreButton } from "@/components/ExploreButton";

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
          <h1>
            The best planet explorer on this planet{" "}
            <span className={styles.soon}> (Mars soon™)</span>
          </h1>
        </div>
        <div className={styles.ctas}>
          <ExploreButton />
        </div>
      </main>
    </div>
  );
}
