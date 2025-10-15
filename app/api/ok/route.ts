export async function GET() {
  return Response.json({
    ok: true,
    route: "/api/ok",
    timestamp: new Date().toISOString(),
  })
}
