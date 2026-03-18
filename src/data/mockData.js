const historicalData = [
  {
    name: "أول تقييم",
    reading: 20,
    writing: 10,
    focus: 30,
    weakLetters: ["أ", "ب", "ت", "ث", "ج"],
  },
  {
    name: "المنتصف",
    reading: 45,
    writing: 15,
    focus: 40,
    weakLetters: ["ب", "ت", "ج"],
  },
  {
    name: "آخر تقييم",
    reading: 70,
    writing: 70,
    focus: 90,
    weakLetters: ["ب", "ع"],
  },
];

const count = historicalData.length;

const totals = historicalData.reduce(
  (acc, curr) => ({
    reading: acc.reading + curr.reading,
    writing: acc.writing + curr.writing,
    focus: acc.focus + curr.focus,
  }),
  { reading: 0, writing: 0, focus: 0 },
);

const averages = {
  reading: totals.reading / count,
  writing: totals.writing / count,
  focus: totals.focus / count,
};

const latestEvaluation = historicalData[count - 1];
const childName = "عمر";

const generateDynamicAlerts = (evaluation, name) => {
  const alerts = [
    { type: "info", message: `يحتاج ${name} إلى 15 دقيقة تدريب يوميًا 💙` },
  ];

  const categories = [
    { key: "writing", label: "الكتابة" },
    { key: "reading", label: "القراءة" },
    { key: "focus", label: "التركيز" },
  ];

  categories.forEach((cat) => {
    if (evaluation[cat.key] < 50) {
      alerts.push({
        type: "warning",
        message: `مستوى ${cat.label} يحتاج إلى مزيد من الدعم والتحسين.`,
      });
    }
  });

  if (categories.every((cat) => evaluation[cat.key] >= 50)) {
    alerts.push({
      type: "success",
      message: `أداء ${name} ممتاز هذا الأسبوع! استمروا على هذا المجهود الرائع 🌟`,
    });
  }

  return alerts;
};

export const mockData = {
  parentName: "أم عمر",
  childName: childName,
  age: 6,
  lastEvaluation: "1 مارس 2026",

  chartData: historicalData,

  stats: {
    reading: {
      title: "مستوى القراءة",
      percentage: averages.reading.toFixed(0),
    },
    writing: {
      title: "مستوى الكتابة",
      percentage: averages.writing.toFixed(0),
    },
    focus: { title: "مستوى التركيز", percentage: averages.focus.toFixed(0) },
  },

  activities: [
    { id: 1, type: "writing", text: "تمرين كتابة حرف ب" },
    { id: 2, type: "listening", text: "تمرين استماع ونطق لحرف أ" },
  ],

  lettersToPractice: latestEvaluation.weakLetters,

  alerts: generateDynamicAlerts(averages, childName),
};
