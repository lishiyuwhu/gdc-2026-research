import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid #222' }}>
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 116 100" fill="none">
            <path d="M57.5 0L115 100H0L57.5 0Z" fill="white"/>
          </svg>
          <span className="text-white/60 text-sm">GDC 2026 调研报告</span>
        </div>
        <p className="text-white/40 text-xs text-center">
          基于 GDC 官方内容、Game Developer 报道、行业现状调查（2,300+样本）
        </p>
        <div className="flex gap-4">
          <a href="https://gdconf.com" target="_blank" className="text-white/40 hover:text-white text-xs transition-colors">GDC</a>
          <a href="https://www.gamedeveloper.com" target="_blank" className="text-white/40 hover:text-white text-xs transition-colors">Game Developer</a>
        </div>
      </div>
    </footer>
  );
}
