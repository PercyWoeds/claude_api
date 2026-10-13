"use client";

import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/* DATOS                                                               */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
  "Organización",
  "Espacios de trabajo",
  "Facturación",
  "Límites de frecuencia",
  "Claves de API",
  "Cuentas de servicio",
  "Identidad de carga de trabajo",
  "Retención de datos",
  "Capacidades",
  "Identidad y acceso",
];

type Invoice = {
  date: string;
  type: string;
  number: string;
  status: string;
  cost: string;
  action: boolean;
};

const INVOICES: Invoice[] = [
  { date: "21 ago 2026", type: "Concesión de crédito", number: "XTXYVVMP-0004", status: "Vence el 22 ago 2027", cost: "USD 5.90", action: true },
  { date: "21 ago 2026", type: "Concesión de crédito", number: "XTXYVVMP-0003", status: "Vence el 22 ago 2027", cost: "USD 5.90", action: true },
  { date: "1 jul 2026",  type: "Créditos gratuitos",   number: "-",             status: "Vence el 2 jul 2027",  cost: "USD 0.05", action: false },
  { date: "5 jun 2026",  type: "Concesión de crédito", number: "XTXYVVMP-0002", status: "Vence el 6 jun 2027",  cost: "USD 5.90", action: true },
  { date: "1 may 2026",  type: "Créditos gratuitos",   number: "-",             status: "Vence el 1 jun 2027",  cost: "USD 0.43", action: false },
  { date: "19 abr 2026", type: "Concesión de crédito", number: "XTXYVVMP-0001", status: "Vence el 20 abr 2027", cost: "USD 5.00", action: true },
];

/* ------------------------------------------------------------------ */
/* ICONOS                                                              */
/* ------------------------------------------------------------------ */

const I = {
  panel: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M15 3v18" />
    </svg>
  ),
  back: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  ),
  search: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  grid: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  gear: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  bell: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  doc: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  chev: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  warn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  xcircle: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  ),
  chat: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/* SIDEBAR                                                             */
/* ------------------------------------------------------------------ */
function Sidebar() {
  const [active, setActive] = useState("Facturación");

  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-64 bg-sidebar border-r border-line flex flex-col"
      style={{ zIndex: 30 }}
    >
      {/* Header: logo + toggle */}
      <div className="px-3 pt-3 pb-3 shrink-0">
        <div className="flex items-center justify-between">
          <a className="pl-2 flex items-center" href="#">
            <span className="font-serif text-[16px] leading-none text-ink">
              Claude Console
            </span>
          </a>
          <button
            className="w-8 h-8 rounded flex items-center justify-center text-muted hover:text-ink hover:bg-hoverbg"
            aria-label="Contraer"
          >
            {I.panel}
          </button>
        </div>
      </div>

      {/* Volver a la aplicación */}
      <div className="px-3 h-11 pt-1 pb-2 shrink-0">
        <a
          href="#"
          className="flex h-8 items-center gap-3 rounded px-2 text-[14px] text-ink/70 hover:text-ink hover:bg-hoverbg"
        >
          <span className="shrink-0">{I.back}</span>
          <span className="truncate">Volver a la aplicación</span>
        </a>
      </div>

      {/* Buscador */}
      <div className="px-3 pb-2 shrink-0">
        <button className="flex h-8 w-full items-center gap-2 rounded bg-white border border-line px-2 text-[14px] text-muted hover:border-ink/30">
          <span className="shrink-0">{I.search}</span>
          <span className="flex-1 text-left truncate">Buscar en Console…</span>
          <span className="flex items-center gap-[2px] text-[11px]">
            <kbd className="px-[3px] py-[1px] rounded border border-line bg-sidebar leading-none">Ctrl</kbd>
            <kbd className="px-[3px] py-[1px] rounded border border-line bg-sidebar leading-none">K</kbd>
          </span>
        </button>
      </div>

      {/* Nav — esta parte SÍ hace scroll interno si es necesario */}
      <nav className="flex-1 overflow-y-auto px-3 pb-2 min-h-0">
        <ul className="flex flex-col gap-1">
          <li>
            <a
              href="#"
              className="flex h-9 items-center gap-3 rounded px-2 text-[14px] text-ink/70 hover:bg-hoverbg"
            >
              <span className="shrink-0">{I.grid}</span>
              <span className="truncate flex-1">General</span>
            </a>
          </li>
        </ul>

        {/* Título de sección sin link */}
        <div className="flex h-9 items-center gap-3 px-2 text-[14px] text-ink">
          <span className="shrink-0">{I.gear}</span>
          <span className="truncate font-medium">Configuración de la organización</span>
        </div>

        {/* Sub-items indentados */}
        <ul className="flex flex-col gap-1 mt-1">
          {NAV_ITEMS.map((label) => {
            const isActive = label === active;
            return (
              <li key={label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(label);
                  }}
                  className={`flex h-9 items-center rounded px-2 pl-10 text-[14px] transition ${
                    isActive ? "bg-hoverbg text-ink" : "text-ink/70 hover:bg-hoverbg"
                  }`}
                >
                  <span className="truncate flex-1">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bloque rojo de saldo — fijo abajo del nav */}
      <div className="px-3 pb-3 shrink-0">
        <div className="border border-redborder bg-redbg rounded-md px-3 py-2.5 flex gap-2">
          <span className="shrink-0 mt-[2px] text-redink">{I.warn}</span>
          <p className="text-[12px] leading-[1.35] text-redink">
            Tu saldo es $0.00. Agrega fondos para desarrollar con Console.
          </p>
        </div>
      </div>

      {/* Links inferiores + usuario — pegados al fondo */}
      <div className="flex flex-col gap-1 pt-2 px-3 pb-3 border-t border-line shrink-0">
        <a
          href="#"
          className="flex h-9 items-center gap-3 rounded px-2 text-[14px] text-ink/70 hover:bg-hoverbg"
        >
          <span className="shrink-0">{I.bell}</span>
          <span className="truncate flex-1">Notificaciones</span>
        </a>

        <a
          href="#"
          className="flex h-9 items-center gap-3 rounded px-2 text-[14px] text-ink/70 hover:bg-hoverbg"
        >
          <span className="shrink-0">{I.doc}</span>
          <span className="truncate flex-1">Documentación</span>
        </a>

        <div className="flex h-9 items-center gap-3 rounded px-2 text-[14px] text-ink/70">
          <span className="shrink-0">{I.clock}</span>
          <span className="text-[12px] text-muted">USD 0.00</span>
          <a href="#" className="ml-auto text-[13px] text-blue-600 hover:underline">
            Agregar fondos
          </a>
        </div>

        {/* Usuario */}
        <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-start hover:bg-hoverbg mt-1">
          <div className="w-8 h-8 rounded bg-white border border-line flex items-center justify-center shrink-0 text-ink/70">
            {I.user}
          </div>
          <div className="flex min-w-0 flex-1 flex-col text-[12px] text-muted">
            <span className="truncate text-[14px] text-ink">Percy</span>
            <span className="truncate">Percy's Individual Org</span>
          </div>
          <span className="shrink-0 text-muted">{I.chev}</span>
        </button>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* BANNER ROJO                                                         */
/* ------------------------------------------------------------------ */

function AlertBanner() {
  return (
    <div className="flex items-start gap-2 border border-redborder bg-redbg text-redink rounded-lg px-4 py-3 text-[14px] my-4">
      <span className="shrink-0 mt-0.5">{I.warn}</span>
      <span>Para comenzar a usar la Claude API, compra algunos créditos.</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* SECCIÓN: SALDO DE CRÉDITOS                                          */
/* ------------------------------------------------------------------ */

function CreditBalance() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <div>
        <h2 className="text-ink font-medium text-[16px] mb-1">Saldo de créditos</h2>
        <p className="text-[14px] text-muted">
          Los créditos se usan en la API, Claude Code y el playground. Compra créditos cuando los
          necesites o configura la recarga automática.
        </p>
      </div>

      {/* Tarjeta principal */}
      <div className="border border-line rounded-xl bg-white px-5 py-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-[22px] font-medium">USD 0.00</div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="px-3 py-1.5 text-[14px] border border-line rounded-md hover:bg-bg">
              Configurar recarga automática
            </button>
            <button className="px-3 py-1.5 text-[14px] bg-ink text-white rounded-md hover:bg-black">
              Comprar créditos
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 text-[14px] text-ink/70">
          <span className="text-redink">{I.xcircle}</span>
          La recarga automática está desactivada. Las solicitudes a la API se detendrán cuando se
          agote tu saldo.
        </div>
      </div>

      {/* Tarjeta ventas */}
      <div className="border border-line rounded-xl bg-white px-5 py-5">
        <div className="flex items-center gap-2 text-[14px] text-ink/80">
          {I.chat}
          Comunícate con el equipo de cuentas de Anthropic para pagar a posteriori mediante
          facturación mensual.
        </div>
        <button className="mt-3 px-3 py-1.5 text-[14px] border border-line rounded-md hover:bg-bg">
          Contactar a ventas
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECCIÓN: DETALLES DE PAGO                                           */
/* ------------------------------------------------------------------ */

function PaymentDetails() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-ink font-medium text-[16px] mb-1">Detalles de pago</h2>
          <p className="text-[14px] text-muted">
            Las facturas, las compras de créditos y la recarga automática se cobran al método de
            pago predeterminado. Si ese método se rechaza, la recarga automática puede hacer el
            cargo a otro método de pago guardado.
          </p>
        </div>
        <div className="flex items-start justify-end gap-2">
          <button className="px-3 py-1.5 text-[14px] border border-line rounded-md hover:bg-bg">
            Editar dirección de facturación
          </button>
          <button className="px-3 py-1.5 text-[14px] bg-ink text-white rounded-md hover:bg-black">
            Agregar método de pago
          </button>
        </div>
      </div>

      {/* Dirección */}
      <div>
        <div className="text-[12px] text-muted mb-1">Dirección de facturación</div>
        <div className="text-[14px]">
          <div className="font-medium">Percy's Individual Org</div>
          <div className="text-muted">av conquistadores 1152 · s, LIMA 33 · Perú</div>
        </div>
      </div>

      {/* Método de pago */}
      <div>
        <div className="text-[12px] text-muted mb-2">Método de pago</div>
        <div className="grid grid-cols-2 text-[13px] border-b border-line pb-2 text-muted">
          <span>Método de pago</span>
          <span>Vencimiento</span>
        </div>
        <div className="grid grid-cols-2 text-[14px] py-3 items-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-6 bg-[#1a1f71] rounded text-[10px] font-bold text-white italic">
              VISA
            </span>
            <span>Visa •••• 9942</span>
            <span className="text-[12px] px-2 py-0.5 bg-bluebadge text-blueink rounded">
              Predeterminado
            </span>
          </div>
          <span>11/2030</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECCIÓN: LÍMITES DE GASTO                                           */
/* ------------------------------------------------------------------ */

function SpendingLimits() {
  return (
    <section className="flex flex-col gap-4 py-8">
      <div>
        <h2 className="text-ink font-medium text-[16px] mb-1">Límites de gasto</h2>
        <p className="text-[14px] text-muted">
          Establece un límite de gasto mensual para tu organización y recibe notificaciones a
          medida que te acerques a él.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <div className="flex items-center justify-between text-[14px] mb-2">
            <span className="font-medium">Gastado: USD 0.00</span>
            <span className="text-muted">0% utilizado</span>
          </div>
          <div className="text-[12px] text-muted mb-3">Se restablece el 1 nov 2026 (UTC)</div>
          <div className="h-1.5 bg-line rounded-full overflow-hidden">
            <div className="h-full w-0 bg-ink" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <div>
          <div className="text-[14px] font-medium">Límite de gasto mensual</div>
          <div className="text-[14px] text-muted mt-0.5">USD 200,000</div>
        </div>
        <div className="flex items-start justify-end">
          <button className="px-3 py-1.5 text-[14px] border border-line rounded-md hover:bg-bg">
            Ajustar límite
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <div>
          <div className="text-[14px] font-medium">Notificaciones por correo electrónico</div>
          <p className="text-[14px] text-muted mt-0.5 max-w-lg">
            Recibe notificaciones cuando tu gasto mensual se acerque a un monto que hayas
            establecido.
          </p>
        </div>
        <div className="flex items-start justify-end">
          <button className="px-3 py-1.5 text-[14px] border border-line rounded-md hover:bg-bg whitespace-nowrap">
            Agregar notificación
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECCIÓN: HISTORIAL DE FACTURAS                                      */
/* ------------------------------------------------------------------ */

function InvoiceHistory() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return INVOICES;
    return INVOICES.filter(
      (i) =>
        i.number.toLowerCase().includes(s) ||
        i.date.toLowerCase().includes(s) ||
        i.type.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <section className="flex flex-col gap-4 py-8">
      <div>
        <h2 className="text-ink font-medium text-[16px] mb-1">Historial de facturas</h2>
        <p className="text-[14px] text-muted">
          Las facturas se emiten cuando se compran créditos. Todas las fechas están en UTC.
        </p>
      </div>

      {/* Buscador */}
      <div className="relative max-w-xs">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted">{I.search}</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por número de factura"
          className="w-full text-[14px] bg-white border border-line rounded-md pl-8 pr-3 py-1.5 outline-none focus:border-ink/30"
        />
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="text-left text-muted border-b border-line">
              <th className="font-medium py-2 pr-4 text-[13px]">Fecha</th>
              <th className="font-medium py-2 pr-4 text-[13px]">Tipo de factura</th>
              <th className="font-medium py-2 pr-4 text-[13px]">Número de factura</th>
              <th className="font-medium py-2 pr-4 text-[13px]">Estado</th>
              <th className="font-medium py-2 pr-4 text-[13px] text-right">Costo</th>
              <th className="font-medium py-2 text-[13px] text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inv, i) => (
              <tr key={i} className="border-b border-line last:border-b-0">
                <td className="py-3 pr-4 whitespace-nowrap">{inv.date}</td>
                <td className="py-3 pr-4 whitespace-nowrap">{inv.type}</td>
                <td className="py-3 pr-4 font-mono text-[13px] whitespace-nowrap">{inv.number}</td>
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
                <td colSpan={6} className="py-6 text-center text-[14px] text-muted">
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

/* ------------------------------------------------------------------ */
/* PÁGINA                                                              */
/* ------------------------------------------------------------------ */
export default function Page() {
  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />

      {/* Contenido a la derecha — hace scroll, con margen izquierdo = ancho del sidebar */}
      <main className="ml-64 min-h-screen bg-white">
        <div className="mx-auto w-full max-w-[860px] px-12 py-10">
          <h1 className="text-ink text-[24px] font-medium mb-2">Facturación</h1>

          <AlertBanner />

          <div className="flex flex-col divide-y divide-line">
            <CreditBalance />
            <PaymentDetails />
            <SpendingLimits />
            <InvoiceHistory />
          </div>
        </div>
      </main>
    </div>
  );
}