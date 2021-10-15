import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CodeSharer</title>
        <meta name="description" content="Create codestuffs and thingies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>CodeSharer</h1>
        <div>
          <h3>Pages!</h3>
          <ul>
            <li>
              <Link href="/session/create">Create session</Link>
            </li>
            <li>
              <Link href="/session/add-code">Add code</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
