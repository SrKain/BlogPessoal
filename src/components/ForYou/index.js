import PostCard from "components/PostCard";
import posts from "json/posts.json";
import styles from "./ForYou.module.css";

export default function ForYou(props) {
  const fy = posts
    .filter((post) => post.id !== Number(props.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);
  return (
    <>
      <h2 className={styles.tituloOutrosPosts}>Você pode gostar também:</h2>
      <ul className={styles.postsRecomendados}>
        {fy.map((item) => (
          <li key={item.id}>
            <PostCard Post={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
