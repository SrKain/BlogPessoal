import ModelPost from "components/ModelPost";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./About.module.css";

export default function About() {
  return (
    <ModelPost fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou Kauan Iasin!</h3>
      <img
        src="https://github.com/srkain.png"
        alt="foto do dev Kauan Iasin"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        scelerisque lacus at nisi pellentesque semper. Donec vestibulum vitae
        urna a rhoncus. Etiam laoreet mi leo, non suscipit tortor pharetra eget.
        Nunc eu arcu at arcu dictum tincidunt. Aliquam suscipit volutpat diam,
        nec ultricies nulla auctor sed. Mauris non fringilla purus. Curabitur et
        justo feugiat, feugiat dui sed, pulvinar sem. Vivamus risus enim,
        eleifend commodo eleifend nec, iaculis at mi. In mi mi, vehicula id nisi
        porttitor, molestie aliquam purus. Donec dui urna, dignissim in
        imperdiet a, ornare eu tellus. Donec sodales gravida neque. Pellentesque
        iaculis egestas sapien non tempus. Proin eget tortor sit amet metus
        dictum sodales. Ut laoreet, neque nec tincidunt consectetur, orci lacus
        porta dui, ut malesuada lectus velit vitae est. Suspendisse tincidunt
        metus et enim interdum, sit amet placerat sem egestas. Vestibulum
        suscipit, odio in laoreet aliquet, risus massa egestas augue, finibus
        vulputate felis felis eu augue. Proin a vehicula ex. Nam a efficitur
        velit. Proin vehicula tincidunt nisi. Nulla facilisis odio vel nulla
        mattis, non pretium arcu hendrerit. Donec et fringilla lorem. Vivamus
        quis massa placerat, lobortis lacus nec, imperdiet felis. Aenean
        tincidunt at magna quis volutpat. Morbi ornare vestibulum purus.
      </p>
      <p className={styles.paragrafo}>
        Cras posuere, nisl a pharetra finibus, elit massa porttitor mauris, quis
        ullamcorper magna odio ac nisi. Nulla facilisi. Vivamus sed lobortis
        nibh. Nullam faucibus nec ipsum vel mollis. Nunc fringilla justo non
        eleifend laoreet. Nullam molestie bibendum augue, sit amet convallis
        sapien fringilla eu. Cras dui ante, luctus a nibh vel, porta gravida
        elit. Pellentesque non scelerisque nisi. Duis odio urna, venenatis ut
        nisl sed, interdum volutpat magna. Vivamus ultricies metus non sapien
        gravida finibus sit amet non tellus. Nullam massa orci, malesuada eu
        felis quis, varius faucibus nisl. Donec a tellus et ex bibendum
        convallis non in sapien. Cras cursus rhoncus metus quis vulputate.
      </p>
      <p className={styles.paragrafo}>
        Aliquam quis urna risus. Maecenas consequat sodales justo id gravida.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Proin ultrices congue laoreet. Cras euismod,
        lectus sit amet porttitor pellentesque, felis libero auctor tellus,
        aliquet finibus ligula odio cursus arcu. Sed ac dictum quam. Integer
        bibendum tempus ligula, a hendrerit arcu tristique ut. Aliquam erat
        volutpat. Morbi tincidunt nibh sit amet fermentum aliquet. Etiam
        imperdiet, ligula vitae bibendum faucibus, lacus ex finibus elit, eget
        luctus leo neque a arcu. Nunc convallis nisl vitae purus scelerisque
        finibus lobortis non nulla. Sed luctus sagittis odio, ut laoreet ligula
        finibus finibus. Proin et convallis ligula.
      </p>
    </ModelPost>
  );
}
