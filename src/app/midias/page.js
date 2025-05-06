import Image from "next/image";
import styles from "./page.module.css";
import HideLink from "../Components/HideLink/HideLink";

function midiass() {
  return (
    <main>
      <header className={styles.header}>
        <h2>Escolha uma mídia na TV</h2>
        <p>
          O melhor jeito de aprender é sempre com o que nos deixa mais empolgado
        </p>
        <div className={styles.container}>
          <Image
            src="/RenderUmaru.png"
            alt="RenderUmaru"
            width={1080}
            height={720}
            layout="responsive"
          />

          <HideLink
            height="184px"
            width="178px"
            top="41px"
            left="44px"
            href="/midias/manga"
            title="Mangá"
          />
          <HideLink
            height="184px"
            width="180px"
            top="41px"
            left="241px"
            href="/midias/anime"
            title="Anime"
          />

          <HideLink
            height="184px"
            width="179px"
            top="41px"
            left="436px"
            href="/midias/visualNovel"
            title="Visual Novels"
          />

          <HideLink
            height="184px"
            width="177px"
            top="41px"
            left="631px"
            href="/midias/jogo"
            title="Jogos"
          />

          <HideLink
            height="184px"
            width="118px"
            top="41px"
            left="824px"
            href="/midias/doramasetv"
            title="Doramas e TV"
          />

          <HideLink
            height="152px"
            width="178px"
            top="245px"
            left="44px"
            href="/midias/vtubers"
            title="VTubers"
          />

          <HideLink
            height="152px"
            width="178px"
            top="245px"
            left="631px"
            href="/midiass/youtube"
            title="Youtube"
          />

          <HideLink
            height="152px"
            width="119px"
            top="245px"
            left="824px"
            href="/midias/podcast"
            title="Podcast"
          />
        </div>
      </header>
    </main>
  );
}

export default midiass;
