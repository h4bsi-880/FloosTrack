import "../styles/balance.css";

export default function BalanceCard({ amount }) {
  return (
    <div className="balance-card">
      <p className="balance-label">Total Balance</p>
      <h1 className="balance-amount">{amount} OMR</h1>
    </div>
  );
}