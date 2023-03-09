export type RootTable = TableRow[];

export interface TableRow {
  data: Record<string, string>;
  kids: Record<string, Records> | {};
}

interface Records {
  records: TableRow[];
}
