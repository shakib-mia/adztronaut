// app/api/works/[id]/route.js
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(request, { params }) {
  const { id } = params;

  const filePath = path.join(process.cwd(), "public", "works.json");
  const fileContent = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContent);

  const work = data[parseInt(id) - 1]; // Assuming index-based ID

  if (!work) {
    return NextResponse.json({ error: "Work not found" }, { status: 404 });
  }

  return NextResponse.json(work);
}
