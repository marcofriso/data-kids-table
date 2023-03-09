import { RootTable, TableRow } from "./app";

export interface TableProps {
  localTableData: RootTable;
  tableData: RootTable;
  setTableData: Function;
  name: string;
  openKidsGroupUUIDs: string[];
  setOpenKidsGroupUUIDs: Function;
  parentGroupUUID?: string | undefined;
  baseDataArray?: string[] | undefined;
  version: number;
}

export interface TableRowWithKidsRecordsProps {
  row: TableRow;
  index: number;
}
