export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand" aria-label="MEKVERA Proje Tasarım Uygulama">
      <svg className="brand-mark brand-mark-v4" viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 55V10l25 23 25-23v45H46V35L32 49 18 35v20H7Zm18-2 7-7 7 7H25Z"
        />
      </svg>
      {!compact && <div><div className="brand-name">MEKVERA</div><div className="brand-sub">PROJE • TASARIM • UYGULAMA</div></div>}
    </div>
  )
}
