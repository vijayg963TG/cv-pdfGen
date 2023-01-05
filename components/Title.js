import React from 'react'
import styles from "../styles/title.module.css";

export const Title = ({title}) => {
  return (
    <div className={styles.title}>{title}</div>
  )
}
