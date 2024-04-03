import User from "@/db/models/user";

export async function POST(request: Request) {
  // 1. tangkap req.bodynya
  // 2. User.create
  // res.json
  const body = await request.json();
  console.log(body);

  await User.create(body);

  return Response.json({
    message: "User registered successfully.",
  });
}
