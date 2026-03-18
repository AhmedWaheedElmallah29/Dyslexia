import StatCard from "./StatCard";
export default function StatsOverview({ stats }) {
  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        نظرة عامة على الأداء خلال هذا الأسبوع
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <StatCard {...stats.reading} />
        <StatCard {...stats.writing} />
        <StatCard {...stats.focus} />
      </div>
    </div>
  );
}
