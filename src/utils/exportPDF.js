import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportToPDF(transactions, summary) {
  if (transactions.length === 0) {
    alert("No transactions to export yet.");
    return;
  }

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setTextColor(109, 93, 246);
  doc.text("FloosTrack", 14, 20);

  doc.setFontSize(11);
  doc.setTextColor(100);
  doc.text(`Generated on ${new Date().toLocaleDateString()}`, 14, 27);

  doc.setFontSize(12);
  doc.setTextColor(0);
  doc.text(`Total Balance: ${summary.balance} OMR`, 14, 38);
  doc.setTextColor(34, 197, 94);
  doc.text(`Income: ${summary.income} OMR`, 14, 45);
  doc.setTextColor(239, 68, 68);
  doc.text(`Expenses: ${summary.expenses} OMR`, 14, 52);

  const rows = transactions.map((t) => [
    new Date(t.id).toLocaleDateString(),
    t.type === "income" ? "Income" : "Expense",
    t.category,
    t.description,
    `${t.type === "income" ? "+" : "-"}${t.amount.toFixed(3)} OMR`,
  ]);

  autoTable(doc, {
    startY: 60,
    head: [["Date", "Type", "Category", "Description", "Amount"]],
    body: rows,
    headStyles: { fillColor: [109, 93, 246] },
    styles: { fontSize: 10 },
  });

  doc.save(`floostrack-transactions-${new Date().toISOString().slice(0, 10)}.pdf`);
}