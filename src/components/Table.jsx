import React, { Fragment, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import get from "lodash.get";
import set from "lodash.set";

const Table = ({
  localTableData,
  tableData,
  setTableData,
  name,
  openKidsGroupUUIDs,
  setOpenKidsGroupUUIDs,
  parentGroupUUID = undefined,
  baseDataArray = undefined,
  version = 0,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setLocalVersion] = useState(0);

  useEffect(() => {
    setLocalVersion(version);
  }, [version]);

  const headerGroups = Object.keys(localTableData[0].data);

  const hasKidsRecords = (row) =>
    !!get(row, ["kids", Object.keys(row.kids)[0], "records", [0]]);

  const toggleAccordion = (kidsGroupUUID) => {
    if (openKidsGroupUUIDs.includes(kidsGroupUUID)) {
      setOpenKidsGroupUUIDs(
        openKidsGroupUUIDs.filter((uuid) => uuid !== kidsGroupUUID)
      );
    } else {
      setOpenKidsGroupUUIDs([...openKidsGroupUUIDs, kidsGroupUUID]);
    }
  };

  const deleteKey = (key, value) => {
    const dataKeys = baseDataArray;

    let tableDataKeyToBeModified = localTableData.filter(
      (row) => get(row, ["data", key]) !== value
    );

    const modifiedTable = baseDataArray
      ? set(tableData, dataKeys, tableDataKeyToBeModified)
      : tableDataKeyToBeModified;

    setTableData(modifiedTable);
  };

  const deleteRow = (row) => {
    deleteKey(Object.keys(row.data)[0], row.data[Object.keys(row.data)[0]]);
  };

  const TableRowWithKidsRecords = ({ row, index }) => {
    const kidsGroupKey = `${headerGroups[0]}-${row.data[headerGroups[0]]}`;
    const kidsGroupUUID = parentGroupUUID
      ? `${parentGroupUUID}/${kidsGroupKey}`
      : kidsGroupKey;

    const openAccordion = openKidsGroupUUIDs.includes(kidsGroupUUID);

    return (
      <>
        <tr>
          <td
            className="accordion-button"
            onClick={() => toggleAccordion(kidsGroupUUID)}
          >
            <i
              className={
                openAccordion ? "fa fa-chevron-down" : "fa fa-chevron-right"
              }
            />
          </td>
          {headerGroups.map((val) => (
            <td key={uuid()}>{row.data[val]}</td>
          ))}
          <td className="accordion-button" onClick={() => deleteRow(row)}>
            <i className={"fa fa-times"} />
          </td>
        </tr>
        {openAccordion &&
          Object.keys(row.kids).map((val) => (
            <tr
              key={uuid()}
              display={openAccordion ? "table-row" : "display-none"}
            >
              <td colSpan={headerGroups.length}>
                <Table
                  tableData={tableData}
                  setTableData={setTableData}
                  localTableData={row.kids[val].records}
                  name={val}
                  openKidsGroupUUIDs={openKidsGroupUUIDs}
                  setOpenKidsGroupUUIDs={setOpenKidsGroupUUIDs}
                  parentGroupUUID={kidsGroupUUID}
                  baseDataArray={
                    baseDataArray
                      ? [
                          ...baseDataArray,
                          index.toString(),
                          "kids",
                          val,
                          "records",
                        ]
                      : [index.toString(), "kids", val, "records"]
                  }
                  version={version}
                />
              </td>
            </tr>
          ))}
      </>
    );
  };

  return (
    <>
      <p className="fw-bold">{name.toUpperCase()}</p>
      <table className="table">
        <thead className="bg-light">
          <tr>
            <th scope="col" className="accordion-button" />
            {headerGroups.map((headerGroup) => (
              <th scope="col" key={uuid()}>
                {headerGroup}
              </th>
            ))}
            <th scope="col" className="accordion-button" />
          </tr>
        </thead>
        <tbody>
          {localTableData.map((row, index) => (
            <Fragment key={uuid()}>
              {hasKidsRecords(row) ? (
                <TableRowWithKidsRecords row={row} index={index} />
              ) : (
                <tr>
                  <td className="accordion-button" />
                  {headerGroups.map((val) => (
                    <td key={uuid()}>{row.data[val]}</td>
                  ))}
                  <td
                    className="accordion-button"
                    onClick={() => deleteRow(row)}
                  >
                    <i className={"fa fa-times"} />
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
