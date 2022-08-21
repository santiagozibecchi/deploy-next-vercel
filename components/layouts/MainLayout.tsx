import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";
import NavBar from "../NavBar";
import styles from "./MainLayout.module.css";

// Un layout es un componente que reutilice todo lo que quiero
// que sea igual, en cada una de las pantallas
const MainLayout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <div className={styles.container}>
         <Head>
            <title>Contact - Santiago</title>
            <meta name="description" content="Contact Page" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <NavBar />

         <main className={styles.main}>{children}</main>
      </div>
   );
};

export default MainLayout;
