import Header from "../components/Header";
import type { NextPage } from "next";
import Head from 'next/head'

const Cart: NextPage = () => {
    return (
        <>
            <Head>
                <title>Carrinho</title>
                <meta name="description" content="Meu carrinho de compras" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <h1>
                    Carrinho
                </h1>
            </main>
        </>
    );
}

export default Cart