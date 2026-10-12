export default function AlertBanner() {
  return (
    <div className="flex items-center gap-2 border border-redborder bg-redbg text-redink rounded-lg px-4 py-3 text-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      Para comenzar a usar la Claude API, compra algunos créditos.
    </div>
  );
}