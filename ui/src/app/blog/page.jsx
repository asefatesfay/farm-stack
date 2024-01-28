import { getPosts } from "@/lib/data";
import styles from "./blog.module.css";
import PostCard from "@/components/postcard/PostCard";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) {
//     throw new Error("Some went wrong we are fixing it");
//   }
//   return res.json();
// };
const BlogPage = async () => {
  const posts = await getPosts();
  const images = [
    "/post-1.jpg",
    "/post-2.jpg",
    "/post-3.jpg",
    "/post-4.jpg",
    "/coffee.jpg",
    "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        // const random = Math.floor(Math.random() * images.length);
        return (
          <div className={styles.post}>
            <PostCard post={post} key={post.id} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
