import { Activity, Zap, Wind, UserCheck } from 'lucide-react';

const CATEGORIES = [
  { 
    name: 'Mini TENS Pods', 
    icon: <Wind size={24} />, 
    count: 'Portable Relief',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80&fm=webp',
    color: 'from-brand-teal/40'
  },
  { 
    name: 'Advanced EMS Pads', 
    icon: <Zap size={24} />, 
    count: 'Muscle Recovery',
    img: 'https://images.unsplash.com/photo-1518611012118-29617be0814e?auto=format&fit=crop&w=400&q=80&fm=webp',
    color: 'from-brand-blue/30'
  },
  { 
    name: 'Wireless Systems', 
    icon: <Activity size={24} />, 
    count: 'Total Freedom',
    img: 'https://images.unsplash.com/photo-1512133595763-5fb2445c1a9f?auto=format&fit=crop&w=400&q=80&fm=webp',
    color: 'from-brand-teal/30'
  },
  { 
    name: 'Replacement Pads', 
    icon: <UserCheck size={24} />, 
    count: 'Durable Quality',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80&fm=webp',
    color: 'from-brand-blue/20'
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">
              Clinically Inspired.<br />Home Convenient.
            </h2>
          </div>
          <p className="text-white/40 max-w-sm font-light">
            Theravix uses smart pulses to target sore muscles, improve circulation, and promote deep relaxation exactly where you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <div 
              key={i} 
              className="group relative h-[400px] rounded-3xl overflow-hidden glass-teal hover:border-brand-teal/40 transition-all duration-500 gsap-reveal"
            >
              <img 
                src={cat.img} 
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent`} />
              
              <div className="absolute bottom-0 left-0 w-full p-8 space-y-2">
                <div className="flex items-center gap-2 text-brand-teal">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold">{cat.name}</h3>
                <p className="text-sm text-white/50">{cat.count}</p>
                
                <div className="pt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="text-sm font-bold flex items-center gap-2 group-hover:text-brand-teal tracking-tight">
                    Learn More <div className="w-6 h-[1px] bg-white group-hover:bg-brand-teal group-hover:w-10 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
