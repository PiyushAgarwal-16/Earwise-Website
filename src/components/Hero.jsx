import { Download, ChevronRight } from 'lucide-react'
import dashboardImg from '../assets/screenshots/dashboard.webp'

function PhoneMockup() {
  return (
    <div className="relative w-[270px] sm:w-[290px] md:w-[310px] mx-auto animate-float">
      {/* Glow behind phone */}
      <div className="absolute inset-0 blur-[60px] bg-white/10 rounded-full scale-75 translate-y-8 animate-pulse-slow" />

      {/* Phone chassis */}
      <div className="relative z-10 w-full aspect-[1220/2712] rounded-[44px] bg-[#121212] p-2.5 border border-[#2c2c2c] shadow-[0_35px_80px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
        {/* Screen bezel */}
        <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black flex items-center justify-center">
          <img
            src={dashboardImg}
            alt="Earwise Android App Dashboard"
            className="w-full h-full object-cover object-top select-none pointer-events-none"
            loading="eager"
            fetchPriority="high"
          />

          {/* Glare gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-transparent to-white/10 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="home">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.015] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-white/[0.008] rounded-full blur-[80px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-20 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a2a2a] bg-[#111]/80 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#888] animate-pulse" />
            <span className="text-xs text-[#777] tracking-wide font-medium">Android Audio Wellness App</span>
          </div>

          {/* Headline */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f5f5f5] leading-[1.05] tracking-tight">
              Understand<br />Your Listening<br />
              <span className="text-gradient">Habits.</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-[#737373] text-base md:text-lg leading-relaxed max-w-md">
            Earwise tracks your earbud and headphone usage to deliver listening analytics and audio wellness insights — all stored privately on your device.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 py-4 border-y border-[#1a1a1a]">
            {[
              { value: '100%', label: 'Offline capable' },
              { value: '0', label: 'Audio recorded' },
              { value: 'Local', label: 'Data storage' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-lg font-bold text-[#f0f0f0] tracking-tight">{s.value}</span>
                <span className="text-xs text-[#555]">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div id="download" className="flex flex-wrap gap-3 items-center scroll-mt-28">
            <a
              id="download-android-btn"
              href="https://play.google.com/store/apps/details?id=com.earwise.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary transition-all duration-300"
            >
              <Download size={16} strokeWidth={2} />
              Download for Android
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#how-it-works')
                if (el) {
                  const navHeight = 72
                  const elementPosition = el.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - navHeight
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
              className="btn-secondary"
            >
              Learn More
              <ChevronRight size={14} />
            </a>
          </div>

          <p className="text-xs text-[#444] -mt-2">Free · No account required · No ads</p>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex justify-center md:justify-end">
          <PhoneMockup />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  )
}
