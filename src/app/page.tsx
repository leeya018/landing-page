// pages/index.tsx

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Attention Section */}
      <section className="bg-white shadow-md p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h1 className="text-5xl font-bold mb-6 text-red-600">
          מתקשה ליצור תקשורת מוצלחת עם נשים? מרגיש לא שווה מספיק?
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          אתה מוצא את עצמך מאמין שאין לך מה להציע לנשים? שאתה לא מספיק טוב, או
          שנשים לא יאהבו שמישהו כמוך יפנה אליהן? אם כן, אתה לא לבד. גברים רבים
          חווים תחושות דומות כאשר הם מנסים ליצור קשרים עם נשים.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          אתה מאמין שאין לך על מה לדבר עם בחורה? שאתה לא מעניין מספיק? אולי אתה
          פוחד מדחייה, או מאמין שאין לך את היכולות להתמודד עם שיחת פנים אל פנים?
          האמונות האלו מונעות ממך ליצור את הקשרים שאתה באמת רוצה.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          אתה חושש שברגע שתיגש לדבר איתה, היא תתעלם, תעשה לך שיימינג ברשתות, או
          תגיד שאתה מטריד אותה? פחדים כאלו עוצרים אותך וגורמים לך להימנע מלפעול.
        </p>
        <p className="text-xl text-gray-700">
          אתה מרגיש שאתה לא מצליח להתקדם? שאתה עומד במקום למרות כל המאמצים? הגיע
          הזמן לעשות שינוי!
        </p>
      </section>

      {/* Interest Section */}
      <section className="bg-blue-50 shadow-md p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h2 className="text-4xl font-bold mb-6">
          אפשר להתחיל לתקשר עם נשים בביטחון וללא מאמץ
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          תאר לעצמך שאתה ניגש לדבר עם בחורה בטעם שלך, אתה מתחיל שיחה כיפית
          וזורמת, ואתה מרגיש בנוח בכל שלב ושלב של התהליך. נשים מחייכות אליך,
          מקשיבות, ואתה מרגיש שייך.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          אתה מסוגל ליצור עניין, להצחיק, להוביל את השיחה, ואפילו להוביל את הקשר
          למקום שאתה רוצה – בין אם זה מערכת יחסים רצינית או חוויה מינית מהנה.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          אתה לא מפחד להפסיק לפעול בגלל הדחיות. במקום להרגיש כישלון – אתה רואה
          כל דחייה כהזדמנות ללמוד ולהשתפר.
        </p>
        <h3 className="text-3xl font-bold mt-6 mb-4">
          תראה איך תוכל לשפר את התקשורת שלך:
        </h3>
        <ul className="text-lg text-gray-700 list-disc list-inside mb-4">
          <li>ליצור שיחות מעניינות שגורמות לנשים לרצות לשמוע עוד.</li>
          <li>לקדם את האינטראקציה בצורה כנה, פתוחה ועם המון הומור.</li>
          <li>
            להרגיש בנוח לפנות לנשים בסיטואציות שונות – בין אם בקניון, בתחנת
            הרכבת או ברחוב.
          </li>
          <li>
            להוביל אינטראקציה מהרגע הראשון למקומות אינטימיים יותר – מגע, נשיקה,
            או סקס.
          </li>
          <li>
            להפוך את השיחות שלכם לעמוקות ומעניינות יותר, כך שתיצור חיבור אמיתי.
          </li>
        </ul>
        <p className="text-xl text-gray-700">
          אתה יכול להפוך לגבר שמושך אליו נשים בטעם שלו בקלות ובמהירות.
        </p>
      </section>

      {/* Desire Section */}
      <section className="bg-yellow-50 shadow-md p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h2 className="text-4xl font-bold mb-6">הנה התוצאות שאתה יכול להשיג</h2>
        <p className="text-xl text-gray-700 mb-4">
          בעזרת השיטה שלנו, תוכל להשיג בהירות לגבי הפחדים שמנהלים אותך וליצור
          תמונה מנטלית ברורה של הרגשות שלך.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          תוכל להבין לעומק את המקור לפחדים שלך וליצור תחושת ביטחון הולכת וגדלה
          שתאפשר לך לגשת לנשים ולהתחיל איתן ללא חשש.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          תראה דחייה כאתגר ולא ככישלון, וכתוצאה מכך תצליח לקדם את האינטראקציות
          שלך לשלבים מתקדמים כמו לקיחת מספר טלפון, קביעת דייט, והובלת הקשר
          לזוגיות.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          נשים ישימו לב אליך יותר, ואתה תרגיש שיש לך שליטה על כל אינטראקציה.
        </p>
        <h3 className="text-3xl font-bold mt-6 mb-4">איך זה ישנה אותך?</h3>
        <ul className="text-lg text-gray-700 list-disc list-inside mb-4">
          <li>תחושת ביטחון מוגברת שתאפשר לך לגשת לנשים בקלות ובמהירות.</li>
          <li>
            יכולת לקדם כל אינטראקציה למקום שאתה רוצה – בין אם זה קשר רציני או
            קשר מיני.
          </li>
          <li>
            היכולת לבחור את הנשים שאתה באמת רוצה, במקום להרגיש שאתה צריך להסתפק.
          </li>
          <li>תחושת שפע שתאפשר לך להרגיש שאתה הבוחר והיא הנבחרת.</li>
          <li>יכולת ליצור קשרים עמוקים ואמיתיים בזכות מי שאתה.</li>
        </ul>
      </section>

      {/* Action Section */}
      <section className="bg-green-50 shadow-md p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h2 className="text-4xl font-bold mb-6">
          בוא נתחיל את השינוי כבר עכשיו
        </h2>
        <p className="text-xl text-gray-700 mb-6">
          אם אתה רוצה לגלות איך אפשר לשנות את הראש ולהגיע לתוצאות האלו, אתה
          מוזמן לקבוע איתי שיחה אישית. ביחד נבדוק כיצד השיטה שלי יכולה לעזור לך
          להשיג את המטרות שאתה רוצה ולהפוך לגבר שמושך אליו נשים בביטחון.
        </p>
        <button className="mt-4 bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 text-xl">
          קבע שיחת ייעוץ חינם
        </button>
      </section>
    </div>
  );
};

export default Home;
