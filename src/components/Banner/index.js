import styles from "./banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const back = useNavigate();
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <IoChevronBackCircle size={35} onClick={()=>{back(-1)}} />
          <h1 className={styles.titulo}>Hello, World!</h1>
          <p className={styles.paragrafo}>
            Boas vindas ao meu espaço pessoal! Sou Kauan Iasin, dev em
            front-end. Aqui você vai encontrar um pouco da minha jornada!
            Divirta-se.
          </p>
        </div>
        <div className={styles.imagens}>
          <img
            className={styles.circuloColorido}
            src={circuloColorido}
            aria-hidden={true}
          />
          <img
            className={styles.minhaFoto}
            src="https://github.com/srkain.png"
            alt="Foto do Kauan Iasin, dev em front-end"
          />
        </div>
      </div>
    </>
  );
}
