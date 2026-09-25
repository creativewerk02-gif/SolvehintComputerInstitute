import { NextResponse } from "next/server";
import { getPublishedCatalog } from "@/server/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await getPublishedCatalog();
  if (!result.databaseAvailable) return NextResponse.json({ success: false, message: "Unable to connect to the course service.", code: result.error }, { status: 503 });
  return NextResponse.json({ success: true, data: result.categories.map(({ courses, ...category }) => ({ ...category, courseCount: courses.length })) });
}