import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import tableData from "./data/example-data.json";
import { Root } from "./types/app";

const App = () => {
  const [openKidsGroupUUIDs, setOpenKidsGroupUUIDs] = useState<string[]>([]);
  const [data, setData] = useState<Root>(tableData);
  const [version, setVersion] = useState<number>(0);

  const setTableData = (data: Root) => {
    setData(data);
    setVersion(version + 1);
  };

  return (
    <div className="App">
      <Table
        localTableData={data}
        tableData={data}
        setTableData={setTableData}
        name="Data Table"
        openKidsGroupUUIDs={openKidsGroupUUIDs}
        setOpenKidsGroupUUIDs={setOpenKidsGroupUUIDs}
        version={version}
      />
    </div>
  );
};

export default App;
