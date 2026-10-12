export default function SpendingLimits() {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="text-sm font-semibold mb-1">Límites de gasto</h2>
      <p className="text-sm text-muted mb-5">
        Establece un límite de gasto mensual para tu organización y recibe notificaciones a medida
        que te acerques a él.
      </p>

      <div className="flex items-center justify-between text-sm mb-2">
        <span className="font-medium">Gastado: USD 0.00</span>
        <span className="text-muted">0% utilizado</span>
      </div>
      <div className="text-xs text-muted mb-3">Se restablece el 1 nov 2026 (UTC)</div>

      <div className="h-1.5 bg-line rounded-full overflow-hidden mb-6">
        <div className="h-full w-0 bg-ink" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium">Límite de gasto mensual</div>
          <div className="text-sm text-muted mt-0.5">USD 200,000</div>
        </div>
        <button className="px-3 py-1.5 text-sm border border-line rounded-md hover:bg-bg">
          Ajustar límite
        </button>
      </div>

      <div className="flex items-start justify-between gap-4 mt-5">
        <div>
          <div className="text-sm font-medium">Notificaciones por correo electrónico</div>
          <p className="text-sm text-muted mt-0.5 max-w-lg">
            Recibe notificaciones cuando tu gasto mensual se acerque a un monto que hayas
            establecido.
          </p>
        </div>
        <button className="px-3 py-1.5 text-sm border border-line rounded-md hover:bg-bg whitespace-nowrap">
          Agregar notificación
        </button>
      </div>
    </section>
  );
}