import styles from "./postuser.module.css";
import { getUser } from "@/lib/data";

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );
//   if (!res.ok) {
//     throw new Error("Some went wrong we are fixing it");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
//   const user = await getData(userId);
const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.name}>{user.name}</span>
    </div>
  );
};

export default PostUser;
