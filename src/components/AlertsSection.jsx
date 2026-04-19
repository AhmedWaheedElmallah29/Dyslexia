import { Bell, AlertCircle, CheckCircle } from "lucide-react";

export default function AlertsSection({ alerts }) {
  if (!alerts || alerts.length === 0) {
    return null;
  }

  const getAlertConfig = (type) => {
    switch (type) {
      case "info":
        return {
          bg: "bg-[#E1F1FF]",
          border: "border-[#6E9CFF]",
          text: "text-[#001EFF]",
          Icon: Bell,
        };
      case "warning":
        return {
          bg: "bg-[#FEF2F2]",
          border: "border-[#FB2C36]",
          text: "text-[#FB2C36]",
          Icon: AlertCircle,
        };
      case "success":
        return {
          bg: "bg-[#F0FDF4]",
          border: "border-[#00C950]",
          text: "text-[#00C950]",
          Icon: CheckCircle,
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-700",
          Icon: Bell,
        };
    }
  };

  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">تنبيهات مهمة</h2>
      <div className="space-y-6">
        {alerts.map((alert, index) => {
          const { bg, border, text, Icon } = getAlertConfig(alert.type);

          return (
            <div
              key={index}
              className={`min-h-23.25 py-4 md:py-0 md:h-23.25 ${bg} border ${border} rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center px-6 md:px-8 gap-4 transition-transform duration-300 hover:scale-[1.01]`}
            >
              <Icon
                className={`w-8 h-8 shrink-0 md:w-8.75 md:h-8.75 ${text}`}
              />
              <span
                className={`text-lg md:text-[24px] font-medium leading-tight ${text}`}
              >
                {alert.message}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
