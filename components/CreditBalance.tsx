export default function CreditBalance() {
  return (
    <section>
      <h2 className="text-sm font-semibold mb-1">Saldo de créditos</h2>
      <p className="text-sm text-muted mb-4">
        Los créditos se usan en la API, Claude Code y el playground. Compra créditos cuando los
        necesites o configura la recarga automática.
      </p>

      {/* Tarjeta principal */}
      <div className="border border-line rounded-xl bg-white px-5 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="text-2xl font-medium">USD 0.00</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm border border-line rounded-md hover:bg-bg">
              Configurar recarga automática
            </button>
            <button className="px-3 py-1.5 text-sm bg-ink text-white rounded-md hover:bg-black">
              Comprar créditos
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 text-sm text-ink/70">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-redink">
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6M9 9l6 6" />
          </svg>
          La recarga automática está desactivada. Las solicitudes a la API se detendrán cuando se
          agote tu saldo.
        </div>
      </div>

      {/* Tarjeta ventas */}
      <div className="border border-line rounded-xl bg-white px-5 py-5 mt-3">
        <div className="flex items-center gap-2 text-sm text-ink/80">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Comunícate con el equipo de cuentas de Anthropic para pagar a posteriori mediante facturación mensual.
        </div>
        <button className="mt-3 px-3 py-1.5 text-sm border border-line rounded-md hover:bg-bg">
          Contactar a ventas
        </button>
      </div>
    </section>
  );
}