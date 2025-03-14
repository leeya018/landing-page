import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const devConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_DEV_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DEV_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_DEV_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_DEV_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_DEV_APP_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(devConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
