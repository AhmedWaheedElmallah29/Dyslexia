import HeaderBanner from "../components/HeaderBanner";
import StatsOverview from "../components/StatsOverview";
import ProgressChart from "../components/ProgressChart";
import LettersPractice from "../components/LettersPractice";
import AlertsSection from "../components/AlertsSection";
import RecommendedActivities from "../components/RecommendedActivities";
import FooterBanner from "../components/FooterBanner";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen bg-[#FAEFE4] py-16 font-sans text-right"
      dir="rtl"
    >
      <div className="max-w-279 mx-auto space-y-12">
        <HeaderBanner />
        <StatsOverview />
        <ProgressChart />
        <LettersPractice />
        <AlertsSection />
        <RecommendedActivities />
        <FooterBanner />
      </div>
    </div>
  );
}
