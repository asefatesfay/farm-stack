"use client";
import { useState } from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";

const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const isSession = false;
  const isAdmin = true;
  const admin = {
    title: "Admin",
    path: "/admin",
  };
  const login = {
    title: "Login",
    path: "/login",
  };

  return (
    <div styles={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {isSession ? (
          <>
            {isAdmin && <NavLink item={admin} key={admin.title} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={login} key={login.title} />
        )}
      </div>
      <button onClick={() => setOpen((prev) => !prev)} className={styles.menuItem}>Menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
