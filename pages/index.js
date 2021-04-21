import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dino Smajovic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dino Smajovic</h1>
      </main>
    </div>
  );
};

export default Home;
