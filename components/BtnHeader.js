import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";
import {FcGoogle} from "react-icons/fc"


export const BtnHeader = ({ id }) => {
  // console.log(id)
  const [loading, setloading] = useState(true);

  // const handleDelete = () => {
  //   if("63bd0c874abf48ced5b1cfbe"){
  //     console.log("Default Data", id);
  //   }else{
  //     console.log("else Data", id);
  //     axios
  //     .delete(`https://pdf-creator-omega.vercel.app/api/deletPdf/${id}`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  //   }
  // };

  function print() {
    window.print();
  }

  const downloadPdf = () => {
    setloading(false);
    setTimeout(print, 500);
    setTimeout(() => setloading(true), 2500);
  };

  if (loading)
    return (
      <div className={styles.mainHeader}>
        <Link href={"https://pdf-creator-omega.vercel.app/auth/google"}>
          <button className="G-signin"><span>Sign in Using</span> <FcGoogle style={{fontSize:"1.5rem"}}/></button>
        </Link>
        <Link href={"/createCV"}>
          <button>Create CV</button>
        </Link>
        <button onClick={downloadPdf}>Download</button>
        {/* <Link href={"/createCV"}>
          <button onClick={handleDelete}>Delete CV</button>
        </Link> */}
        <Link href={"https://pdf-creator-omega.vercel.app/auth/logout"}>
          <button>Sign Out</button>
        </Link>
      </div>
    );
};
