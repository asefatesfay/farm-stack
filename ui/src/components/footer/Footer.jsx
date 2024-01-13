import styles from "./footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className={styles.container}>
       <Link className = {styles.logo} href="/">
        <Image src="/logo-6.jpg" fill alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.text}>
        Copyright © 2024 Creative insights, Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer