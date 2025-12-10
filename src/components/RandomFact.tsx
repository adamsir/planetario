"use client";
import { useAppContext } from "@/contexts/AppContext";
import { useMemo, useState } from "react";

export function RandomFact() {
  const { planets } = useAppContext();
  const [randomIndex] = useState(() =>
    Math.floor(Math.random() * planets.length),
  );
  const randomPlanet = useMemo(
    () => planets[randomIndex],
    [planets, randomIndex],
  );
  return (
    <div className="random-fact">
      <h2>Did you know that?</h2>
      <p>
        The planet {randomPlanet.name} has {randomPlanet.terrain} terrain.
      </p>
    </div>
  );
}
