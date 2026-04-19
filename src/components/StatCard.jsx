export default function StatCard({ title, percentage }) {
  const getCardStyle = (percent) => {
    if (percent >= 70) {
      return {
        status: "جيد",
        bgColor: "bg-[#F0FDF4]",
        borderColor: "border-[#00C950]",
        textColor: "text-[#00C950]",
        barColor: "bg-[#00C950]",
      };
    } else if (percent >= 50) {
      return {
        status: "متوسط",
        bgColor: "bg-[#FEFCE8]",
        borderColor: "border-[#F0B100]",
        textColor: "text-[#FA9927]",
        barColor: "bg-[#F0B100]",
      };
    } else {
      return {
        status: "يحتاج دعم",
        bgColor: "bg-[#FEF2F2]",
        borderColor: "border-[#FB2C36]",
        textColor: "text-[#FB2C36]",
        barColor: "bg-[#FB2C36]",
      };
    }
  };

  const { status, bgColor, borderColor, textColor, barColor } =
    getCardStyle(percentage);

  return (
    <div
      className={`h-auto min-h-40 md:h-54.5 p-4 md:p-6 rounded-[30px] border flex flex-col items-center justify-between gap-4 ${bgColor} ${borderColor} shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
    >
      <h3 className="text-xl md:text-2xl font-bold text-black mt-2">{title}</h3>
      <div className="w-full bg-[#E5E7EB] rounded-full h-4 relative">
        <div
          className={`absolute top-0 right-0 h-4 rounded-full ${barColor} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div
        className={`flex justify-between w-full text-xl md:text-2xl font-medium px-2 md:px-4 mb-2 ${textColor}`}
      >
        <span>{percentage}%</span>
        <span>{status}</span>
      </div>
    </div>
  );
}
