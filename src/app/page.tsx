// pages/index.tsx

import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-teal-100 p-6 flex flex-col items-center">
      {/* Attention Section */}
      <section className="bg-white shadow-lg border-l-8 border-purple-500 p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h1 className="text-5xl font-extrabold mb-6 text-purple-700 hover:text-purple-800 transition duration-300">
          הרבה גברים מתקשים לתקשר עם נשים ומרגישים שהם לא מספיק טובים
        </h1>
        <p className="text-2xl text-gray-800 mb-8">
          הם מאמינים באחד או יותר מהדברים הבאים:
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          הם מאמינים שנשים לא אוהבות שמפריעים להן
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          אם מאמינים שהם לא מספיק שווים או שאין להם את מה שנדרש כדי להצליח עם
          נשים?
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          הם מאמינים שאין להם על מה לדבר איתה או שהשיחה נתקעת אחרי 2 דקות?
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          הם מאמינים שקשה לנהל שיחה עם בחורה, כי צריך להיות ממש מעניין ולהרשים
          אותה ועצם המחשבה על כך משתקת אותם
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          הם מאמינים שאם הם יקבלו דחייה, זה יפגע בביטחון שלהם והם גם חוששים
          שהפחד מדחייה יפגע להם בביטחון עוד יותר, וימנע מהם לפנות לנשים בעתיד
        </p>
        <p className="text-2xl text-gray-900 mt-8">
          אם אתה מזדהה עם אחד או יותר מהפחדים האלו אז המשך לקרוא ותגלה איך
          להתגבר על האמונות האלו ולבנות ביטחון אמיתי!
        </p>

        {/* Image after Attention Section */}
        <div className="mt-6">
          <Image
            src="/images/2.jpg" // Replace with your actual image path
            alt="Attention Section Image"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Interest Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h2 className="text-4xl font-bold mb-6 text-blue-700 hover:text-blue-800 transition duration-300">
          איך אפשר להתחיל עם נשים ולתקשר עם ביטחון וללא מאמץ ?
        </h2>
        <p className="text-xl text-gray-800 mb-4">
          תאר לעצמך שאתה ניגש לדבר עם בחורה בטעם שלך, מתחיל שיחה כיפית וזורמת,
          ואתה מרגיש בנוח בכל שלב.
        </p>
        <p className="text-xl text-gray-800 mb-4">
          אתה מסוגל ליצור עניין, להצחיק, להוביל את השיחה, ואפילו להוביל את הקשר
          למקום שאתה רוצה – בין אם זה מערכת יחסים רצינית או חוויה מינית מהנה.
        </p>
        <h3 className="text-3xl font-semibold mt-6 mb-4 text-purple-600">
          תחשוב רגע מה היה קורה אם היית יכול:
        </h3>
        <ul className="text-lg text-gray-800 list-disc list-inside mb-4 space-y-2">
          <li>ליצור שיחות מעניינות שגורמות לנשים לרצות לשמוע עוד.</li>
          <li>לקדם את האינטראקציה בצורה כנה, פתוחה ועם המון הומור.</li>
          <li>
            להרגיש בנוח לפנות לנשים בסיטואציות שונות – בקניון, בתחנת הרכבת או
            ברחוב.
          </li>
          <li>
            להפוך את השיחות שלכם לעמוקות ומעניינות יותר, כך שתיצור חיבור אמיתי.
          </li>
          <li className="text-xl">
            להוביל אינטראקציה מהרגע הראשון למקומות אינטימיים יותר – מגע, נשיקה,
            או סקס.
          </li>
        </ul>

        {/* Image after Interest Section */}
        <div className="mt-6">
          <Image
            src="/images/1.jpg" // Replace with your actual image path
            alt="Interest Section Image"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Desire Section */}
      <section className="bg-yellow-100 shadow-lg p-8 rounded-lg w-full max-w-3xl text-center my-10 border-t-8 border-yellow-400">
        <h2 className="text-4xl font-bold mb-6 text-yellow-600">
          מה אם תשיג את התוצאות שאתה רוצה?
        </h2>

        <div className="text-left">
          <ul className="text-xl text-gray-800 list-disc list-inside space-y-4">
            <li>
              מה אם היית מתחיל עם נשים בצורה מהירה ופשוטה, מבלי להרגיש לחץ או
              מבוכה?
            </li>
            <li>
              מה אם היית מקדם שיחות בצורה כיפית, קלילה שמשלבת הומור, כך שהשיחה
              לא מרגישה מאולצת?
            </li>
            <li>
              מה אם היית יוצא לדייטים עם נשים איכותיות שבאמת מתאימות לך מבלי
              להתפשר?
            </li>
            <li>
              מה אם היית מקדם דייטים לכיוון זוגיות או קשר אינטימי לפי העדפות
              שלך, מבלי להרגיש מחויב למשהו שאתה לא רוצה?
            </li>
            <li>
              מה אם היית יודע לפנות לנשים שאתה אוהב בכל סיטואציה – בקניון,
              ברכבת, או אפילו תוך כדי שגרת היום-יום שלך?
            </li>
            <li>
              מה אם היית מוביל את השיחה למקומות אינטימיים יותר כמו מגע, נשיקה או
              סקס, בצורה מכבדת וכנה?
            </li>
          </ul>
        </div>

        {/* Image after Desire Section */}
        <div className="mt-6">
          <Image
            src="/images/3.jpg" // Replace with your actual image path
            alt="Desire Section Image"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Action Section */}
      <section className="bg-green-50 shadow-lg p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h2 className="text-4xl font-bold mb-6 text-green-700">
          ובכן , אתה לא צריך לתהות יותר{" "}
        </h2>
        <p className="text-2xl text-gray-800 mb-8">
          אם אתה רוצה להפסיק להאמין כמו שאר הגברים את האמונות האלו , ולגלות ביחד
          איתי איך לעשות את השינוי בראש שיביא ל
        </p>
        <ul className="text-xl text-gray-800 list-disc list-inside space-y-4">
          <li>יצירת שיחות מעניינות עם נשים.</li>
          <li>קידום אינטרקציות בצורה כנה, פתוחה ועם המון הומור.</li>
          <li className="text-xl">
            הובלת אינטראקציה מהרגע הראשון למקומות אינטימיים יותר – מגע, נשיקה,
            או סקס.
          </li>
        </ul>
        <p className="text-2xl text-gray-800 mb-8">
          אתה מוזמן לקבוע שיחה אישית איתי ללא עלות
        </p>
        <a
          href="https://calendly.com/leeyahav018/one-on-one"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-green-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-green-600 transition duration-300"
        >
          קביעת שיחה ללא עלות{" "}
        </a>
      </section>
    </div>
  );
};

export default Home;
