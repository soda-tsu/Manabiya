import Table from "../../Components/Table/Table";
import { links, columns } from "../../utils/anime";

function Iniciante() {
  return (
    <main>
      <Table columns={columns} links={links} />
    </main>
  );
}

export default Iniciante;
