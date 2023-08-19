import React from "react";
import "./table.scss";

const Table = ({ hidden, page }) => {
  return (
    <>
      <div className="table-container">
        <h2 className={hidden && "hidden"}>Projections</h2>

        <table>
          <tr>
            <th>Revenue:</th>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
          </tr>
          <tr>
            <th>Expense:</th>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
            <td>
              {page === "oneLinkEditPage" ? (
                <input placeholder="1000" />
              ) : (
                "1000"
              )}
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Table;
