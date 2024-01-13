import styles from "./footer.module.css"
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Insights
      </div>
      <div className={styles.text}>
        Copyright © 2024 Creative insights, Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer