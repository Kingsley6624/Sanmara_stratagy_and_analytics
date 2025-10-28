import { promises as fs } from "fs";
import path from "path";

export async function getServicesData() {
  const filePath = path.join(process.cwd(), "data", "services.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}