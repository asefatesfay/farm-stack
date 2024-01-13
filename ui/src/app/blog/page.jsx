import styles from "./blog.module.css";
import PostCard from "@/components/postcard/PostCard";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className ={styles.post} >
      <PostCard img="/post-1.jpg" title="The Joy of Books"/>
      </div>
      <div className ={styles.post} >
      <PostCard img="/post-2.jpg" title="The Joy of Reading"/>
      </div>
      <div className ={styles.post} >
      <PostCard img="/post-3.jpg" title="Coffee, the Good, the Bad and the Ugly"/>
      </div>
      <div className ={styles.post} >
      <PostCard img="/post-4.jpg" title="Why I still go to the Library"/>
      </div>
      <div className ={styles.post} >
      <PostCard img="/coffee.jpg" title="The Joy of Coffee"/>
      </div>
      <div className ={styles.post} >
      <PostCard img="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" title="Love of Coffee"/>
      </div>
    </div>
  );
};

export default BlogPage;
