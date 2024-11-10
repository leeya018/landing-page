"use client";
import React from "react";

const ThnxPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl overflow-hidden p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          תודה על הרכישה!
        </h1>
        <p className="text-gray-700 mb-4">
          אנו מעריכים את הרכישה שלך ומקווים שתיהנה מהספר האלקטרוני.
        </p>
        <p className="text-gray-700 mb-4">חשבונית בדרך אלייך למייל</p>
        <p className="text-gray-700 mb-4">
          כדי להוריד את הספר האלקטרוני, לחץ על הקישור הבא:
        </p>
        <a
          href="https://drive.google.com/file/d/1BU8IbXbQ5XtxQZtMV96csHB3R6NEOHuE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md text-lg hover:bg-blue-700 transition-colors"
        >
          פתח את הספר האלקטרוני
        </a>
      </div>
    </div>
  );
};

export default ThnxPage;
