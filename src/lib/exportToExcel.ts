import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (data: any[], fileName: string) => {
  // 1️⃣ Buat worksheet dari data JSON
  const worksheet = XLSX.utils.json_to_sheet(data);
  
  // 2️⃣ Buat workbook dan tambahkan worksheet ke dalamnya
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // 3️⃣ Konversi workbook ke file Excel
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // 4️⃣ Buat file Blob dan simpan sebagai Excel
  const excelBlob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // 5️⃣ Unduh file Excel
  saveAs(excelBlob, `${fileName}.xlsx`);
};
