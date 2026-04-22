import { Hand, Settings, Coffee, Sparkles } from 'lucide-react';

const STEPS = [
  {
    icon: <Hand size={32} />,
    title: 'Apply Pads',
    desc: 'Easily place the smart electrode pads on your target area for focused relief.'
  },
  {
    icon: <Settings size={32} />,
    title: 'Choose Mode',
    desc: 'Select your preferred therapy mode and adjust the intensity to your comfort.'
  },
  {
    icon: <Coffee size={32} />,
    title: 'Relax & Recharge',
    desc: 'Sit back and relax while Theravix smart pulses begin their soothing work.'
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Instant Relief',
    desc: 'Feel the difference in minutes as tension melts away and recovery begins.'
  }
];

export default function SellSection() {
  return (
    <section id="how-it-works" className="py-32 px-6 md:px-12 relative overflow-hidden bg-bg-navy">
      {/* Decorative accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-blue/5 blur-[200px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter">
            Relief in 4 simple steps.<br /><span className="text-brand-teal italic tracking-tight">Clinically simple.</span>
          </h2>
          <p className="text-white/40 text-lg font-light">
            Theravix is designed for everyone. No complex setups—just intuitive therapy at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />

          {STEPS.map((step, i) => (
            <div key={i} className="text-center group gsap-reveal">
              <div className="w-20 h-20 bg-brand-teal/5 border border-brand-teal/20 rounded-3xl mx-auto mb-8 flex items-center justify-center text-brand-teal group-hover:scale-110 group-hover:bg-brand-teal group-hover:text-white group-hover:shadow-[0_0_20px_rgba(73,182,171,0.4)] transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed px-4 font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="px-10 py-5 bg-brand-teal text-white font-bold rounded-full hover:scale-105 transition-all text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(73,182,171,0.3)] flex items-center gap-2">
            Explore Handheld Devices
          </button>
        </div>
      </div>
    </section>
  );
}
