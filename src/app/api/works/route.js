// app/api/works/route.js
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "works.json");
  const fileContent = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContent);

  return NextResponse.json(data);
}
