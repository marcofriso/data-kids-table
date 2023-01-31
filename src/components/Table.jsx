import React, { Fragment } from "react";
import { v4 as uuid } from "uuid";

const Table = ({ tableData, name }) => {
  const headerGroups = Object.keys(tableData[0].data);

  return (
    <>
      <p>{name.toUpperCase()}</p>
      <table>
        <thead>
          <tr>
            {headerGroups.map((headerGroup) => (
              <th key={uuid()}>{headerGroup}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <Fragment key={uuid()}>
              <tr>
                {headerGroups.map((val) => (
                  <td key={uuid()}>{row.data[val]}</td>
                ))}
              </tr>
              {Object.keys(row.kids) &&
                Object.keys(row.kids).map((val) => (
                  <tr key={uuid()}>
                    <td colSpan={headerGroups.length}>
                      <Table tableData={row.kids[val].records} name={val} />
                    </td>
                  </tr>
                ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
