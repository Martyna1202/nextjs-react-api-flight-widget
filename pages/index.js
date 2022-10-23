import Head from "next/head";
import styles from "../styles/Home.module.css";
import Table from "./Table";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flight widget</title>
        <meta
          name="description"
          content="Live flight widget app from TORONTO AIRPORT"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.departures}>
        <Table />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
