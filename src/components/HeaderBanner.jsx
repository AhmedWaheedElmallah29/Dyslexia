import { mockData } from "../data/mockData";

export default function HeaderBanner() {
  return (
    <div className="h-54.5 bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center p-10 gap-8 relative">
      <div className="w-32.25 h-48.5 rounded-full border border-[#00C950] shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden absolute left-4.75 top-3">
        <img
          src="./image1.jpg"
          alt="Avatar"
          className="w-full h-full object-cover bg-green-100"
        />
      </div>
      <div className=" absolute left-119.5">
        <h1 className="text-[36px] font-bold text-black leading-11">
          مرحباً بك {mockData.parentName} في رحلة تقدّم {mockData.childName}
          🌱
          <br />
          <span className="text-2xl font-normal text-gray-700 mt-2 block">
            العمر: {mockData.age} سنوات | آخر تقييم:
            {mockData.lastEvaluation}
          </span>
        </h1>
      </div>
    </div>
  );
}
