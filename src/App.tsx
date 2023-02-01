import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import tableData from "./data/example-data.json";

const App = () => {
  const [openKidsGroupUUIDs, setOpenKidsGroupUUIDs] = useState([]);

  return (
    <div className="App">
      <Table
        tableData={tableData}
        name="Data Table"
        openKidsGroupUUIDs={openKidsGroupUUIDs}
        setOpenKidsGroupUUIDs={setOpenKidsGroupUUIDs}
      />
    </div>
  );
};

export default App;
