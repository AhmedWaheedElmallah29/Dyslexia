import { Bell, AlertCircle, CheckCircle } from "lucide-react";

export default function AlertsSection({ alerts }) {
  // 1. حالة الـ Empty State: لو مفيش تنبيهات خالص، الكومبوننت هيختفي أو يعرض رسالة إيجابية
  if (!alerts || alerts.length === 0) {
    return null; // ممكن نغيرها لكارت أخضر بيقول "كل شيء على ما يرام"
  }

  // 2. الفلتر الذكي: بياخد "نوع" التنبيه ويرجع الأيقونة والألوان المناسبة
  const getAlertConfig = (type) => {
    switch (type) {
      case "info": // للتنبيهات العادية زي وقت التدريب
        return {
          bg: "bg-[#E1F1FF]",
          border: "border-[#6E9CFF]",
          text: "text-[#001EFF]",
          Icon: Bell,
        };
      case "warning": // للتحذيرات زي تراجع المستوى
        return {
          bg: "bg-[#FEF2F2]",
          border: "border-[#FB2C36]",
          text: "text-[#FB2C36]",
          Icon: AlertCircle,
        };
      case "success": // إضافة من عندنا لو حبيت تبعت رسالة تشجيع
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
        {/* 3. الدوران على المصفوفة لرسم التنبيهات أياً كان عددها */}
        {alerts.map((alert, index) => {
          const { bg, border, text, Icon } = getAlertConfig(alert.type);

          return (
            <div
              key={index}
              className={`h-23.25 ${bg} border ${border} rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center px-8 gap-4 transition-transform duration-300 hover:scale-[1.01]`}
            >
              <Icon className={`w-8.75 h-8.75 ${text}`} />
              <span className={`text-[24px] font-medium ${text}`}>
                {alert.message}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
