import DefaultButton from "components/DefaultButton";
import styles from "components/PostCard/post.module.css";
import { Link } from "react-router-dom";

export default function PostCard(props) {

  return (
    <Link to={`/posts/${props.Post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${props.Post.id}/capa.png`}
          alt="imagem de capa do post"
        />
        <h2 className={styles.titulo}>{props.Post.titulo}</h2>
        <DefaultButton className={styles.botaoLer}>Ler</DefaultButton>
      </div>
    </Link>
  );
}
