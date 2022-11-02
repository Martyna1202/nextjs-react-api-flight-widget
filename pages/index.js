import Head from "next/head";
import styles from "../styles/Home.module.css";
import Table from "../components/table/Table";
import axios from "axios";
import useSWR from "swr";
import { useEffect } from "react";

// Custome get flights hook
function useFlights(id) {
  const fetcher = (...args) =>
    axios.request(...args, {
      method: "GET",
    });

  const { data, error } = useSWR("/api/flights", fetcher, {
    refreshInterval: 10000,
  });
  return {
    flights: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Home() {
  const { flights, isError, isLoading } = useFlights();

  useEffect(() => {
    console.log(flights?.data);
  }, [flights]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{"Error: " + isError}</p>;
  if (flights.data < 1) return <p>No Data</p>;

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
        <Table data={flights.data} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
