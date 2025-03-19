"use client";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../database/firebase";

export default function CommentsPage() {
  const [comment, setComment] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comments, setComments] = useState<any>([]);

  // Listen for comments in real-time
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsArray);
    });

    return () => unsubscribe();
  }, []);

  // Add a comment to Firestore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    try {
      await addDoc(collection(db, "comments"), {
        text: comment,
        createdAt: serverTimestamp(),
      });
      setComment("");
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Comments Page</h1>
      {/* <div className=" mb-8 mx-40 text-left">
        in that page there are xss attack that could have been happend if it was
        not build in react. if it was just plained html , so the attacker can
        comment a script like an alart or a script that can make an api call
        with the cookie of the user to the attracer server api.
      </div> */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full max-w-md px-4 py-2 text-black rounded"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded font-semibold"
        >
          Post Comment
        </button>
      </form>

      <div className="mt-10 max-w-md mx-auto">
        {comments.length === 0 ? (
          <p className="text-center text-gray-400">No comments yet!</p>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          comments.map((c: any) => (
            <div key={c.id} className="bg-gray-800 p-4 my-2 rounded">
              <p>{c.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
