type Invoice = { date: string; type: string; number: string; status: string; cost: string; action: "Ver" | "—" };
const invoices: Invoice[] = [
  { date: "21 ago 2026", type: "Concesión de crédito", number: "XTXYVVMP-0004", status: "Vence el 22 ago 2027", cost: "USD 5.90", action: "Ver" },
  { date: "21 ago 2026", type: "Concesión de crédito", number: "XTXYVVMP-0003", status: "Vence el 22 ago 2027", cost: "USD 5.90", action: "Ver" },
  { date: "1 jul 2026", type: "Créditos gratuitos", number: "-", status: "Vence el 2 jul 2027", cost: "USD 0.05", action: "—" },
  { date: "5 jun 2026", type: "Concesión de crédito", number: "XTXYVVMP-0002", status: "Vence el 6 jun 2027", cost: "USD 5.90", action: "Ver" },
  { date: "1 may 2026", type: "Créditos gratuitos", number: "-", status: "Vence el 1 jun 2027", cost: "USD 0.43", action: "—" },
  { date: "19 abr 2026", type: "Concesión de crédito", number: "XTXYVVMP-0001", status: "Vence el 20 abr 2027", cost: "USD 5.00", action: "Ver" },
];
export default function InvoiceTable() {
  return (
    <div className="border border-line rounded-lg overflow-hidden bg-white/60">
      <table className="w-full text-sm">
        <thead className="bg-white/70 text-muted">
          <tr>
            <th className="text-left font-normal px-4 py-3">Fecha</th>
            <th className="text-left font-normal px-4 py-3">Tipo de factura</th>
            <th className="text-left font-normal px-4 py-3">Número de factura</th>
            <th className="text-left font-normal px-4 py-3">Estado</th>
            <th className="text-right font-normal px-4 py-3">Costo</th>
            <th className="text-left font-normal px-4 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, i) => (
            <tr key={i} className="border-t border-line">
              <td className="px-4 py-3 whitespace-nowrap">{inv.date}</td>
              <td className="px-4 py-3 whitespace-nowrap">{inv.type}</td>
              <td className="px-4 py-3 font-mono text-xs whitespace-nowrap">{inv.number}</td>
              <td className="px-4 py-3 text-muted whitespace-nowrap">{inv.status}</td>
              <td className="px-4 py-3 text-right whitespace-nowrap">{inv.cost}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                {inv.action === "Ver"
                  ? <button className="px-3 py-1 border border-line rounded-md text-sm hover:bg-white">Ver</button>
                  : <span className="text-muted">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
