export default function TopBar() {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-3 text-sm border-b border-line">
        <span className="text-muted">Tu saldo es $0.00. Agrega fondos para desarrollar con Console.</span>
        <div className="flex items-center gap-5">
          <a href="#" className="text-muted hover:text-ink">Notificaciones</a>
          <a href="#" className="text-muted hover:text-ink">Documentación</a>
          <a href="#" className="text-muted hover:text-ink flex items-center gap-2">Créditos <span className="text-xs">USD 0.00</span></a>
          <button className="px-3 py-1.5 bg-ink text-white rounded-md text-sm hover:bg-ink/90">Agregar fondos</button>
        </div>
      </div>
      <div className="flex items-center justify-between px-10 py-3 border-b border-line text-sm">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-xs font-medium">P</div>
          <span className="font-medium">Percy</span>
          <span className="text-muted">Percy&apos;s Individual Org</span>
        </div>
        <a href="#" className="text-muted hover:text-ink">Facturación</a>
      </div>
    </>
  );
}
