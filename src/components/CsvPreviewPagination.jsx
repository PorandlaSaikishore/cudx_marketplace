import React, { useState } from "react";
import Papa from "papaparse";

export default function CsvPreviewPagination() {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // number of rows per page

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setHeaders(results.meta.fields);
        setCsvData(results.data);
        setCurrentPage(1); // reset to first page
      },
    });
  };

  // Pagination calculations
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = csvData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(csvData.length / rowsPerPage);

  return (
    
    <div className=" flex flex-col items-center justify-start space-y-6">
     

      {/* Upload Button */}
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4 p-2 rounded-lg border border-white/30 bg-white/20 text-white cursor-pointer hover:bg-white/30 transition"
      />

      {/* CSV Preview Table */}
      {csvData.length > 0 && (
        <div className="overflow-x-auto bg-gradient-to-r from-sky-400 via-blue-900 to-black backdrop-blur-lg rounded-xl p-4 shadow-lg border border-black/20">
          <table className="min-w-full text-white">
            <thead>
              <tr className="border-b border-white/20">
                {headers.map((header, idx) => (
                  <th key={idx} className="px-4 py-2 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white/10" : "bg-white/5"}
                >
                  {headers.map((header, colIndex) => (
                    <td key={colIndex} className="px-4 py-2">
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/40 transition disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/40 transition disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
