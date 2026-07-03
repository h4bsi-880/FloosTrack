import "../styles/summary.css";

export default function SummaryCard({ title, amount, type }) {
  return (
    <div className={`summary-card ${type}`}>
      <p className="summary-title">{title}</p>
      <h2 className="summary-amount">{amount} OMR</h2>
    </div>
  );
}