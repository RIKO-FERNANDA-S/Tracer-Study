"use client";

import { useState } from "react";
import dayjs from "dayjs";


export default function RecapPage() {

  
  const [loading, setLoading] = useState<number | null>(null);
  
  const pastYear = Array.from({length: 7}, (_, i ) => dayjs().subtract(i, "year").year());

  const handleDownload = async (tahun: number) => {
    setLoading(tahun);
    try {
      const response = await fetch("/api/recap", {
        method: "POST",
        body: JSON.stringify({ tahun }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        alert("Gagal mengunduh data");
        setLoading(null);
        return;
      }

      // Buat URL untuk download file
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `alumni-${tahun}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading file:", error);
    }

    setLoading(null);
  };

  return (
    <div className="">
      
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">No</th>
            <th className="border border-gray-300 p-2">Tahun Lulus</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {pastYear.map((tahun, index) => (
            <tr key={tahun} className="text-center">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{tahun}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => handleDownload(tahun)}
                  disabled={loading === tahun}
                  className="bg-blue-500 text-white px-3 py-1 rounded disabled:bg-gray-400"
                >
                  {loading === tahun ? "Downloading..." : "Download"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
