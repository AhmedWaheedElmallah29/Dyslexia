import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { mockData } from "../data/mockData";

export default function ProgressChart() {
  return (
    <div>
      <h2 className="text-[24px] font-bold text-black mb-6">
        تتبع التقدم خلال هذا الأسبوع
      </h2>
      <div className="h-72 w-full bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-8">
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <LineChart data={mockData.chartData}>
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
            />
            <YAxis
              tick={{ fontSize: 20, fill: "#000" }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
            />
            <Line
              type="monotone"
              dataKey="reading"
              stroke="#00C950"
              strokeWidth={4}
              dot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="writing"
              stroke="#FB2C36"
              strokeWidth={4}
              dot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="focus"
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
