import { Volume2, Edit3 } from "lucide-react";

export default function RecommendedActivities() {
  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        الأنشطة الموصى بها
      </h2>
      <div className="flex gap-6">
        <button className="flex-1 h-23.25 bg-[#E1F1FF] border border-[#6E9CFF] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-4 hover:bg-blue-100 transition">
          <Edit3 className="w-10.25 h-10.25 text-black" />
          <span className="text-[24px] font-medium text-black">
            تمرين كتابة حرف ب
          </span>
        </button>
        <button className="flex-1 h-23.25 bg-[#E1F1FF] border border-[#6E9CFF] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center gap-4 hover:bg-blue-100 transition">
          <Volume2 className="w-12.25 h-12.25 text-black" />
          <span className="text-[24px] font-medium text-black">
            تمرين استماع ونطق لحرف ب
          </span>
        </button>
      </div>
    </div>
  );
}
