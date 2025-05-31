import Image from "next/image";
import styles from "./page.module.css";
import Greeting from "@/app/ui/greeting";
import Navbar from "@/app/ui/navBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Greeting />
      <Navbar />
     </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
