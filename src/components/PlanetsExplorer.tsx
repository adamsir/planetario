"use client";

import { useMemo } from "react";
import { Planet } from "@/types/planets";
import { Pagination } from "./ui/Pagination";

type PlanetsExplorerProps = {
  planets: Planet[];
  currentPage: number;
};

export function PlanetsExplorer({
  planets,
  currentPage = 1,
}: PlanetsExplorerProps) {
  const itemsPerPage = 10;
  const planetsPage = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return planets.slice(startIndex, endIndex);
  }, [planets, currentPage, itemsPerPage]);

  return (
    <div className="explorer">
      <h1>Planets Explorer</h1>
      {planetsPage.map((planet) => (
        <div key={planet.name}>
          <h2>{planet.name}</h2>
          <p>{planet.terrain}</p>
        </div>
      ))}

      <Pagination
        page={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={planets.length}
      />
    </div>
  );
}
