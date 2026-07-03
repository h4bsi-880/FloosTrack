import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import "../styles/chart.css";

const COLORS = ["#6d5df6", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4", "#ec4899", "#84cc16"];

export default function CategoryChart({ transactions }) {
  const expenseData = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      expenseData[t.category] = (expenseData[t.category] || 0) + t.amount;
    });

  const data = Object.entries(expenseData).map(([name, value]) => ({ name, value }));

  if (data.length === 0) {
    return (
      <div className="chart-card">
        <h2>Spending by Category</h2>
        <p className="empty">No expenses yet...</p>
      </div>
    );
  }

  return (
    <div className="chart-card">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${value.toFixed(3)} OMR`}
            contentStyle={{ background: "#151c2c", border: "1px solid #24304a", borderRadius: 10 }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}