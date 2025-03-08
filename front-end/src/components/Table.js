import React from "react";

const Table = ({ headers, data, onRowClick }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-blue-700 text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-100 cursor-pointer"
                onClick={() => onRowClick && onRowClick(row)}
              >
                {Object.values(row).map((cell, index) => (
                  <td key={index} className="px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="px-4 py-2 text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
