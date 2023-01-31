import React from "react";
import "./App.css";
import Table from "./components/Table";
import tableData from "./data/example-data.json";

const App = () => {
  return (
    <div className="App">
      <Table tableData={tableData} name="Data Table" />
    </div>
  );
};

export default App;
