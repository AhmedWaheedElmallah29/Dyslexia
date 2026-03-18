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
    reading: 80,
    writing: 80,
    focus: 80,
    weakLetters: ["ب", "ع"],
  },
];

const latestEvaluation = historicalData[historicalData.length - 1];
const childName = "عمر";

const generateDynamicAlerts = (evaluation, name) => {
  const generatedAlerts = [];

  generatedAlerts.push({
    type: "info",
    message: `يحتاج ${name} إلى 15 دقيقة تدريب يوميًا 💙`,
  });

  if (evaluation.writing < 50) {
    generatedAlerts.push({
      type: "warning",
      message: "مستوى الكتابة يحتاج إلى مزيد من الدعم والتحسين.",
    });
  }

  if (evaluation.reading < 50) {
    generatedAlerts.push({
      type: "warning",
      message: "مستوى القراءة يحتاج إلى مزيد من الدعم والتحسين.",
    });
  }

  if (evaluation.focus < 50) {
    generatedAlerts.push({
      type: "warning",
      message: "مستوى التركيز يحتاج إلى مزيد من الدعم والتحسين.",
    });
  }

  if (
    evaluation.writing >= 50 &&
    evaluation.reading >= 50 &&
    evaluation.focus >= 50
  ) {
    generatedAlerts.push({
      type: "success",
      message: `أداء ${name} ممتاز هذا الأسبوع! استمروا على هذا المجهود الرائع 🌟`,
    });
  }

  return generatedAlerts;
};

export const mockData = {
  parentName: "أم عمر",
  childName: childName,
  age: 6,
  lastEvaluation: "1 مارس 2026",

  chartData: historicalData,

  stats: {
    reading: { title: "مستوى القراءة", percentage: latestEvaluation.reading },
    writing: { title: "مستوى الكتابة", percentage: latestEvaluation.writing },
    focus: { title: "مستوى التركيز", percentage: latestEvaluation.focus },
  },
  activities: [
    { id: 1, type: "writing", text: "تمرين كتابة حرف ب" },
    { id: 2, type: "listening", text: "تمرين استماع ونطق لحرف أ" },
  ],

  lettersToPractice: latestEvaluation.weakLetters,

  alerts: generateDynamicAlerts(latestEvaluation, childName),
};
