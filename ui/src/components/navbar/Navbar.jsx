
import Link from "next/link";
import Image from "next/image"
import Links from "./links/Links";
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className = {styles.logo} href="/">
        <Image src="/logo-6.jpg" fill alt="logo" className={styles.logo} />
      </Link>
      <Links />
    </div>
  );
};

export default Navbar