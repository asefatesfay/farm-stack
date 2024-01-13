import styles from "./postcard.module.css";
import Image from "next/image"
import Link from "next/link"
const PostCard = ({img, title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={img} alt="" className={styles.img} fill />
        </div>
        <span className={styles.date}>01.12.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, id sunt. Earum ea id non sapiente alias dolore, placeat doloremque sit quod fugit quia iure neque deleniti. Amet, quae placeat?</p>
        <Link href="/blog/post" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
