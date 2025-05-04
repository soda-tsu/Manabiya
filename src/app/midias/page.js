import Image from "next/image";
import styles from "./page.module.css";
import HideLink from "../Components/HideLink/HideLink";

function Midias() {
  return (
    <main>
      <header className={styles.header}>
        <h2>Escolha uma mídia na TV</h2>
        <p>Vamos aprender japonês juntos</p>
      </header>
      <div className={styles.container}>
        <Image
          src="/RenderUmaru.png"
          alt="RenderUmaru"
          width={1080}
          height={720}
          layout="responsive"
        />

        <HideLink
          height="182px"
          width="178px"
          top="120px"
          left="46px"
          href="/midia/manga"
          title="Mangá"
        />
        <HideLink
          height="183px"
          width="179px"
          top="119px"
          left="244px"
          href="/midia/anime"
          title="Anime"
        />

        <HideLink
          height="183px"
          width="179px"
          top="119px"
          left="440px"
          href="/midia/visualNovel"
          title="Visual Novels"
        />

        <HideLink
          height="183px"
          width="178px"
          top="119px"
          left="637px"
          href="/midia/jogo"
          title="Jogos"
        />

        <HideLink
          height="183px"
          width="119px"
          top="119px"
          left="832px"
          href="/midia/doramasetv"
          title="Doramas e TV"
        />

        <HideLink
          height="158px"
          width="178px"
          top="319px"
          left="46px"
          href="/midia/vtubers"
          title="VTubers"
        />

        <HideLink
          height="158px"
          width="178px"
          top="319px"
          left="637px"
          href="/midia/youtube"
          title="Youtube"
        />

        <HideLink
          height="158px"
          width="119px"
          top="319px"
          left="832px"
          href="/midia/podcast"
          title="Podcast"
        />
      </div>
    </main>
  );
}

export default Midias;
