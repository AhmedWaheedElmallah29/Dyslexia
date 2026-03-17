import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Bell, AlertCircle, Volume2, Edit3 } from "lucide-react";

// الداتا الثابتة (Mock Data)
const mockData = {
  parentName: "أم عمر",
  childName: "عمر",
  age: 6,
  lastEvaluation: "1 مارس 2026",
  stats: {
    reading: {
      title: "مستوى القراءة",
      percentage: 70,
      status: "جيد",
      bgColor: "bg-[#F0FDF4]",
      borderColor: "border-[#00C950]",
      textColor: "text-[#00C950]",
      barColor: "bg-[#00C950]",
    },
    writing: {
      title: "مستوى الكتابة",
      percentage: 20,
      status: "يحتاج دعم",
      bgColor: "bg-[#FEF2F2]",
      borderColor: "border-[#FB2C36]",
      textColor: "text-[#FB2C36]",
      barColor: "bg-[#FB2C36]",
    },
    focus: {
      title: "مستوى التركيز",
      percentage: 50,
      status: "متوسط",
      bgColor: "bg-[#FEFCE8]",
      borderColor: "border-[#F0B100]",
      textColor: "text-[#FA9927]",
      barColor: "bg-[#F0B100]",
    },
  },
  chartData: [
    { name: "أول تقييم", reading: 20, writing: 10, focus: 30 },
    { name: "المنتصف", reading: 45, writing: 15, focus: 40 },
    { name: "أخر تقييم", reading: 70, writing: 20, focus: 50 },
  ],
  lettersToPractice: ["ب", "ع", "ن", "س"],
};

// Component الكارت الصغير
const StatCard = ({
  title,
  percentage,
  status,
  bgColor,
  borderColor,
  textColor,
  barColor,
}) => (
  <div
    className={`h-[218px] p-6 rounded-[30px] border flex flex-col items-center justify-between ${bgColor} ${borderColor} shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
  >
    <h3 className="text-2xl font-bold text-black mt-2">{title}</h3>
    <div className="w-[293px] bg-[#E5E7EB] rounded-full h-[16px] relative">
      <div
        className={`absolute top-0 right-0 h-[16px] rounded-full ${barColor}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
    <div
      className={`flex justify-between w-full text-2xl font-medium px-4 mb-2 ${textColor}`}
    >
      <span>{percentage}%</span>
      <span>{status}</span>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    // الخلفية الرئيسية للموقع
    <div
      className="min-h-screen bg-[#FAEFE4] py-16 font-sans text-right"
      dir="rtl"
    >
      {/* الحاوية الأساسية بعرض 1116px زي التصميم */}
      <div className="max-w-[1116px] mx-auto space-y-12">
        {/* Header - كارت الترحيب */}
        <div className="h-[218px] bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center p-10 gap-8 relative">
          <div className="w-[129px] h-[194px] rounded-full border border-[#00C950] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden absolute right-[19px] top-[12px]">
            {/* صورة الطفل */}
            <img
              src="/avatar-placeholder.png"
              alt="Avatar"
              className="w-full h-full object-cover bg-green-100"
            />
          </div>
          <div className="mr-[180px]">
            {" "}
            {/* مسافة عشان الصورة */}
            <h1 className="text-[36px] font-bold text-black leading-[44px]">
              مرحباً بك {mockData.parentName} في رحلة تقدّم {mockData.childName}{" "}
              🌱
              <br />
              <span className="text-2xl font-normal text-gray-700 mt-2 block">
                العمر: {mockData.age} سنوات | آخر تقييم:{" "}
                {mockData.lastEvaluation}
              </span>
            </h1>
          </div>
        </div>

        {/* Stats Section */}
        <div>
          <h2 className="text-[24px] font-bold text-black mb-6">
            نظرة عامة على الأداء خلال هذا الأسبوع
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <StatCard {...mockData.stats.reading} />
            <StatCard {...mockData.stats.writing} />
            <StatCard {...mockData.stats.focus} />
          </div>
        </div>

        {/* Chart Section */}
        <div>
          <h2 className="text-[24px] font-bold text-black mb-6">
            تتبع التقدم خلال هذا الأسبوع
          </h2>
          <div className="h-[288px] w-full bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#eee"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 20, fill: "#000", fontWeight: 500 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 20, fill: "#000" }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <Line
                  type="monotone"
                  dataKey="reading"
                  stroke="#00C950"
                  strokeWidth={4}
                  dot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="writing"
                  stroke="#FB2C36"
                  strokeWidth={4}
                  dot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="focus"
                  stroke="#FA9927"
                  strokeWidth={4}
                  dot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Letters Practice */}
        <div>
          <h2 className="text-[24px] font-bold text-black mb-6">
            حروف تحتاج للتدريب أكثر
          </h2>
          <div className="flex justify-between gap-6">
            {mockData.lettersToPractice.map((letter, index) => (
              <div
                key={index}
                className="w-[261px] h-[178px] bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-[48px] font-bold text-black"
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div>
          <h2 className="text-[24px] font-bold text-black mb-6">
            تنبيهات مهمة
          </h2>
          <div className="space-y-6">
            <div className="h-[93px] bg-[#E1F1FF] border border-[#6E9CFF] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center px-8 gap-4">
              <Bell className="w-[35px] h-[35px] text-[#001EFF]" />
              <span className="text-[24px] font-medium text-[#001EFF]">
                يحتاج {mockData.childName} إلى 15 دقيقة تدريب يوميًا 💙
              </span>
            </div>
            <div className="h-[93px] bg-[#FEF2F2] border border-[#FB2C36] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center px-8 gap-4">
              <AlertCircle className="w-[35px] h-[35px] text-[#FB2C36]" />
              <span className="text-[24px] font-medium text-[#FB2C36]">
                مستوى الكتابة يحتاج إلى مزيد من الدعم والتحسين.
              </span>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div>
          <h2 className="text-[24px] font-bold text-black mb-6">
            الأنشطة الموصى بها
          </h2>
          <div className="flex gap-6">
            <button className="flex-1 h-[93px] bg-[#E1F1FF] border border-[#6E9CFF] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-4 hover:bg-blue-100 transition">
              <Edit3 className="w-[41px] h-[41px] text-black" />
              <span className="text-[24px] font-medium text-black">
                تمرين كتابة حرف ب
              </span>
            </button>
            <button className="flex-1 h-[93px] bg-[#E1F1FF] border border-[#6E9CFF] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-4 hover:bg-blue-100 transition">
              <Volume2 className="w-[49px] h-[49px] text-black" />
              <span className="text-[24px] font-medium text-black">
                تمرين استماع ونطق لحرف ب
              </span>
            </button>
          </div>
        </div>

        {/* Footer Banner */}
        <div
          className="h-[93px] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(90deg, #E4CFFF 33.17%, #C6E7FF 50%, #B7F3FF 83.29%, #A8FFFF 100%)",
          }}
        >
          <span className="text-[36px] font-medium text-black">
            خطوات صغيرة يوميًا = تقدم كبير ✨
          </span>
        </div>
      </div>
    </div>
  );
}
