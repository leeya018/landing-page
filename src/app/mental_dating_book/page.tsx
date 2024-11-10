"use client";
import React from "react";
import Image from "next/image";

const mentalDatingBookPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl overflow-hidden">
        <Image
          src="/images/mental_book.png" // Replace this with the path to your image file
          alt="מנטליות נכונה - הצלחה שלך עם נשים"
          width={300} // Adjust the width as needed
          height={400} // Adjust the height as needed
          className="mx-auto mt-4 mb-4" // Centered styling
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            מנטליות נכונה - הצלחה שלך עם נשים
          </h1>
          <p className="text-gray-700 mb-4">
            הספר הזה ידריך אותך כיצד לפתח ביטחון עצמי, כריזמה, ויכולות תקשורת
            אפקטיביות עם נשים. הוא מכיל שיטות מוכחות, טיפים מעשיים וכלים שיעזרו
            לך להתגבר על הפחדים שלך ולגשת לנשים בביטחון.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            למה כדאי לקנות את הספר הזה?
          </h2>
          <p className="text-gray-700 mb-4">
            הספר מציע גישה מעשית וברורה לשיפור כישורי התקשורת שלך עם נשים. תוכל
            ללמוד איך להתנהל במצבים מורכבים, לשמור על זרימה בשיחה, ולהוביל את
            הקשר למקומות אינטימיים בצורה בטוחה וכנה.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            מי קהל היעד של הספר?
          </h2>
          <p className="text-gray-700 mb-4">
            הספר מתאים לגברים בגילאי 25-40, רווקים, שמחפשים לשפר את כישורי
            התקשורת שלהם עם נשים, להגדיל את הביטחון העצמי, ולהצליח לנהל מערכות
            יחסים בריאות ומספקות.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            למי הספר פחות מתאים?
          </h2>
          <p className="text-gray-700 mb-4">
            הספר פחות מתאים לגברים שאינם מוכנים להשקיע בעצמם ובשיפור יכולותיהם,
            או לאנשים שמחפשים פתרונות מהירים ללא עבודה עצמית. כמו כן, הוא אינו
            מתאים למי שאינו מחפש לתקשר בצורה כנה ומכבדת עם נשים.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://meshulam.co.il/purchase?b=0ed4279900c039f2dd0a8fd67c24e4ed",
                "_blank"
              )
            }
            className="w-full bg-blue-600 text-white py-2 rounded-md text-lg hover:bg-blue-700 transition-colors"
          >
            קנה עכשיו
          </button>
        </div>
      </div>
    </div>
  );
};

export default mentalDatingBookPage;
