export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand" aria-label="MEKVERA Proje Tasarım Uygulama">
      <svg className="brand-mark" viewBox="0 0 80 80" role="img" aria-hidden="true">
        <path d="M12 65V28l18 17V20l13 12V8l25 19v38" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter"/>
        <path d="M30 65V45M43 65V32M56 65V42" fill="none" stroke="currentColor" strokeWidth="5"/>
      </svg>
      {!compact && <div><div className="brand-name">MEKVERA</div><div className="brand-sub">PROJE • TASARIM • UYGULAMA</div></div>}
    </div>
  )
}
