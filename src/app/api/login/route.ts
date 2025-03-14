// src/app/api/login/route.js

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { email, password } = body;

//     // Basic validation
//     if (!email || !password) {
//       return Response.json(
//         { message: "Email and password are required" },
//         { status: 400 }
//       );
//     }

//     return Response.json({ message: "Login is good" }, { status: 200 });

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (error: unknown) {
//     return Response.json({ message: "Something went wrong" }, { status: 500 });
//   }
// }

// // Optionally export other methods
// export async function GET() {
//   return Response.json(
//     { message: "GET not supported on this endpoint" },
//     { status: 405 }
//   );
// }

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
