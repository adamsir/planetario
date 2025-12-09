import Image from "next/image";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function Planets() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Mars</h1>
      </main>
    </div>
  );
}
