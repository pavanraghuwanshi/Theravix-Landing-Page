import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    handle: "Relieved Shoulder Tension",
    text: "After months of chronic shoulder tension, Theravix provided the relief I couldn't find elsewhere. It's like having a personal physiotherapist in my pocket.",
    avatar: "https://i.pravatar.cc/150?u=sjc"
  },
  {
    name: "Mark Thompson",
    handle: "Post-Run Recovery",
    text: "The EMS modes are incredible for my post-run recovery. I feel charged up and ready for my next training session within just 15 minutes of use.",
    avatar: "https://i.pravatar.cc/150?u=mtp"
  },
  {
    name: "Emily Rodriguez",
    handle: "Evening Relaxation",
    text: "Safe, simple, and actually works. I use the meditation pulse mode every evening while reading. It's become a vital part of my wellness routine.",
    avatar: "https://i.pravatar.cc/150?u=emr"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-bg-navy relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-brand-teal/5" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-20 gap-8">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
            Relief stories from<br /><span className="text-brand-teal italic tracking-tight">our community.</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-bg-navy overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=thera${i}`} alt="user" />
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-brand-teal">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-semibold">5,000+ Verified Users</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="p-10 rounded-3xl glass-teal space-y-6 gsap-reveal border-brand-teal/10">
              <p className="text-white/70 italic leading-relaxed text-lg font-light">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-teal/10 border border-brand-teal/20">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-brand-teal/60 font-mono tracking-widest uppercase text-[10px]">{review.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
