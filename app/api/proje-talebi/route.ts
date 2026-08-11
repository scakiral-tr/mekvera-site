import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { error: "Bu eski form endpoint'i devre dışı bırakıldı. Güncel iletişim akışını kullanın." },
    { status: 410, headers: { "Cache-Control": "no-store" } }
  );
}
