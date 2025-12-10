"use client";
import { useAppContext } from "@/contexts/AppContext";
import { useCallback, useState } from "react";
import styles from "@/app/page.module.css";

export function RandomFact() {
  const { planets } = useAppContext();
  const [index, setIndex] = useState(0);

  const randomIndex = useCallback(() => {
    return planets.length > 0 ? Math.floor(Math.random() * planets.length) : 0;
  }, [planets]);

  const randomizeIndex = useCallback(() => {
    setIndex(randomIndex());
  }, [randomIndex]);

  return (
    <div className={styles["random-fact"]}>
      <h2>Did you know,</h2>
      <p>
        that the planet <strong>{planets[index].name}</strong> has{" "}
        {planets[index].terrain} terrain?
      </p>
      <button className="ghost" onClick={randomizeIndex}>
        I&apos;m feeling lucky
      </button>
    </div>
  );
}
