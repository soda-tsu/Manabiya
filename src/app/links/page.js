import { links, columns } from "@/app/utils/links";
import styles from "./page.module.css";
import Table from "../Components/Table/Table";

function Links() {
  return (
    <div className={styles.tableContainer}>
      <Table columns={columns} objectContent={links} />
    </div>
  );
}

export default Links;
