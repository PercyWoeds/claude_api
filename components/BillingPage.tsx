import InvoiceTable from "./InvoiceTable";
export default function BillingPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-2xl font-semibold">Facturación</h1>
        <p className="text-muted mt-2">Para comenzar a usar la Claude API, compra algunos créditos.</p>
      </header>

      <section className="border-t border-line pt-8">
        <h2 className="text-lg font-medium">Saldo de créditos</h2>
        <p className="text-sm text-muted mt-2 max-w-3xl">Los créditos se usan en la API, Claude Code y el playground. Compra créditos cuando los necesites o configura la recarga automática.</p>
        <div className="mt-5 border border-line rounded-lg bg-white/60 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted">Saldo actual</div>
              <div className="text-2xl font-semibold mt-1">USD 0.00</div>
            </div>
            <button className="px-4 py-2 bg-ink text-white rounded-md text-sm hover:bg-ink/90">Comprar créditos</button>
          </div>
          <div className="mt-4 text-sm text-muted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            La recarga automática está desactivada. Las solicitudes a la API se detendrán cuando se agote tu saldo.
          </div>
          <p className="mt-3 text-sm text-muted">Comunícate con el equipo de cuentas de Anthropic para pagar a posteriori mediante facturación mensual.</p>
        </div>
      </section>

      <section className="border-t border-line pt-8">
        <h2 className="text-lg font-medium">Detalles de pago</h2>
        <p className="text-sm text-muted mt-2 max-w-3xl">Las facturas, las compras de créditos y la recarga automática se cobran al método de pago predeterminado.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xs uppercase text-muted mb-2">Dirección de facturación</div>
            <div className="text-sm leading-relaxed">
              <div className="font-medium">Percy&apos;s Individual Org</div>
              <div className="text-muted">av conquistadores 1152 · s, LIMA 33 · Perú</div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs uppercase text-muted mb-2">Método de pago</div>
            <div className="border border-line rounded-lg overflow-hidden bg-white/60">
              <table className="w-full text-sm">
                <thead className="bg-white/70 text-muted">
                  <tr>
                    <th className="text-left font-normal px-4 py-2">Método</th>
                    <th className="text-left font-normal px-4 py-2">Vencimiento</th>
                    <th className="text-left font-normal px-4 py-2">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-line">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <span className="font-medium">Visa •••• 9942</span>
                      <span className="text-xs px-2 py-0.5 bg-ink/5 rounded">Predeterminado</span>
                    </td>
                    <td className="px-4 py-3">11/2030</td>
                    <td className="px-4 py-3 text-muted">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line pt-8">
        <h2 className="text-lg font-medium">Límites de gasto</h2>
        <p className="text-sm text-muted mt-2 max-w-3xl">Establece un límite de gasto mensual para tu organización.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xs uppercase text-muted mb-1">Gastado</div>
            <div className="text-lg font-medium">USD 0.00</div>
            <div className="text-sm text-muted mt-1">Se restablece el 1 nov 2026 (UTC)</div>
          </div>
          <div className="md:col-span-2">
            <div className="text-xs text-muted mb-2">0% utilizado</div>
            <div className="h-1.5 bg-line rounded-full overflow-hidden"><div className="h-full w-0 bg-ink" /></div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase text-muted">Límite de gasto mensual</label>
                <div className="mt-2 text-sm border border-line rounded-md px-3 py-2 bg-white/60">USD 200,000</div>
              </div>
              <div>
                <label className="text-xs uppercase text-muted">Notificaciones por correo electrónico</label>
                <p className="mt-2 text-sm text-muted">Recibe notificaciones cuando tu gasto mensual se acerque a un monto que hayas establecido.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line pt-8">
        <h2 className="text-lg font-medium">Historial de facturas</h2>
        <p className="text-sm text-muted mt-2">Las facturas se emiten cuando se compran créditos. Todas las fechas están en UTC.</p>
        <div className="mt-5"><InvoiceTable /></div>
      </section>
    </div>
  );
}
