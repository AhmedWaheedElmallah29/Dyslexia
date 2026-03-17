import { mockData } from "../data/mockData";

export default function LettersPractice() {
  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        حروف تحتاج للتدريب أكثر
      </h2>
      <div className="flex justify-between gap-6">
        {mockData.lettersToPractice.map((letter, index) => (
          <div
            key={index}
            className="w-65.25 h-44.5 bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-[48px] font-bold text-black"
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
