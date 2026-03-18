import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div
      className="min-h-screen bg-[#FAEFE4] flex flex-col items-center justify-center font-sans text-right"
      dir="rtl"
    >
      <Loader2 className="w-16 h-16 text-[#00C950] animate-spin mb-6" />
      <h2 className="text-[24px] font-bold text-black">
        جاري تحميل بيانات ...
      </h2>
    </div>
  );
}
