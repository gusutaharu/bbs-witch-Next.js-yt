import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const allBSSPosts = await prisma.post.findMany();
  return NextResponse.json(allBSSPosts)
}