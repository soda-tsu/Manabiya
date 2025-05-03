import Table from "../Components/Table/Table";
import { links, columns } from "../utils/anime";

function Anime() {
  return (
    <div>
      <h1>Anime</h1>
      <Table columns={columns} objectContent={links} />
    </div>
  );
}

export default Anime;
