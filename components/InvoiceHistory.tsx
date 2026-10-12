"use client";

import { useMemo, useState } from "react";

type Invoice = {
  date: string;
  type: string;
  number: string;
  status: string;
  cost: string;
  action: boolean; // true => tiene botón "Ver"
};

const invoices: Invoice[] = [
  { date: "21 ago 2026", type: "Concesión de crédito", number: "XTXYVVMP-0004", status: "Vence el 22 ago 2027", cost: "USD 5.90", action: true },
  { date: "21 ago 2026", type: "Concesión de crédito", number: "XTXYVVMP-0003", status: "Vence el 22 ago 2027", cost: "USD 5.90", action: true },
  { date: "1 jul 2026",  type: "Créditos gratuitos",   number: "-",             status: "Vence el 2 jul 2027",  cost: "USD 0.05", action: false },
  { date: "5 jun 2026",  type: "Concesión de crédito", number: "XTXYVVMP-0002", status: "Vence el 6 jun 2027",  cost: "USD 5.90", action: true },
  { date: "1 may 2026",  type: "Créditos gratuitos",   number: "-",             status: "Vence el 1 jun 2027",  cost: "USD 0.43", action: false },
  { date: "19 abr 2026", type: "Concesión de crédito", number: "XTXYVVMP-0001", status: "Vence el 20 abr 2027", cost: "USD 5.00", action: true },
];

export default function InvoiceHistory() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return invoices;
    return invoices.filter(
      (i) =>
        i.number.toLowerCase().includes(s) ||
        i.date.toLowerCase().includes(s) ||
        i.type.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <section className="border-t border-line pt-8">
      <h2 className="text-sm font-semibold mb-1">Historial de facturas</h2>
      <p className="text-sm text-muted mb-4">
        Las facturas se emiten cuando se compran créditos. Todas las fechas están en UTC.
      </p>

      {/* Buscador */}
      <div className="relative max-w-xs mb-4">
        <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por número de factura"
          className="w-full text-sm bg-white border border-line rounded-md pl-8 pr-3 py-1.5 outline-none focus:border-ink/30"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-ink/70 border-b border-line">
              <th className="font-normal py-2 pr-4">Fecha</th>
              <th className="font-normal py-2 pr-4">Tipo de factura</th>
              <th className="font-normal py-2 pr-4">Número de factura</th>
              <th className="font-normal py-2 pr-4">Estado</th>
              <th className="font-normal py-2 pr-4 text-right">Costo</th>
              <th className="font-normal py-2 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inv, i) => (
              <tr key={i} className="border-b border-line last:border-b-0">
                <td className="py-3 pr-4 whitespace-nowrap">{inv.date}</td>
                <td className="py-3 pr-4 whitespace-nowrap">{inv.type}</td>
                <td className="py-3 pr-4 font-mono text-xs whitespace-nowrap">{inv.number}</td>
                <td className="py-3 pr-4 text-muted whitespace-nowrap">{inv.status}</td>
                <td className="py-3 pr-4 text-right whitespace-nowrap">{inv.cost}</td>
                <td className="py-3 text-right whitespace-nowrap">
                  {inv.action ? (
                    <button className="text-blue-600 hover:underline">Ver</button>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="py-6 text-center text-sm text-muted">
                  No se encontraron facturas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}