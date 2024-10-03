// pages/index.tsx

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Attention Section */}
      <section className="bg-white shadow-md p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h1 className="text-5xl font-bold mb-6 text-red-600">
          מתקשה לתקשר עם נשים? מרגיש לא מספיק טוב?
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          אולי אתה מאמין באחד או יותר מהדברים הבאים:
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          מאמין שנשים לא אוהבות שמפריעים להן?
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          מאמין שאתה לא שווה מספיק או שאין לך את מה שנדרש כדי להצליח עם נשים?
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          מאמין שאין לך על מה לדבר איתה או שהשיחה נתקעת אחרי 2 דקות?
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          מאמין שקשה לנהל שיחה עם בחורה, כי צריך להיות ממש מעניין ולהרשים אותה?
          עצם המחשבה על כך משתקת אותך?
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          מאמין שאם תקבל דחייה, זה יפגע בביטחון שלך? ?
        </p>
        <p className=" text-xl text-gray-700 mb-4">
          חושש שהפחד מדחייה יהרוס לך את הביטחון עוד יותר, וימנע ממך לפנות לנשים
          בעתיד
        </p>
        <p className="text-2xl text-gray-700 mt-8">
          אם אחד או יותר מהפחדים האלו מונעים ממך לפעול, הגיע הזמן לשנות את זה.
          אפשר להתגבר על האמונות האלו ולבנות ביטחון אמיתי!
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
          אתה לא מפחד מהדחיות. כי במקום להרגיש כישלון – אתה רואה כל דחייה
          כהזדמנות ללמוד ולהשתפר
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
        <h2 className="text-4xl font-bold mb-6 text-yellow-600">
          תשיג את התוצאות שאתה רוצה
        </h2>
        <p className="text-2xl text-gray-700 mb-8">
          אתה יכול להפוך לגבר שיודע לפנות לנשים בביטחון, להוביל את השיחות
          למקומות שאתה רוצה ולהרגיש בנוח בכל שלב.
        </p>
        <div className="text-left">
          <ul className="text-xl text-gray-700 list-disc list-inside space-y-4">
            <li>מתחיל עם נשים בצורה מהירה ופשוטה, מבלי להרגיש לחץ או מבוכה.</li>
            <li>
              מקדם שיחות בצורה כיפית, קלילה ומשלבת הומור, כך שהשיחה לא מרגישה
              מאולצת.
            </li>
            <li>יוצא לדייטים עם נשים איכותיות שבאמת מתאימות לך, בלי להתפשר.</li>
            <li>
              מקדם דייטים לכיוון זוגיות או קשר אינטימי לפי העדפות שלך, מבלי
              להרגיש מחויב למשהו שאתה לא רוצה.
            </li>
            <li>
              יודע לפנות לנשים שאתה אוהב בכל סיטואציה – בקניון, ברכבת, או אפילו
              תוך כדי שגרת היום-יום שלך.
            </li>
            <li>
              מוביל את השיחה למקומות אינטימיים יותר כמו מגע, נשיקה או סקס, בצורה
              מכבדת וכנה.
            </li>
          </ul>
        </div>
        <p className="text-2xl text-gray-700 mt-8">
          כשיש לך את היכולות הנכונות ואת הכלים המתאימים, אתה יכול להפוך כל
          אינטראקציה לחוויה חיובית ולהגיע לקשרים שאתה באמת רוצה.
        </p>
      </section>

      {/* Action Section */}
      <section className="bg-green-50 shadow-md p-8 rounded-lg w-full max-w-3xl text-center my-10">
        <h2 className="text-4xl font-bold mb-6 text-green-600">
          בוא נתחיל את השינוי כבר עכשיו
        </h2>
        <p className="text-2xl text-gray-700 mb-8">
          אם אתה רוצה לגלות ביחד איתי איך אתה יכול לעשות את השינוי בראש שיאפשר
          לך להגיע לתוצאות האלו, אתה מוזמן לקבוע איתי שיחה אישית. ביחד ננתח
          ונבדוק כיצד השיטה שלי יכולה לעזור לך להשיג את הקשרים שאתה באמת רוצה.
        </p>
        <p className="text-2xl text-gray-700 mb-8">
          תפסיק לחכות שהדברים יקרו מעצמם – הגיע הזמן לקחת את השליטה לידיים שלך
          ולהפוך לגבר שמצליח עם נשים בביטחון!
        </p>
        <a
          // href="https://calendly.com/leeyahav018/consultation"
          href="https://calendly.com/leeyahav018/one-on-one"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-green-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-green-600 transition duration-300"
        >
          קבע שיחת ייעוץ חינם עכשיו
        </a>
      </section>
    </div>
  );
};

export default Home;
