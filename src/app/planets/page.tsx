import styles from "@/app/page.module.css";
import { getPlanets } from "@/lib/data";

export default async function Planets() {
  const planets = await getPlanets();

  if (!planets) {
    return <div>No planets found</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Mars</h1>
        {planets.map((planet, index) => (
          <div key={index}>
            <h2>{planet.name}</h2>
            <p>{planet.terrain}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
