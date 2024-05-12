import User from "@/db/models/user";

export async function GET(request: Request) {
  const users = await User.findAll();
  return Response.json({ data: users }, { status: 202 });
}
