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
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {safeLetters.map((letter) => (
            <div
              key={letter}
              className="bg-white rounded-[30px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-gray-100 h-32 w-32 md:h-44.5 md:flex-1 md:min-w-[200px] flex items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg "
            >
              <div className="text-6xl md:text-[96px] font-bold text-black">{letter}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
