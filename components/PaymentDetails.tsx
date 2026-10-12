export default function PaymentDetails() {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="text-sm font-semibold mb-1">Detalles de pago</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1">
        <p className="text-sm text-muted leading-relaxed">
          Las facturas, las compras de créditos y la recarga automática se cobran al método de pago
          predeterminado. Si ese método se rechaza, la recarga automática puede hacer el cargo a
          otro método de pago guardado.
        </p>
        <div className="flex items-start justify-end gap-2">
          <button className="px-3 py-1.5 text-sm border border-line rounded-md hover:bg-bg">
            Editar dirección de facturación
          </button>
          <button className="px-3 py-1.5 text-sm bg-ink text-white rounded-md hover:bg-black">
            Agregar método de pago
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-xs text-muted mb-1">Dirección de facturación</div>
        <div className="text-sm">
          <div className="font-medium">Percy's Individual Org</div>
          <div className="text-muted">av conquistadores 1152 · s, LIMA 33 · Perú</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xs text-muted mb-2">Método de pago</div>
        <div className="grid grid-cols-2 text-sm border-b border-line pb-2 text-muted">
          <span>Método de pago</span>
          <span>Vencimiento</span>
        </div>
        <div className="grid grid-cols-2 text-sm py-3 items-center">
          <div className="flex items-center gap-2">
            {/* Visa badge */}
            <span className="inline-flex items-center justify-center w-9 h-6 bg-[#1a1f71] rounded text-[10px] font-bold text-white italic">
              VISA
            </span>
            <span>Visa •••• 9942</span>
            <span className="text-xs px-2 py-0.5 bg-bluebadge text-blueink rounded">
              Predeterminado
            </span>
          </div>
          <span>11/2030</span>
        </div>
      </div>
    </section>
  );
}