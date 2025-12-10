import { type Planet } from "@/types/planets";

export async function getPlanets() {    
  const response = await fetch("https://swapi.info/api/planets");
  const data: Planet[] = await response.json();
  return data;
}