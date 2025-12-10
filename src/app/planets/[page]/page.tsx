"use client";
import { Suspense, use } from "react";
import styles from "@/app/page.module.css";
import { PlanetsExplorer } from "@/components/PlanetsExplorer";
import { useAppContext } from "@/contexts/AppContext";
import { Loading } from "@/components/ui/Loading";

export default function Planets({
  params,
}: {
  params: Promise<{ page: number }>;
}) {
  const page = use(params);
  const { planets } = useAppContext();

  if (!planets) {
    return <div>No planets found</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <PlanetsExplorer planets={planets} currentPage={Number(page.page)} />
        </Suspense>
      </main>
    </div>
  );
}
