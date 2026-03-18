import { useState, useEffect } from "react";
import HeaderBanner from "../components/HeaderBanner";
import StatsOverview from "../components/StatsOverview";
import ProgressChart from "../components/ProgressChart";
import LettersPractice from "../components/LettersPractice";
import AlertsSection from "../components/AlertsSection";
import RecommendedActivities from "../components/RecommendedActivities";
import FooterBanner from "../components/FooterBanner";
import LoadingScreen from "../components/LoadingScreen";
import { mockData } from "../data/mockData";
import { AlertTriangle } from "lucide-react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 0));
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
    return <LoadingScreen />;
  }

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

  if (!data) return null;

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
