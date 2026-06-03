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
      <div className="h-[300px] md:h-[400px] w-full bg-white rounded-[30px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-4 md:p-8">
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
              dataKey="evaluationName"
              tick={(props) => (
                <text
                  x={props.x}
                  y={props.y}
                  dy={16}
                  textAnchor="middle"
                  className="fill-black font-medium text-[12px] md:text-[20px]"
                >
                  {props.payload.value}
                </text>
              )}
              axisLine={false}
              tickLine={false}
              padding={{ left: 30, right: 4 }}
            />

            <YAxis
              tick={(props) => (
                <text
                  x={props.x}
                  y={props.y}
                  dx={-15}
                  textAnchor="end"
                  className="fill-black text-[12px] md:text-[20px]"
                >
                  {`${props.payload.value}%`}
                </text>
              )}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              width={50}
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

            <Legend
              verticalAlign="top"
              height={40}
              iconType="circle"
              formatter={(value) => (
                <span className="text-sm md:text-base text-black mr-2 font-medium">
                  {value}
                </span>
              )}
            />

            <Line
              type="monotone"
              dataKey="reading"
              name="القراءة"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />

            <Line
              type="monotone"
              dataKey="writing"
              name="الكتابة"
              stroke="#EF4444"
              strokeWidth={3}
              dot={{ r: 7, strokeWidth: 2 }}
              activeDot={{ r: 9 }}
            />

            <Line
              type="monotone"
              dataKey="performance"
              name="الأداء"
              stroke="#F59E0B"
              strokeWidth={3}
              strokeDasharray="8 8"
              dot={{ r: 4, strokeWidth: 2, strokeDasharray: "0" }}
              activeDot={{ r: 6, strokeDasharray: "0" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
