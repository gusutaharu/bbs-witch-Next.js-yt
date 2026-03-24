import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(
  req: Request,
  { params }: { params: Promise<{ bbsid: string }> },
) {
  const { bbsid } = await params;
  const bbsDetailData = await prisma.post.findUnique({
    where: { id: parseInt(bbsid) },
  });
  return NextResponse.json(bbsDetailData);
}
