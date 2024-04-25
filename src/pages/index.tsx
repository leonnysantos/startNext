import Header from "../components/Header";
import type { NextPage } from "next";
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Página Inicial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, debitis quae? Enim dignissimos omnis minus inventore iure est unde quidem.
        </p>
      </main>
    </>
  );
}

export default Home