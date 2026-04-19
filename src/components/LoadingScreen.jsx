import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div
      className="min-h-screen bg-[#FAEFE4] flex flex-col items-center justify-center font-sans text-right"
      dir="rtl"
    >
      <Loader2 className="w-12 h-12 md:w-16 md:h-16 text-[#00C950] animate-spin mb-4 md:mb-6" />
      <h2 className="text-xl md:text-[24px] font-bold text-black text-center px-4">
        جاري تحميل بيانات ...
      </h2>
    </div>
  );
}
