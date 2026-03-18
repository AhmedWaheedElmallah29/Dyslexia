import { useState, useEffect } from "react";
import StatsOverview from "../components/StatsOverview";
import HeaderBanner from "../components/HeaderBanner";
import ProgressChart from "../components/ProgressChart";
import LettersPractice from "../components/LettersPractice";
import AlertsSection from "../components/AlertsSection";
import RecommendedActivities from "../components/RecommendedActivities";
import FooterBanner from "../components/FooterBanner";
import { mockData } from "../data/mockData";
import { Loader2, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);

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

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px]">
        <Loader2 className="w-16 h-16 text-[#00C950] animate-spin mb-4" />
        <h2 className="text-2xl font-bold text-gray-700">
          جاري تحميل بيانات البطل...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px]">
        <div className="bg-[#FEF2F2] p-8 rounded-[30px] border border-[#FB2C36] flex flex-col items-center">
          <AlertTriangle className="w-16 h-16 text-[#FB2C36] mb-4" />
          <h2 className="text-2xl font-bold text-[#FB2C36] mb-2">
            عذراً، حدث خطأ!
          </h2>
          <p className="text-lg text-red-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-[#FB2C36] text-white rounded-full font-bold hover:bg-red-600 transition"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  // رجعتلك الـ Layout بتاعك الأصلي بدون تدخل في الخلفيات
  return (
    <>
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
    </>
  );
}
