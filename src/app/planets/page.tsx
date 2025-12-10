"use client";

import styles from "@/app/page.module.css";
import { PlanetsExplorer } from "@/components/PlanetsExplorer";
import { useAppContext } from "@/contexts/AppContext";

export default function Planets() {
  const { planets } = useAppContext();

  if (!planets) {
    return <div>No planets found</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PlanetsExplorer planets={planets} />
      </main>
    </div>
  );
}
