"use client";

import styles from "./Table.module.css";
import { AgGridReact } from "ag-grid-react";

import {
  ModuleRegistry,
  AllCommunityModule,
  themeQuartz,
} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz.withParams({
  accentColor: "#4C4C4C",
  backgroundColor: "#1E1E1E",
  borderColor: "#8A756326",
  borderRadius: 0,
  browserColorScheme: "dark",
  chromeBackgroundColor: {
    ref: "foregroundColor",
    mix: 0.07,
    onto: "backgroundColor",
  },
  columnBorder: true,
  foregroundColor: "#FFF",
  headerBackgroundColor: "#1E1E1E",
  headerFontFamily: {
    googleFont: "Raleway",
  },
  headerFontSize: 24,
  headerFontWeight: 400,
  headerRowBorder: true,
  headerTextColor: "#bd8c62",
  headerVerticalPaddingScale: 1.5,
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
        defaultColDef={{
          cellStyle: {
            fontFamily: "Courier New, monospace",
            fontSize: "18px",
            overflow: "hidden",
            height: "360px",
          },
        }}
      />
    </div>
  );
}

export default Table;
