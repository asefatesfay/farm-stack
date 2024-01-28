import Image from "next/image";
import styles from "./singlepost.module.css";
import PostUser from "@/components/postuser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Some went wrong we are fixing it");
//   }
//   return res.json();
// };
const SingleBlogPost = async ({ params }) => {
  // const post = await getData(params.slug);
  const post = await getPost(params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img}
          fill
          alt="Coffee"
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            alt="Avatar"
            src="https://images.pexels.com/photos/3747474/pexels-photo-3747474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading ...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.13.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
