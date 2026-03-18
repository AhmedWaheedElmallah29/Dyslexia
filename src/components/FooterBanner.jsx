export default function FooterBanner() {
  return (
    <div
      className="min-h-[80px] md:h-23.25 rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center p-4 text-center"
      style={{
        background:
          "linear-gradient(90deg, #E4CFFF 33.17%, #C6E7FF 50%, #B7F3FF 83.29%, #A8FFFF 100%)",
      }}
    >
      <span className="text-xl md:text-[36px] font-medium text-black leading-snug">
        خطوات صغيرة يوميًا = تقدم كبير ✨
      </span>
    </div>
  );
}
