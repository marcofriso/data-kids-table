import React, { useState, Fragment } from "react";
import { v4 as uuid } from "uuid";

const Table = ({
  tableData,
  name,
  openKidsGroupUUIDs,
  setOpenKidsGroupUUIDs,
}) => {
  const headerGroups = Object.keys(tableData[0].data);

  const toggleAccordion = (kidsGroupUUID) => {
    if (openKidsGroupUUIDs.includes(kidsGroupUUID)) {
      setOpenKidsGroupUUIDs(
        openKidsGroupUUIDs.filter((uuid) => uuid !== kidsGroupUUID)
      );
    } else {
      // console.log(1, [...openKidsGroupUUIDs, kidsGroupUUID]);
      // console.log(2, [...openKidsGroupUUIDs]);
      // console.log(3, kidsGroupUUID);
      setOpenKidsGroupUUIDs([...openKidsGroupUUIDs, kidsGroupUUID]);
    }
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
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <Fragment key={uuid()}>
              {Object.keys(row.kids).length ? (
                (() => {
                  const kidsGroupUUID = `${headerGroups[0]}-${
                    row.data[headerGroups[0]]
                  }`;
                  const openAccordion =
                    openKidsGroupUUIDs.includes(kidsGroupUUID);

                  return (
                    <>
                      <tr>
                        <td
                          className="accordion-button"
                          onClick={() => toggleAccordion(kidsGroupUUID)}
                        >
                          <i
                            className={
                              openAccordion
                                ? "fa fa-chevron-down"
                                : "fa fa-chevron-right"
                            }
                          />
                        </td>
                        {headerGroups.map((val) => (
                          <td key={uuid()}>{row.data[val]}</td>
                        ))}
                      </tr>
                      {openAccordion &&
                        Object.keys(row.kids).map((val) => (
                          <tr
                            key={uuid()}
                            display={
                              openAccordion ? "table-row" : "display-none"
                            }
                          >
                            <td colSpan={headerGroups.length}>
                              <Table
                                tableData={row.kids[val].records}
                                name={val}
                                openKidsGroupUUIDs={openKidsGroupUUIDs}
                                setOpenKidsGroupUUIDs={setOpenKidsGroupUUIDs}
                              />
                            </td>
                          </tr>
                        ))}
                    </>
                  );
                })()
              ) : (
                <tr>
                  <td className="accordion-button" />
                  {headerGroups.map((val) => (
                    <td key={uuid()}>{row.data[val]}</td>
                  ))}
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
