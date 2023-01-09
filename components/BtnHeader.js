import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";
// import {PDFDownloadLink} from "@react-pdf/render"

export const BtnHeader = ({ id, children }) => {
  const [loading, setloading] = useState(true);
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/deletPdf/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  function print() {
    window.print();
  }

  const downloadPdf = () => {
    setloading(false);
    setTimeout(print, 2000);
    setTimeout(() => setloading(true), 4000);
  };
  if (loading)
    return (
      <div className={styles.mainHeader}>
        <Link href={"/createCV"}>
          <button>Create CV</button>
        </Link>
        <button onClick={downloadPdf}>Download</button>
        <Link href={"/createCV"}>
          <button onClick={handleDelete}>Delete CV</button>
        </Link>
      </div>
    );
};
