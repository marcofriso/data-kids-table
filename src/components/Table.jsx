import React from "react";

const Table = ({ tableData, name }) => {
  const headerGroups = Object.keys(tableData[0].data);

  return (
    <>
      <p>{name.toUpperCase()}</p>
      <table>
        <thead>
          <tr>
            {headerGroups.map((headerGroup) => (
              <th>{headerGroup}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr>
              {headerGroups.map((val) => (
                <td>{row.data[val]}</td>
              ))}
              {Object.keys(row.kids) &&
                Object.keys(row.kids).map((val) => (
                  <Table tableData={row.kids[val].records} name={val} />
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
