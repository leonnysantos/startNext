import type { NextPage } from "next";
import Head from 'next/head'

const Product: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nossos Produtos</title>
                <meta name="description" content="Conheça todos os nossos produtos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    Nossos Produtos
                </h1>
            </main>
        </>
    );
}

export default Product