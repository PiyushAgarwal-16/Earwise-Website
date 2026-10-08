import { useState, useEffect } from 'react'
import { BarChart2, Activity, History, Settings, Maximize2, X, ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import dashboardImg from '../assets/screenshots/dashboard.webp'
import insightsImg from '../assets/screenshots/insights.webp'
import historyImg from '../assets/screenshots/history.webp'
import settingsImg from '../assets/screenshots/settings.webp'

const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    tagline: 'Daily Listening at a Glance',
    description:
      'Real-time tracking of total earbud listening time, daily session count, plus average and peak exposure levels.',
    icon: BarChart2,
    image: dashboardImg,
    badge: 'Main View',
    highlights: ['Listening duration counter', 'Average & maximum volume', 'Session breakdown link'],
  },
  {
    id: 'insights',
    label: 'Insights',
    tagline: '7-Day Volume & Trend Analytics',
    description:
      'Interactive weekly volume histograms that reveal your heaviest listening days and help maintain safe sound levels.',
    icon: Activity,
    image: insightsImg,
    badge: 'Hearing Safety',
    highlights: ['Weekly listening distribution', 'Most active day tracker', 'Peak volume exposure analysis'],
  },
  {
    id: 'history',
    label: 'History',
    tagline: 'Comprehensive Session Log',
    description:
      'Complete date-by-date archive of past sessions with exact timestamps, durations, and volume percentages.',
    icon: History,
    image: historyImg,
    badge: 'Detailed Logs',
    highlights: ['Calendar history view', 'Exact session durations', 'Volume percentage records'],
  },
  {
    id: 'settings',
    label: 'Settings',
    tagline: 'Transparent & Privacy-First',
    description:
      'Complete visibility into Bluetooth connection detection, optional Firebase cloud backup, and battery optimization.',
    icon: Settings,
    image: settingsImg,
    badge: 'Preferences',
    highlights: ['Optional Cloud Sync status', 'Nearby device permissions', 'Battery optimization toggle'],
  },
]

function PhoneFrame({ screen, isActive, onSelect, onOpenLightbox }) {
  const Icon = screen.icon

  return (
    <div
      onClick={onSelect}
      className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 snap-center shrink-0 w-[230px] sm:w-[250px] md:w-[260px] lg:w-[265px] ${
        isActive ? 'scale-[1.02] -translate-y-2' : 'opacity-70 hover:opacity-95 hover:-translate-y-1'
      }`}
    >
      {/* Ambient glow for active phone */}
      <div
        className={`absolute -inset-2 rounded-[52px] blur-2xl transition-opacity duration-500 pointer-events-none ${
          isActive ? 'bg-white/10 opacity-100' : 'opacity-0'
        }`}
      />

      {/* Phone chassis */}
      <div
        className={`relative z-10 w-full aspect-[1220/2712] rounded-[42px] bg-[#131313] p-2.5 border transition-all duration-300 shadow-2xl ${
          isActive
            ? 'border-white/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] ring-1 ring-white/20'
            : 'border-[#242424] shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:border-[#383838]'
        }`}
      >
        {/* Screen bezel */}
        <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={screen.image}
            alt={`Earwise ${screen.label} Screen`}
            className="w-full h-full object-cover object-top select-none pointer-events-none"
            loading="lazy"
          />

          {/* Glare overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none" />

          {/* Hover magnifier badge */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onOpenLightbox(screen)
            }}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-200 cursor-pointer shadow-lg"
            title="Expand Screenshot"
            aria-label={`Expand ${screen.label} Screenshot`}
          >
            <Maximize2 size={13} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Label and Badge */}
      <div className="mt-4 flex flex-col items-center text-center gap-1">
        <div className="flex items-center gap-2">
          <Icon
            size={14}
            className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#666] group-hover:text-[#aaa]'}`}
            strokeWidth={1.75}
          />
          <span
            className={`text-sm font-semibold tracking-tight transition-colors duration-200 ${
              isActive ? 'text-white' : 'text-[#888] group-hover:text-[#e0e0e0]'
            }`}
          >
            {screen.label}
          </span>
        </div>
        <span className="text-[11px] text-[#555] tracking-wide">{screen.badge}</span>
      </div>
    </div>
  )
}

export default function Screenshots() {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const [titleRef, titleInView] = useInView({ threshold: 0.2 })

  // Handle ESC key for lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const currentScreen = screens[active]

  return (
    <section id="screenshots" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[#0d0d0d] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className="mb-14 text-center"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="section-label mb-3">Real App Screenshots</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] tracking-tight max-w-xl mx-auto leading-tight">
            Minimal. Clean. Purpose-built.
          </h2>
          <p className="mt-4 text-[#737373] max-w-md mx-auto text-base">
            Take a look at the real Earwise interface — designed for distraction-free listening awareness.
          </p>

          {/* Quick Tab Selector */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {screens.map((s, i) => {
              const Icon = s.icon
              const isSelected = active === i
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-[0_2px_12px_rgba(255,255,255,0.15)] scale-[1.02]'
                      : 'bg-[#141414] text-[#737373] border-[#222] hover:border-[#383838] hover:text-[#ccc]'
                  }`}
                >
                  <Icon size={13} strokeWidth={isSelected ? 2 : 1.5} />
                  {s.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Screenshots Showcase Row */}
        <div className="flex justify-center items-start gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 px-2 scrollbar-none">
          {screens.map((screen, i) => (
            <PhoneFrame
              key={screen.id}
              screen={screen}
              isActive={active === i}
              onSelect={() => setActive(i)}
              onOpenLightbox={(s) => setLightbox(s)}
            />
          ))}
        </div>

        {/* Active Screen Detail Card */}
        <div className="mt-6 max-w-2xl mx-auto bg-[#121212] border border-[#222] rounded-2xl p-6 md:p-8 card-glass transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xs uppercase tracking-wider text-[#666] font-medium">{currentScreen.label} Screen</span>
                <span className="w-1 h-1 rounded-full bg-[#555]" />
                <span className="text-xs text-[#888]">{currentScreen.badge}</span>
              </div>
              <h3 className="text-xl font-bold text-[#f5f5f5] tracking-tight">{currentScreen.tagline}</h3>
            </div>

            <button
              onClick={() => setLightbox(currentScreen)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#2e2e2e] bg-[#181818] text-xs text-[#ccc] hover:text-white hover:border-[#444] transition-all cursor-pointer w-fit shrink-0"
            >
              <Maximize2 size={12} />
              Enlarge View
            </button>
          </div>

          <p className="text-sm text-[#737373] leading-relaxed mb-5">
            {currentScreen.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1c1c1c]">
            {currentScreen.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717] border border-[#252525] text-xs text-[#a3a3a3]"
              >
                <ChevronRight size={10} className="text-[#666]" />
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-[#444] mt-8">
          Tap any phone to focus · Click the zoom icon to view in full resolution
        </p>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-sm w-full bg-[#111] border border-[#2a2a2a] rounded-[36px] p-3 shadow-2xl flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header in modal */}
            <div className="w-full px-3 py-2 flex items-center justify-between border-b border-[#1e1e1e] mb-2">
              <span className="text-xs font-semibold text-[#f5f5f5]">{lightbox.label}</span>
              <span className="text-[10px] text-[#666]">{lightbox.badge}</span>
            </div>

            {/* High-res Image */}
            <div className="w-full aspect-[1220/2712] rounded-[28px] overflow-hidden bg-black">
              <img
                src={lightbox.image}
                alt={`Earwise ${lightbox.label} Screenshot`}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-[11px] text-[#666] mt-3 px-2 text-center pb-1">
              {lightbox.description}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
