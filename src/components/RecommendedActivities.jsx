import { Volume2, Edit3, BookOpen, Star } from "lucide-react";

export default function RecommendedActivities({ activities }) {
  const getIcon = (type) => {
    switch (type) {
      case "writing":
        return Edit3;
      case "listening":
        return Volume2;
      case "reading":
        return BookOpen;
      default:
        return Star;
    }
  };

  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        الأنشطة الموصى بها
      </h2>

      {/* التعديل هنا: 
          تم إضافة py-4 (مساحة من فوق وتحت) 
          و px-2 (مساحة من الجناب عشان الـ shadow ميتوصش) 
      */}
      <div className="flex flex-col md:flex-row md:overflow-x-auto gap-4 md:gap-6 py-4 px-2">
        {activities &&
          activities.map((activity) => {
            const IconComponent = getIcon(activity.type);

            return (
              <button
                key={activity.id}
                className="flex-1 h-20 md:h-23.25 min-w-50 shrink-0 bg-[#E1F1FF] border border-[#6E9CFF] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-4 hover:bg-blue-100 transition duration-300 hover:-translate-y-1"
              >
                <IconComponent className="w-8 h-8 md:w-10.25 md:h-10.25 text-black" />
                <span className="text-xl md:text-[24px] font-medium text-black">
                  {activity.text}
                </span>
              </button>
            );
          })}
      </div>
    </div>
  );
}
