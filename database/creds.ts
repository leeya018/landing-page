import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface Cred {
  email: string;
  password: string;
}

const addCred = async (cred: Cred) => {
  try {
    await addDoc(collection(db, "creds"), {
      ...cred,
    });
  } catch (error) {
    console.log(error);
  }
};

export { addCred };
