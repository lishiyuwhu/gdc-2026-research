"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { keynotes, luminaries } from "@/lib/content";

export default function Keynotes() {
  return (
    <main>
      <Nav />
      <div style={{ paddingTop: '56px' }}>
        <div style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
          <div className="container py-16">
            <p className="section-eyebrow">Keynotes</p>
            <h1 className="text-headline mb-3">主题演讲</h1>
            <p className="text-[#666] text-base">GDC 40周年，小岛秀夫五年来首次登台</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid-2 gap-6 mb-16">
            {keynotes.map((k, i) => (
              <div key={i} className={`card p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="tag tag-dark">{k.day}</span>
                  {k.tags.map(t => <span key={t} className="tag tag-muted">{t}</span>)}
                </div>
                <h2 className="text-xl font-bold mb-1">{k.speaker}</h2>
                <p className="text-[#666] font-medium text-sm mb-2">{k.title}</p>
                <p className="text-xs text-[#999] mb-4">{k.subtitle}</p>
                <p className="text-sm text-[#666] leading-relaxed mb-5">{k.description}</p>
                <blockquote className="border-l border-[#e4e4e7] pl-4 text-sm text-[#666] italic">
                  "{k.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          <div>
            <p className="section-eyebrow mb-2">Luminaries</p>
            <h2 className="text-headline mb-8">领袖论坛</h2>
            {luminaries.map((day, i) => (
              <div key={i} className="mb-10">
                <p className="text-xs text-[#999] font-semibold uppercase tracking-wider mb-4">{day.day}</p>
                <div className="grid-3">
                  {day.speakers.map((s, j) => (
                    <div key={j} className="card p-5">
                      <h4 className="font-semibold text-sm mb-0.5">{s.name}</h4>
                      <p className="text-xs text-[#dc2626] font-medium mb-1">{s.company}</p>
                      <p className="text-xs text-[#999]">{s.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
