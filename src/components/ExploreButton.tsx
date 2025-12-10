"use client";

import { useAppContext } from "@/contexts/AppContext";
import { Button } from "./ui/Button";
import Image from "next/image";

export function ExploreButton() {
  const { planets } = useAppContext();
  return (
    <Button href="/planets">
      <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
      Explore {planets.length} planets
    </Button>
  );
}
