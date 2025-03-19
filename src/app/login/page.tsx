"use client";

import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth, db } from "../../../database/firebase";
import { useAuth } from "../../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const user = result.user;
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, { uid: user.uid, email: user.email, role: "user" });

      // router.push("/");
    } catch (error) {
      setError("Failed to sign in with Google. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <Image
            src="https://images.unsplash.com/photo-1524860769472-246b6afea403?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Manifest Journal"
            width={300}
            height={200}
            className="mx-auto rounded-lg"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to hack the user
          </h2>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Sign in with Google
        </button>
        {error && (
          <p className="mt-2 text-center text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
