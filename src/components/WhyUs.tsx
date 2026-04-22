import { ShieldCheck, Heart, Clock, Award } from 'lucide-react';

const FEATURES = [
  {
    icon: <Award size={32} />,
    title: 'Clinically Inspired',
    desc: 'Professional-grade technology adapted for safe and effective results in the comfort of your home.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Safe & Non-Invasive',
    desc: 'A drug-free, non-invasive alternative for chronic pain management and relaxation without side effects.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Daily Convenience',
    desc: 'Lightweight, portable, and designed for daily use—wherever and whenever you need it most.'
  },
  {
    icon: <Heart size={32} />,
    title: 'Cost Effective',
    desc: 'An affordable, one-time investment compared to the ongoing costs of professional therapy sessions.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 px-6 md:px-12 bg-bg-navy">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-[1.1]">
            Your recovery.<br /><span className="text-brand-teal italic tracking-tight">Your schedule.</span>
          </h2>
          <p className="text-xl text-white/40 leading-relaxed max-w-lg font-light">
            Theravix bridges the gap between professional recovery and home comfort. We believe relief shouldn't be a luxury.
          </p>
          <div className="pt-6">
            <button className="px-8 py-4 px-10 py-5 bg-white text-brand-blue font-bold rounded-full hover:scale-105 transition-all text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Learn Our Process
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {FEATURES.map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl glass-teal space-y-4 gsap-reveal hover:bg-white/5 transition-colors group">
              <div className="mb-4 text-brand-teal group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-display">{feature.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
