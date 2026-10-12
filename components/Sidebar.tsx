"use client";

import { useState } from "react";

const items = [
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

export default function Sidebar() {
  const [active, setActive] = useState("Facturación");

  return (
    <aside className="w-72 shrink-0 bg-sidebar border-r border-line min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-line">
        <span className="text-sm font-semibold">Claude Console</span>
        <button className="text-muted hover:text-ink">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M15 3v18" />
          </svg>
        </button>
      </div>

      {/* Volver */}
      <button className="flex items-center gap-2 px-4 py-3 text-sm text-ink hover:bg-hoverbg border-b border-line">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Volver a la aplicación
      </button>

      {/* Buscador */}
      <div className="px-3 py-3">
        <div className="relative">
          <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            placeholder="Buscar en Console…"
            className="w-full text-sm bg-white border border-line rounded-md pl-8 pr-16 py-1.5 outline-none focus:border-ink/30"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[11px] text-muted">
            <kbd className="px-1.5 py-0.5 bg-sidebar border border-line rounded">Ctrl</kbd>
            <kbd className="px-1.5 py-0.5 bg-sidebar border border-line rounded">K</kbd>
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 pb-4">
        <div className="flex items-center gap-2 px-3 py-2 text-sm text-ink">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
          General
        </div>
        <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          Configuración de la organización
        </div>

        <ul className="mt-1 space-y-0.5">
          {items.map((label) => {
            const isActive = label === active;
            return (
              <li key={label}>
                <button
                  onClick={() => setActive(label)}
                  className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition ${
                    isActive
                      ? "bg-hoverbg text-ink font-medium"
                      : "text-ink/80 hover:bg-hoverbg"
                  }`}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Saldo rojo abajo */}
      <div className="px-3 pb-3">
        <div className="border border-redborder bg-redbg rounded-lg p-3 flex gap-2">
          <svg className="shrink-0 mt-0.5 text-redink" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p className="text-xs text-redink leading-snug">
            Tu saldo es $0.00. Agrega fondos para desarrollar con Console.
          </p>
        </div>
      </div>

      {/* Links inferiores */}
      <div className="border-t border-line px-3 py-2 space-y-0.5 text-sm">
        <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-hoverbg text-ink/80">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          Notificaciones
        </button>
        <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-hoverbg text-ink/80">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Documentación
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 text-ink/80">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span className="text-xs">USD 0.00</span>
          <button className="text-blue-600 hover:underline ml-1">Agregar fondos</button>
        </div>
      </div>

      {/* Usuario */}
      <div className="border-t border-line px-3 py-3">
        <button className="w-full flex items-center gap-2 px-1 py-1 rounded-md hover:bg-hoverbg">
          <div className="w-7 h-7 rounded-md bg-sidebar border border-line flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="text-left flex-1">
            <div className="text-sm font-medium leading-tight">Percy</div>
            <div className="text-xs text-muted leading-tight">Percy's Individual Org</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </aside>
  );
}