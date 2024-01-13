import Image from "next/image";
import styles from "./singlepost.module.css";
const SingleBlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1907071/pexels-photo-1907071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          alt="Coffee"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>The Joy of Coffee</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} alt="Avatar" src="https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Adonai Tesfay</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.13.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi unde quaerat soluta, enim consectetur doloremque odit, aut aperiam perspiciatis, obcaecati explicabo nesciunt nobis dolor voluptates vitae ipsam molestiae vel? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea omnis minima modi earum molestias velit nihil sunt, doloribus quae amet nemo, eaque, commodi aperiam id quo veniam enim porro natus!
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
