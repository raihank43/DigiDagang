import { NextRequest, NextResponse } from "next/server";
import { readPayload, readPayloadJose } from "./app/lib/jwt";

export async function middleware(request: NextRequest) {
  try {
    console.log("masuk middleware --->", request.url);
    // 1. ambil token dari headers (dari cookies)
    // -> kalo token gaada, throw error
    // 2. check apakah token valid?
    // -> kalo token ga valid, response error
    // 3. inject decoded token ke headers dan lanjutin request ke route handler

    const tokenCookie = request.cookies.get("Authorization");

    if (!tokenCookie) {
      return NextResponse.json(
        {
          error: "Invalid Token",
        },
        { status: 401 }
      );
    }

    const [type, token] = tokenCookie.value.split(" ");

    if (type !== "Bearer") {
      return NextResponse.json(
        {
          error: "Invalid Token",
        },
        { status: 401 }
      );
    }

    const decoded = await readPayloadJose<{ _id: string; email: string }>(
      token
    );
    // console.log(decoded,"<<<<<");

    // injecting user logged data to headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", decoded._id);
    requestHeaders.set("x-user-email", decoded.email);

    return NextResponse.next({
      request: {
        // new request headers
        headers: requestHeaders,
      },
    });
  } catch (error) {
    const err = error as Error;
    if (err.name == "JWSInvalid") {
      return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
    }
    console.log(err);
  }
}

export const config = {
  matcher: "/api/products/:path*",
};
