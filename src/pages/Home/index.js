import Posts from "json/posts.json";
import styles from "pages/Home/inicio.module.css";
import PostCard from "components/PostCard";

export default function Home() {
  return (
      <ul className={styles.posts}>
        {Posts.map((post) => <li key={post.id}><PostCard Post={post}/></li>)}
      </ul>
  );
}
