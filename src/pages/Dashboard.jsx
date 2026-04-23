import { useState, useEffect } from "react";
import axios from "axios";
import logoImage from "../assets/logoImage.png";
import HeaderBanner from "../components/HeaderBanner";
import StatsOverview from "../components/StatsOverview";
import ProgressChart from "../components/ProgressChart";
import LettersPractice from "../components/LettersPractice";
import AlertsSection from "../components/AlertsSection";
import RecommendedActivities from "../components/RecommendedActivities";
import FooterBanner from "../components/FooterBanner";
import LoadingScreen from "../components/LoadingScreen";
import { AlertTriangle } from "lucide-react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const queryParams = new URLSearchParams(window.location.search);
        const urlToken = queryParams.get("token");
        const urlChildId = queryParams.get("childId");

        if (urlToken) {
          localStorage.setItem("token", urlToken);
        }

        const token = urlToken || localStorage.getItem("token");
        const childId = urlChildId || 1;

        if (!token) {
          throw new Error(
            "غير مصرح بالدخول. يرجى الدخول من تطبيق الموبايل أولاً.",
          );
        }

        const response = await axios.get(
          `https://deslexia-desgraphia-production.up.railway.app/submissions/report/${childId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const apiData = response.data.data;

        const formattedData = {
          parentEmail: apiData.parentEmail.split("@")[0],
          childName: apiData.childName,
          age: apiData.age,
          lastEvaluation: apiData.lastEvaluation,
          stats: {
            reading: {
              ...apiData.stats.reading,
              title: "القراءة",
              label: "القراءة",
            },
            writing: {
              ...apiData.stats.writing,
              title: "الكتابة",
              label: "الكتابة",
            },
            focus: {
              ...apiData.stats.listening,
              title: "التركيز",
              label: "التركيز",
            },
          },
          chartData: apiData.chartData,
          lettersToPractice: apiData.lettersToPractice,
          alerts: apiData.alerts.map((alert) => ({
            ...alert,
            message: alert.text,
            title: alert.text,
          })),
          activities: apiData.activities,
        };

        setData(formattedData);
      } catch (err) {
        console.error("API Error:", err);
        setError(
          err.response?.data?.message ||
            err.message ||
            "حدث خطأ في جلب البيانات، يرجى التأكد من اتصالك بالإنترنت.",
        );
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
        className="min-h-screen bg-[#FAEFE4] flex flex-col items-center justify-center font-sans px-4 text-right"
        dir="rtl"
      >
        <div className="w-full max-w-[90%] md:max-w-lg bg-[#FEF2F2] p-6 md:p-8 rounded-[30px] border border-[#FB2C36] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col items-center text-center">
          <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-[#FB2C36] mb-4" />
          <h2 className="text-xl md:text-[24px] font-bold text-[#FB2C36] mb-2 ">
            عذراً، فشل التحميل!
          </h2>
          <p className="text-base md:text-[18px] text-red-700">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 md:px-8 py-3 bg-[#FB2C36] text-white text-sm md:text-base rounded-full font-bold hover:bg-red-600 transition cursor-pointer"
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
      className="min-h-screen bg-[#FAEFE4] pt-4.75 pb-8 md:pb-12 font-sans text-right"
      dir="rtl"
    >
      <div className="max-w-350 mx-auto px-4 md:px-12 w-full space-y-8 md:space-y-12">
        <div className="flex justify-start items-center">
          <img
            src={logoImage}
            alt="شعار حروف"
            className="w-40 md:w-55 h-20 md:h-27.5 object-contain"
          />
        </div>

        <HeaderBanner
          parentName={data.parentEmail}
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
