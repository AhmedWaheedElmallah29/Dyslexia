import { Volume2, Edit3, BookOpen, Star } from "lucide-react";

export default function RecommendedActivities({ activities }) {
  // دالة صغيرة بتختار الأيقونة بناءً على نوع النشاط اللي جاي من السيرفر
  const getIcon = (type) => {
    switch (type) {
      case "writing":
        return Edit3;
      case "listening":
        return Volume2;
      case "reading":
        return BookOpen;
      default:
        return Star; // أيقونة افتراضية لأي نشاط جديد
    }
  };

  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        الأنشطة الموصى بها
      </h2>
      <div className="flex gap-6">
        {/* بنلف على الأنشطة اللي الباك إند بعتها ونرسمها */}
        {activities &&
          activities.map((activity) => {
            const IconComponent = getIcon(activity.type); // بنجيب الأيقونة المناسبة

            return (
              <button
                key={activity.id}
                className="flex-1 h-23.25 bg-[#E1F1FF] border border-[#6E9CFF] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-4 hover:bg-blue-100 transition duration-300 hover:-translate-y-1"
              >
                {/* رسمنا الأيقونة */}
                <IconComponent className="w-10.25 h-10.25 text-black" />
                {/* رسمنا النص اللي جاي من الباك إند زي ما هو */}
                <span className="text-[24px] font-medium text-black">
                  {activity.text}
                </span>
              </button>
            );
          })}
      </div>
    </div>
  );
}
