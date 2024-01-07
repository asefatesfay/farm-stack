import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src="https://images.pexels.com/photos/12693056/pexels-photo-12693056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About us" fill />
      </div>
    </div>
  );
};

export default AboutPage;
