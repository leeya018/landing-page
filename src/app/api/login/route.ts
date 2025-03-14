// src/app/api/login/route.js

import { addCred, Cred } from "../../../../database/creds";

interface LoginBody {
  email: string;
  password: string;
}

// RegEx to disallow < > ' " ` characters
const forbiddenCharsRegex = /[<>'"`]/;

function containsForbiddenChars(input: string): boolean {
  return forbiddenCharsRegex.test(input);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginBody;
    const { email, password } = body;

    // Basic validation
    if (!email || !password) {
      return Response.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check for forbidden characters
    if (containsForbiddenChars(email) || containsForbiddenChars(password)) {
      return Response.json(
        { message: "Invalid input: no special characters allowed" },
        { status: 400 }
      );
    }

    const credItem: Cred = { email, password };

    await addCred(credItem);

    return Response.json({ message: "Login is good" }, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function GET() {
  return Response.json(
    { message: "GET not supported on this endpoint" },
    { status: 405 }
  );
}
