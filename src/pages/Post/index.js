import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import ModelPost from "components/ModelPost";
import Markdown from "react-markdown";
import "pages/Post/Post.css";
import NotFound from "pages/NotFound";
import Banner from "components/Banner";
import ForYou from "components/ForYou";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NotFound />;
  } else {
    return (
      <>
        <Banner />
        <ModelPost
          fotoCapa={`/assets/posts/${post.id}/capa.png`}
          titulo={post.titulo}
        >
          <div className="post-markdown-container">
            <Markdown>{post.texto}</Markdown>
          </div>

          <ForYou id={parametros.id} />
        </ModelPost>
      </>
    );
  }
}
