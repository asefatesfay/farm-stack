
import Link from "next/link";
import Image from "next/image"
import Links from "./links/Links";
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className = {styles.logo} href="/">
        <Image src="/logo-4.jpg" width={50} height={50} alt="logo" className={styles.logo} />
      </Link>
      <Links />
    </div>
  );
};

export default Navbar