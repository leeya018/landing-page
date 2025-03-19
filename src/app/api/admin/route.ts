// src/app/api/login/route.js

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../database/firebase";
import { Cred } from "../../../../database/creds";

export async function GET() {
  try {
    const items = await getDocs(collection(db, "creds"));
    const tempCreds: Cred[] = [];
    items.forEach((doc) => {
      tempCreds.push(doc.data() as Cred);
    });

    return Response.json({ data: tempCreds }, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
