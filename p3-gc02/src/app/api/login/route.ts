import { createToken } from "@/app/lib/jwt";
import User from "@/db/models/user";
import { compareTextWithHash } from "@/db/utils/bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const body: { email: string; password: string } = await request.json();

    const validationInput = z
      .object({
        email: z.string().email(),
        password: z.string().min(6),
      })
      .safeParse(body);

    if (!validationInput.success) {
      throw validationInput.error;
    }
    const userByEmail = await User.getUserByEmail(body.email);
    if (!userByEmail) {
      return NextResponse.json(
        {
          message: "Email is not registered",
        },
        {
          status: 401,
        }
      );
    }

    // verify password input with the password in the db
    const verifyPassword = compareTextWithHash(
      body.password,
      userByEmail.password
    );

    if (!verifyPassword) {
      return NextResponse.json(
        {
          message: "Password doesn't match",
        },
        {
          status: 401,
        }
      );
    }

    // creating token
    const payload = {
      id: userByEmail._id,
      email: userByEmail.email,
    };

    const accessToken = createToken(payload);

    // console.log(accessToken);

    return NextResponse.json(
      {
        data: {
          accessToken,
        },
        message: "Login Berhasil - POST /api/users/login",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error);
      return NextResponse.json(
        {
          error: error,
          message: error.issues[0].message,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        error: error,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
