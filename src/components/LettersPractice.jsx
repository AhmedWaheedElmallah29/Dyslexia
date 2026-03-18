export default function LettersPractice({ letters }) {
  const safeLetters = letters || [];

  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        حروف تحتاج للتدريب أكثر
      </h2>

      {safeLetters.length === 0 ? (
        <div className="w-full h-44.5 bg-[#F0FDF4] border border-[#00C950] rounded-[30px] flex items-center justify-center">
          <span className="text-[24px] font-bold text-[#00C950]">
            ممتاز! لا يوجد حروف تحتاج لتدريب إضافي هذا الأسبوع 🌟
          </span>
        </div>
      ) : (
        <div className="flex justify-between gap-6">
          {safeLetters.map((letter) => (
            <div
              key={letter}
              className="w-65.25 h-44.5 bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-[48px] font-bold text-black transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg "
            >
              {letter}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
