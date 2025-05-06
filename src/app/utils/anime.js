import ImageToTable from "../Components/ImageToTable/ImageToTable";
import NameCellRenderer from "../Components/NameCellRenderer/NameCellRenderer";
import TagRank from "../Components/TagRank/TagRank";

export const columns = [
  {
    field: "Capa",
    width: 230,
    maxWidth: 230,
    minWidth: 115,
    autoHeight: true,
    cellRenderer: ImageToTable,
    suppressCellFocus: true,
  },
  {
    field: "Nome",
    width: 270,
    maxWidth: 270,
    minWidth: 270,
    cellRenderer: NameCellRenderer,
    cellStyle: {
      whiteSpace: "normal",
    },
    autoHeight: true,
    cellStyle: {
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      letterSpacing: "0.2rem",
      padding: "0px 16px",
    },
  },

  {
    field: "Comentários",
    wrapText: true,
    cellStyle: {
      display: "flex",
      alignItems: "center",
      padding: "0px 16px",
    },
  },
  {
    field: "Nível",
    width: 90,
    maxWidth: 90,
    minWidth: 90,
    autoHeight: true,
    cellRenderer: TagRank,
    suppressCellFocus: true,
    cellStyle: {
      padding: "0px",
      border: "none",
    },
  },
];

export const links = [
  {
    Nome: "しろくまカフェ - Shirukuma Café",
    Comentários:
      "Todos os diálogos são lentos, só usa gramática básica e os tópicos são quase todos cotidianos. Além disso os episódios sempre contam 2 histórias, então só tem 15 minutos para introdução, desenvolvimento e conclusão",
    Capa: "/003.jpg",
    Nível: "02",
  },
  {
    Nome: "怪談レストラン - Kaidan Restaurant",
    Comentários:
      "Cada episódio é uma coleção de duas ou três histórias de fantasmas bem curta. O vocabulário é básico predominantemente relacionado a vida cotidiana ou escola. A parte mais desafiadora aqui é a introdução dos episódios onde cada uma das histórias é brevemente apresentada como se fosse um prato de restaurante usando um pouco de keigo.",
    Capa: "/004.jpg",
    Nível: "02",
  },
  {
    Nome: "わかば＊ガール - Wakaba＊Girl",
    Comentários:
      "A única dificuldade aqui é que Wakaba fala usando keigo, isso é compensado pela duração dos episódios que são curtos",
    Capa: "/001.jpg",
    Nível: "02",
  },
  {
    Nome: "ご注文はうさぎですか - Gochuumon wa Usagi desu ka",
    Comentários: "Sem comentários ainda",
    Capa: "/002.jpg",
    Nível: "02",
  },
];
