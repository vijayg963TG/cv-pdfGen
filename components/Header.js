import React from 'react'
import styles from "../styles/header.module.css";

export const Header = ({name,post}) => {
  return (
    <div className={styles.header}>
        <h1 className={styles.h1}>{name}</h1>
        <p className={styles.post}>{post}</p>
    </div>
  )
}
