
import * as XLSX from "xlsx";

let products = [];

export async function loadProducts() {
  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}products.xlsx`
    );

    if (!response.ok) {
      throw new Error("Could not load products.xlsx");
    }

    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet, {
      defval: "",
    });

    products = rows
      .filter((row) => row.name)
      .map((row, index) => ({
        id: index + 1,
        name: String(row.name).trim(),
        description: String(row.description ?? ""),
        image: String(row.image ?? "").trim(),
      }));

    return products;
  } catch (error) {
    console.error("Error loading Excel products:", error);
    return [];
  }
}

export default products;
