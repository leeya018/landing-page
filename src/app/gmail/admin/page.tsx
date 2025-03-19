"use client";

import React, { useEffect, useState } from "react";
import { Cred } from "../../../../database/creds";

export default function AdminPage() {
  const [creds, setCreds] = useState<Cred[]>([]);

  useEffect(() => {
    getCreds()
      .then((data) => {
        console.log(data.data);
        setCreds(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   return (
  //     <div>
  //       <div>You are not authorized to view this page</div>
  //       <div>got to login page:</div>
  //       <Link href={"/login"}>to login</Link>
  //     </div>
  //   );
  // }

  const getCreds = async () => {
    const res = await fetch("/api/admin");
    const data = await res.json();

    return data;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
        Admin Dashboard - Creds Data
      </h1>
      <div className="flex flex-col">
        <ul className="list-none space-y-2">
          {creds.map((cred, index) => (
            <li key={index} className="p-4 shadow-md rounded-lg bg-white">
              <div className="font-medium text-lg text-gray-700">
                Username: <span className="text-gray-600">{cred.email}</span>
              </div>
              <div className="font-medium text-lg text-gray-700">
                Password: <span className="text-gray-600">{cred.password}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
