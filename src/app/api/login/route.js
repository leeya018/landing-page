// src/app/api/login/route.js

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Basic validation
    if (!email || !password) {
      return Response.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    return Response.json({ message: "Login is good" }, { status: 200 });
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}

// Optionally export other methods
export async function GET() {
  return Response.json(
    { message: "GET not supported on this endpoint" },
    { status: 405 }
  );
}
