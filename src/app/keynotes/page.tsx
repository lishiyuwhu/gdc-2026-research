"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { keynotes, luminaries } from "@/lib/content";
import { Calendar, ArrowRight } from "lucide-react";

export default function Keynotes() {
  return (
    <main>
      <Nav />
      <div className="pt-24 pb-24">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <p className="section-label">Keynotes</p>
            <h1 className="section-title mb-4">主题演讲</h1>
            <p className="text-stone-500 text-lg">
              GDC 40周年庆典，小岛秀夫五年来首次登台，Rob Pardo 分享长寿游戏秘诀
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-16">
          {/* Main Keynotes */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {keynotes.map((k, i) => (
                <div key={i} className={`card p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="tag tag-red">
                      <Calendar className="w-3 h-3" /> {k.day}
                    </span>
                    {k.highlight && <span className="tag tag-dark">头条演讲</span>}
                    {k.tags.map(t => (
                      <span key={t} className="tag tag-muted">{t}</span>
                    ))}
                  </div>
                  <h2 className="font-display font-black text-3xl md:text-4xl text-stone-900 mb-1">{k.speaker}</h2>
                  <p className="text-stone-600 font-medium mb-1">{k.en}</p>
                  <p className="text-[#DC2626] font-bold text-xl mb-2">{k.title}</p>
                  <p className="text-stone-500 text-sm font-medium mb-5">{k.subtitle}</p>
                  <p className="text-stone-600 leading-relaxed mb-6">{k.description}</p>
                  <blockquote className="border-l-3 border-[#DC2626] pl-5 py-2 bg-stone-50 rounded-r-lg">
                    <p className="italic text-stone-600 text-sm leading-relaxed">"{k.quote}"</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </section>

          {/* Luminaries */}
          <section>
            <h2 className="font-display font-bold text-2xl mb-6">🌟 Luminaries Speaker Series</h2>
            <p className="text-stone-500 mb-8">GDC 历史上首个面向高级领导力的项目，为高管、投资者、营销人员、工作室负责人设计 | Blue Shield of California Theater at YBCA</p>
            {luminaries.map((day, i) => (
              <div key={i} className="mb-8">
                <h3 className="font-semibold text-stone-700 mb-4 text-sm uppercase tracking-wider">{day.day}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {day.speakers.map((s, j) => (
                    <div key={j} className="card p-5">
                      <h4 className="font-semibold text-stone-900 mb-0.5">{s.name}</h4>
                      <p className="text-xs text-[#DC2626] font-semibold mb-1">{s.company}</p>
                      <p className="text-xs text-stone-500">{s.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
