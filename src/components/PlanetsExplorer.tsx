"use client";

import { Planet } from "@/types/planets";

type PlanetsExplorerProps = {
  planets: Planet[];
};

export function PlanetsExplorer({ planets }: PlanetsExplorerProps) {
  return (
    <div>
      <h1>Planets Explorer</h1>
      {planets.map((planet) => (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
          <p>{planet.terrain}</p>
        </div>
      ))}
    </div>
  );
}
