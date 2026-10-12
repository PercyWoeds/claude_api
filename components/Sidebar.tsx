"use client";
const generalItems = [
  "Organización","Espacios de trabajo","Facturación","Límites de frecuencia",
  "Claves de API","Cuentas de servicio","Identidad de carga de trabajo",
  "Retención de datos","Capacidades","Identidad y acceso",
];
export default function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-line bg-cream hidden md:flex flex-col">
      <div className="px-5 py-4 border-b border-line text-sm font-medium">Claude Console</div>
      <div className="px-5 py-4 border-b border-line">
        <button className="text-sm text-muted hover:text-ink">← Volver a la aplicación</button>
      </div>
      <div className="px-5 py-4">
        <div className="relative">
          <input placeholder="Buscar en Console…" className="w-full text-sm bg-white/60 border border-line rounded-md pl-3 pr-16 py-2 outline-none focus:border-ink/40" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted flex items-center gap-1">
            Ctrl <kbd className="px-1 border border-line rounded text-[10px]">K</kbd>
          </span>
        </div>
      </div>
      <nav className="px-2 pb-4 overflow-y-auto">
        <div className="px-3 py-2 text-xs uppercase tracking-wide text-muted">General</div>
        <div className="px-3 py-1 text-xs text-muted">Configuración de la organización</div>
        <ul className="mt-2 space-y-0.5">
          {generalItems.map((label) => (
            <li key={label}>
              <a href="#" className={`block px-3 py-2 rounded-md text-sm transition ${label === "Facturación" ? "bg-white text-ink font-medium shadow-sm" : "text-ink/70 hover:bg-white/60 hover:text-ink"}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
