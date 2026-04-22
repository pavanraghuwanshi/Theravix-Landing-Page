import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0 bg-bg-navy">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-teal/20 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[45%] h-[45%] bg-brand-blue/10 blur-[130px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal/10 border border-brand-teal/20 rounded-full text-xs font-semibold text-brand-teal tracking-wider uppercase mb-4">
          <span className="w-2 h-2 bg-brand-teal rounded-full shadow-[0_0_8px_#49b6ab]" />
          Advanced At-Home Recovery
        </div>
        
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[1.1]">
          Relax, Recover,<br />
          <span className="bg-gradient-to-r from-brand-teal via-white to-brand-blue bg-clip-text text-transparent italic tracking-tight">Recharge — At Home.</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 font-light leading-relaxed">
          Advanced electrode pad therapy designed to relieve pain, relax muscles, 
          and restore comfort—anytime, anywhere.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-brand-teal text-white rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(73,182,171,0.3)] group">
            Shop Theravix أجهزة
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-10 py-4 glass-teal text-brand-teal rounded-full font-bold hover:bg-brand-teal/10 transition-colors">
            How It Works
          </button>
        </div>
      </div>

      {/* Decorative Floating Icon Placeholder */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
