import { NextRequest, NextResponse } from "next/server";
import quickLinks from "@/utils/links";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ uid: string }> },
) {
  const awaitedParams = await params;
  // console.log(awaitedParams.uid);
  return NextResponse.redirect(
    quickLinks[awaitedParams.uid]?.url || new URL("/", request.url),
  );
}
