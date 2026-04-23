export default function LettersPractice({ letters }) {
  if (!letters || letters.length === 0) return null;

  return (
    <div className="w-full">
      <h2 className="text-[20px] md:text-[24px] font-bold text-black mb-4 md:mb-6 text-right">
        حروف تحتاج للتدريب أكثر
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] md:rounded-[30px] shadow-[0_4px_8px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center justify-center py-6 md:py-10 px-2"
          >
            <span className="text-3xl md:text-[50px] font-bold text-black text-center">
              {letter}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
