import User from "@/db/models/user";
import { ZodError } from "zod";

export async function POST(request: Request) {
  // 1. tangkap req.bodynya
  // 2. User.create
  // res.json
  try {
    const body = await request.json();
    //   console.log(body);

    await User.create(body);

    return Response.json({
      message: "User registered successfully.",
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      //   const errMessage =
      //     error.issues[0].path[0] + " " + error.issues[0].message; // ambil error pertama
      
      //   console.log(JSON.stringify(error.issues, null, 2));

      const errMessage = error.issues.map((item) => {
        return item.path[0] + ": " + item.message; // ini jadi ada 2 errornya
      });

      return Response.json(
        {
          error: errMessage,
        },
        {
          status: 400,
        }
      );
    } else if (
      error instanceof Error
    ) {
      return Response.json(
        {
          error: error.message,
        },
        { status: 400 }
      );
    } else {
      return Response.json(
        {
          error: "Internal server error",
        },
        { status: 500 }
      );
    }
  }
}
