import React from "react";
import Head from "next/head";
import styles from '../styles/Home.module.css';
import Menu from '../componentes/Menu';

const Home: React.FC = () => {
    return (
        <>
            <Menu />

            <div className="container-fluid mb-2">
                <Head>
                    <title>Loja Next</title>
                </Head>

                <main className={styles.container}>

                    <h1 className={styles.title}>Página Inicial</h1>
                </main>
            </div>
        </>
    );
};

export default Home;
