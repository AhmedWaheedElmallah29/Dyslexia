import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function ProgressChart({ data }) {
  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        تتبع التقدم خلال هذا الأسبوع
      </h2>
      <div className="h-72 w-full bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-8">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
          minHeight={0}
        >
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eee"
            />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 20, fill: "#000", fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
              padding={{ left: 30, right: 4 }}
            />

            <YAxis
              tick={{ fontSize: 20, fill: "#000" }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              tickMargin={15}
              width={10}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "15px",
                border: "none",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                direction: "rtl",
                textAlign: "right",
              }}
              formatter={(value, name) => [`${value}%`, name]}
            />

            <Legend verticalAlign="top" height={40} iconType="circle" />

            <Line
              type="monotone"
              dataKey="reading"
              name="القراءة"
              stroke="#00C950"
              strokeWidth={4}
              dot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="writing"
              name="الكتابة"
              stroke="#FB2C36"
              strokeWidth={4}
              dot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="focus"
              name="التركيز"
              stroke="#FA9927"
              strokeWidth={4}
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
