"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  const handleScheduleClick = () => {
    router.push("scedule_meet"); // Replace with the actual scheduling link
  };

  const handleBuyBookClick = () => {
    router.push("mental_dating_book"); // Replace with the book purchase link
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl overflow-hidden p-6 text-center">
        <Image
          src="/images/me.jpg" // Replace with the path to your photo
          alt="תמונה של לי יהב"
          width={300} // Adjust the size as needed
          height={300} // Adjust the size as needed
          className="mx-auto mb-4 rounded-md"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">עליי</h1>
        <p className="text-gray-700 mb-4">
          אני לי יהב, מומחה לתקשורת וביטחון עצמי עם נשים. המטרה שלי היא לעזור
          לגברים לפתח את הכישורים והביטחון הדרושים כדי להצליח במפגשים עם נשים
          וליצור קשרים אמיתיים ומשמעותיים.
        </p>
        <p className="text-gray-700 mb-4">
          בשירותים שאני מציע, אני משתמש בכלים ושיטות מעשיות שעזרו לי ולרבים
          אחרים לפרוץ את מחסומי הפחד, לשפר את הביטחון העצמי ולהפוך את התקשורת עם
          נשים לחוויה קלה ומהנה. אני מאמין שלכל גבר מגיע להרגיש ביטחון בגישה שלו
          ולהוביל את החיים הרומנטיים שלו בהצלחה.
        </p>

        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={handleScheduleClick}
            className="w-full bg-green-600 text-white py-2 rounded-md text-lg hover:bg-green-700 transition-colors"
          >
            קבע פגישה
          </button>
          <button
            onClick={handleBuyBookClick}
            className="w-full bg-blue-600 text-white py-2 rounded-md text-lg hover:bg-blue-700 transition-colors"
          >
            קנה את הספר שלי
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
