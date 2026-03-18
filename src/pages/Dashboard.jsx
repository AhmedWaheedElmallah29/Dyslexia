import { useState, useEffect } from "react";
import HeaderBanner from "../components/HeaderBanner";
import StatsOverview from "../components/StatsOverview";
import ProgressChart from "../components/ProgressChart";
import LettersPractice from "../components/LettersPractice";
import AlertsSection from "../components/AlertsSection";
import RecommendedActivities from "../components/RecommendedActivities";
import FooterBanner from "../components/FooterBanner";
import LoadingScreen from "../components/LoadingScreen"; // استدعينا الكومبوننت بتاعك
import { mockData } from "../data/mockData";
import { AlertTriangle } from "lucide-react";

export default function Dashboard() {
  // تعريف الحالات (Loading, Error, Data)
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // محاكاة جلب البيانات
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // محاكاة تحميل لمدة ثانيتين
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setData(mockData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // 1. حالة التحميل: بنعرض الكومبوننت المفصول
  if (isLoading) {
    return <LoadingScreen />;
  }

  // 2. حالة الخطأ: كارت شيك بنفس ألوان الثيم بتاعك عشان لو النت فصل
  if (error) {
    return (
      <div
        className="min-h-screen bg-[#FAEFE4] flex flex-col items-center justify-center font-sans text-right"
        dir="rtl"
      >
        <div className="bg-[#FEF2F2] p-8 rounded-[30px] border border-[#FB2C36] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col items-center max-w-lg text-center">
          <AlertTriangle className="w-16 h-16 text-[#FB2C36] mb-4" />
          <h2 className="text-[24px] font-bold text-[#FB2C36] mb-2">
            عذراً، فشل التحميل!
          </h2>
          <p className="text-[18px] text-red-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-8 py-3 bg-[#FB2C36] text-white rounded-full font-bold hover:bg-red-600 transition"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  // أمان إضافي
  if (!data) return null;

  // 3. حالة النجاح: الكود بتاعك والتنسيق بتاعك بالملي ومفيش فيه أي تغيير
  return (
    <div
      className="min-h-screen bg-[#FAEFE4] py-16 font-sans text-right"
      dir="rtl"
    >
      <div className="max-w-279 mx-auto space-y-12">
        <HeaderBanner
          parentName={data.parentName}
          childName={data.childName}
          age={data.age}
          lastEvaluation={data.lastEvaluation}
        />
        <StatsOverview stats={data.stats} />
        <ProgressChart data={data.chartData} />
        <LettersPractice letters={data.lettersToPractice} />
        <AlertsSection alerts={data.alerts} />
        <RecommendedActivities activities={data.activities} />
        <FooterBanner />
      </div>
    </div>
  );
}
