"use client"
import styles from "./navLink.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLink = ({item}) => {
 const pathName = usePathname();
 const isActive = pathName === item.path;
  return (
    <div className={`${styles.container} ${isActive&&styles.active}`}>
      <Link href={item.path}>{item.title}</Link>
    </div>
  );
};

export default NavLink;
