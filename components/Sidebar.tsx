"use client";

import { useState } from "react";

const navItems = [
  { label: "Organización", icon: null },
  { label: "Espacios de trabajo", icon: null },
  { label: "Facturación", icon: null, active: true },
  { label: "Límites de frecuencia", icon: null },
  { label: "Claves de API", icon: null },
  { label: "Cuentas de servicio", icon: null },
  { label: "Identidad de carga de trabajo", icon: null },
  { label: "Retención de datos", icon: null },
  { label: "Capacidades", icon: null },
  { label: "Identidad y acceso", icon: null },
];

export default function Sidebar() {
  const [active, setActive] = useState("Facturación");

  return (
    <aside className="w-[260px] shrink-0 bg-[#f7f7f4] border-r border-line min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-12 border-b border-line">
        <span className="text-[13px] font-semibold text-ink">Claude Console</span>
        <button className="text-ink/60 hover:text-ink" aria-label="Ocultar">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M15 3v18" />
          </svg>
        </button>
      </div>

      {/* Volver */}
      <button className="flex items-center gap-2 px-4 h-11 text-[13px] text-ink border-b border-line hover:bg-hoverbg">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Volver a la aplicación
      </button>

      {/* Buscador */}
      <div className="px-3 py-2.5 border-b border-line">
        <div className="relative">
          <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            placeholder="Buscar en Console…"
            className="w-full h-8 text-[13px] bg-white border border-line rounded-md pl-8 pr-14 outline-none focus:border-ink/30"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] text-muted">
            <kbd className="px-1.5 py-[1px] bg-[#f7f7f4] border border-line rounded text-[10px] leading-4">Ctrl</kbd>
            <kbd className="px-1.5 py-[1px] bg-[#f7f7f4] border border-line rounded text-[10px] leading-4">K</kbd>
          </span>
        </div>
      </div>

      {/* Nav principal */}
      <nav className="flex-1 overflow-y-auto py-3">
        {/* General */}
        <button className="w-full flex items-center gap-2.5 px-4 h-8 text-[13px] text-ink/80 hover:bg-hoverbg">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          General
        </button>

        {/* Configuración de la organización */}
        <div className="mt-1 flex items-center gap-2.5 px-4 h-8 text-[13px] font-medium text-ink">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          Configuración de la organización
        </div>

        {/* Sub-items alineados a la izquierda (sin sangría extra) */}
        <ul className="mt-1">
          {navItems.map((item) => {
            const isActive = item.label === active;
            return (
              <li key={item.label}>
                <button
                  onClick={() => setActive(item.label)}
                  className={`w-full text-left px-4 h-8 text-[13px] leading-8 truncate transition ${
                    isActive
                      ? "bg-hoverbg text-ink font-medium"
                      : "text-ink/80 hover:bg-hoverbg"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Alerta saldo rojo — pegada al fondo del nav, igual que en la captura */}
      <div className="px-3 pt-3">
        <div className="border border-redborder bg-redbg rounded-md px-3 py-2.5 flex gap-2">
          <svg className="shrink-0 mt-[2px] text-redink" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p className="text-[12px] leading-[1.35] text-redink">
            Tu saldo es $0.00. Agrega fondos para desarrollar con Console.
          </p>
        </div>
      </div>

      {/* Links inferiores */}
      <div className="border-t border-line mt-3">
        <button className="w-full flex items-center gap-2.5 px-4 h-10 text-[13px] text-ink/80 hover:bg-hoverbg">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          Notificaciones
        </button>
        <button className="w-full flex items-center gap-2.5 px-4 h-10 text-[13px] text-ink/80 hover:bg-hoverbg border-t border-line">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Documentación
        </button>
        <div className="flex items-center gap-2.5 px-4 h-10 text-[13px] text-ink/80 border-t border-line">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span className="text-[12px] text-muted">USD 0.00</span>
          <button className="text-[13px] text-blue-600 hover:underline ml-auto">Agregar fondos</button>
        </div>
      </div>

      {/* Usuario */}
      <div className="border-t border-line">
        <button className="w-full flex items-center gap-2.5 px-4 h-14 hover:bg-hoverbg">
          <div className="w-8 h-8 rounded-md bg-white border border-line flex items-center justify-center text-ink/70">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="text-left flex-1 min-w-0">
            <div className="text-[13px] font-medium leading-tight text-ink truncate">Percy</div>
            <div className="text-[11px] text-muted leading-tight truncate">Percy's Individual Org</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink/60">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </aside>
  );
}