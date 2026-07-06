import { TrendingUp, TrendingDown } from "lucide-react";
import "../styles/summary.css";

export default function SummaryCard({ title, amount, type }) {
  const Icon = type === "income" ? TrendingUp : TrendingDown;

  return (
    <div className={`summary-card ${type}`}>
      <div className="summary-title-row">
        <Icon size={16} className="summary-icon" />
        <p className="summary-title">{title}</p>
      </div>
      <h2 className="summary-amount">{amount} OMR</h2>
    </div>
  );
}
