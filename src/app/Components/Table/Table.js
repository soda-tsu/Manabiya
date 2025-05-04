"use client";

import styles from "./Table.module.css";
import { AgGridReact } from "ag-grid-react";

import {
  ModuleRegistry,
  AllCommunityModule,
  themeQuartz,
  iconSetMaterial,
} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz.withPart(iconSetMaterial).withParams({
  backgroundColor: "#1f2836",
  borderRadius: 0,
  browserColorScheme: "dark",

  chromeBackgroundColor: {
    ref: "foregroundColor",
    mix: 0.07,
    onto: "backgroundColor",
  },
  columnBorder: true,
  fontFamily: {
    googleFont: "Pixelify Sans",
  },
  foregroundColor: "#FFF",
  headerFontSize: 14,
  headerRowBorder: false,
  rowBorder: true,
  wrapperBorder: true,
  wrapperBorderRadius: 0,
});

const onGridReady = (params) => {
  params.api.sizeColumnsToFit(); // Ajusta as colunas ao container inicialmente
};

function Table({ links, columns }) {
  return (
    <div className={styles.tableContainer}>
      <AgGridReact
        rowData={links}
        columnDefs={columns}
        theme={myTheme}
        onGridReady={onGridReady}
        suppressAutoSize={false}
        suppressSizeToFit={false}
        domLayout="autoHeight"
      />
    </div>
  );
}

export default Table;
