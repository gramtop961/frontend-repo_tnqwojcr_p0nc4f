export default function Topbar({ title, subtitle }) {
  return (
    <header className="sticky top-0 z-10 bg-[var(--color-surface)] border-b border-gray-100">
      <div className="container-max py-3 flex items-center justify-between gap-4">
        <div>
          <h1 className="leading-tight">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          <input aria-label="Search" className="form-input w-56 hidden sm:block" placeholder="Search..." />
          <button className="icon-btn btn-secondary" aria-label="Notifications">🔔</button>
          <button className="icon-btn btn-secondary" aria-label="Profile">👤</button>
        </div>
      </div>
    </header>
  )
}
