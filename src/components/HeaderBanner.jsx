export default function HeaderBanner({
  parentName,
  childName,
  age,
  lastEvaluation,
}) {
  return (
    <div className="min-h-[160px] md:h-54.5 bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-10 gap-6 md:gap-8 text-center md:text-right">
      <div className="flex-1">
        <h1 className="text-2xl md:text-[36px] font-bold text-black leading-snug md:leading-11">
          مرحباً بك {parentName} في رحلة تقدّم {childName} 🌱
          <br className="hidden md:block" />
          <span className="text-lg md:text-2xl font-normal text-gray-700 mt-2 md:mt-4 block">
            العمر: {age} سنوات | آخر تقييم: {lastEvaluation}
          </span>
        </h1>
      </div>

      <div className="w-24 h-24 md:w-32.25 md:h-48.5 rounded-full border border-[#00C950] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden shrink-0">
        <img
          src="./image1.jpg"
          alt="Avatar"
          className="w-full h-full object-cover bg-green-100"
        />
      </div>
    </div>
  );
}
