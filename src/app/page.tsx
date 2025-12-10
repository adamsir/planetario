import styles from "./page.module.css";
import { ExploreButton } from "@/components/ExploreButton";
import { RandomFact } from "@/components/RandomFact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>
            The best planet explorer on this planet{" "}
            <span className={styles.soon}> (Mars soon™)</span>
          </h1>
        </div>
        <div className={styles.ctas}>
          <ExploreButton />
        </div>
        <RandomFact />
      </main>
    </div>
  );
}
