import { Bell, AlertCircle } from "lucide-react";
import { mockData } from "../data/mockData";

export default function AlertsSection() {
  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        تنبيهات مهمة
      </h2>
      <div className="space-y-6">
        <div className="h-23.25 bg-[#E1F1FF] border border-[#6E9CFF] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center px-8 gap-4">
          <Bell className="w-8.75 h-8.75 text-[#001EFF]" />
          <span className="text-[24px] font-medium text-[#001EFF]">
            يحتاج {mockData.childName} إلى 15 دقيقة تدريب يوميًا 💙
          </span>
        </div>
        <div className="h-23.25 bg-[#FEF2F2] border border-[#FB2C36] rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center px-8 gap-4">
          <AlertCircle className="w-8.75 h-8.75 text-[#FB2C36]" />
          <span className="text-[24px] font-medium text-[#FB2C36]">
            مستوى الكتابة يحتاج إلى مزيد من الدعم والتحسين.
          </span>
        </div>
      </div>
    </div>
  );
}
