"use client";
const pages = [
  {
    name: "Fishing", // Edit the name here
    description:
      "the paeg the the user is seeing in loooking just like gmail but its not, and when the user is entering its credential , it getting passed to the hacker db he can use them later on", // And here
    url: "/fishing", // Change the link path here
  },

  {
    name: "CSRF", // Edit the name here
    description:
      "the user is entering the page of the hacker and in there there is an API call that is on the imaeg src , so he is making a call behind the scene to abuse the user", // And here
    url: "/csrf", // Change the link path here
  },

  {
    name: "xss", // Edit the name here
    description:
      "the hacker is adding a script to the comments so when the user will open the site , the comment will act as script and use the user coockie on the origin site , so it can send the coockie to the server of the hacker. in our can , this is not going to work becasue of the react santizations of the text that is not allowed things like < >  and  it will convert them into text.", // And here
    url: "/xss", // Change the link path here
  },
];

import React from "react";
import Link from "next/link";

export default function PageThree() {
  return (
    <div className="min-h-screen w-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Hacking page with links
      </h1>
      <p className="text-center text-lg mb-6">
        Welcome to hacking pages that I created just to learn more about the
        hacking attacks.
      </p>

      <div className="flex flex-col gap-4 text-left">
        {pages.map((page, key) => (
          <div key={key}>
            <div> {page.name}</div>
            <div> {page.description}</div>
            <Link
              className="font-semibold text-lg text-green-400"
              href={`${page.url}`}
            >
              {" "}
              to {page.name} site
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
