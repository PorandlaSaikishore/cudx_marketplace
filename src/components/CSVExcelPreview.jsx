import React, { useState, useMemo } from "react";
import Papa from "papaparse";

export default function CSVExcelGreen() {
  const [csvData, setCsvData] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Upload CSV
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setCsvData(results.data);
        setCurrentPage(1);
      },
    });
  };

  const headers = csvData.length > 0 ? Object.keys(csvData[0]) : [];

  // Sorting
  const sortedData = useMemo(() => {
    let sortableData = [...csvData];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        const aVal = a[sortConfig.key] || "";
        const bVal = b[sortConfig.key] || "";
        if (aVal < bVal) return sortConfig.direction === "ascending" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      });
    }
    return sortableData;
  }, [csvData, sortConfig]);

  // Filter / Search
  const filteredData = useMemo(() => {
    if (!searchTerm) return sortedData;
    return sortedData.filter((row) =>
      headers.some((header) =>
        (row[header] || "").toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [sortedData, searchTerm, headers]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const currentRows = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Column sort
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig?.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Upload CSV */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Upload CSV File:</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="border border-gray-300 px-3 py-1 rounded w-full"
        />
      </div>

      {/* Search */}
      {csvData.length > 0 && (
        <div className="mb-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-3 py-1 rounded w-full"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      )}

      {/* Table */}
      {csvData.length > 0 && (
        <div className="overflow-x-auto border border-black rounded shadow-sm">
          <table className="min-w-full border-collapse table-auto border-black">
            <thead className="bg-green-500 sticky top-0">
              <tr>
                {/* Row numbers */}
                <th className="px-3 py-2 border border-black text-left font-medium text-white">
                  #
                </th>
                {headers.map((header) => (
                  <th
                    key={header}
                    onClick={() => requestSort(header)}
                    className="px-4 py-2 border border-black text-left font-medium cursor-pointer select-none text-white"
                  >
                    {header}
                    {sortConfig?.key === header ? (
                      sortConfig.direction === "ascending" ? " 🔼" : " 🔽"
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-3 py-2 border border-black text-gray-700">
                    {(currentPage - 1) * pageSize + rowIndex + 1}
                  </td>
                  {headers.map((header) => (
                    <td
                      key={header}
                      className="px-4 py-2 border border-black text-gray-700"
                    >
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {csvData.length > 0 && (
        <div className="flex justify-center items-center mt-3 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages || 1}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
