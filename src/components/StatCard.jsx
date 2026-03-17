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
    className={`h-54.5 p-6 rounded-[30px] border flex flex-col items-center justify-between ${bgColor} ${borderColor} shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
  >
    <h3 className="text-2xl font-bold text-black mt-2">{title}</h3>
    <div className="w-73.25 bg-[#E5E7EB] rounded-full h-4 relative">
      <div
        className={`absolute top-0 right-0 h-4 rounded-full ${barColor}`}
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

export default StatCard;
