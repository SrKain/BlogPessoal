import styles from "./ModelPost.module.css";

export default function ModelPost(props) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${props.fotoCapa})` }}
      ></div>
      <h2 className={styles.titulo}>
        {props.titulo}
      </h2>
      <div className={styles.postConteudoContainer}> 
        {props.children}
      </div>
    </article>
  );
}
