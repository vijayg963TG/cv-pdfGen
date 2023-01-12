import React, { createContext, useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { Technology } from "../components/Technology";
import { Details } from "../components/Details";
import { BtnHeader } from "../components/BtnHeader";
import axios from "axios";
import { Loader } from "../components/Loader";

// export const ApiContext = createContext();

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [getID, setGetID] = useState(null);
  const URL = `https://pdf-creator-omega.vercel.app/api/getPdf/${getID}`;

  useEffect(() => {
    setGetID(localStorage.getItem("id") || "63bd45891ce32929371313d4");
    if (window !== undefined) {
      if(getID){
        axios(URL)
        .then((res) => setApiData(res.data.data))
        .catch((err) => console.error(err));
      }
    }
  }, [getID]);
  // console.log(getID ,"Check id")

  if (!apiData) {
    return <Loader />;
  }
  return (
    <>
      <Head>
        <title>CV App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ApiContext.Provider value={apiData}> */}
        <div className={styles.main}>
          <BtnHeader id={getID} />
          <div className="flex app">
            <Details {...apiData} />
            <Technology {...apiData} />
          </div>
          <Footer />
        </div>
      {/* </ApiContext.Provider> */}
    </>
  );
}
