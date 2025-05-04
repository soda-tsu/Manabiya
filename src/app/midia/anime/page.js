import Table from "../../Components/Table/Table";
import { links, columns } from "../../utils/animeIniciante";

function Iniciante() {
  return (
    <main>
      <Table columns={columns} links={links} />
    </main>
  );
}

export default Iniciante;
