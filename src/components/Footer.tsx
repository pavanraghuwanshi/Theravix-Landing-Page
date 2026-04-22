import { Instagram, Twitter, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-navy py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-brand-teal/5 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-blue rounded-full" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">Theravix</span>
            </div>
            <p className="text-white/40 leading-relaxed text-sm font-light">
              Advanced electrode pad therapy for at-home relaxation and muscle pain relief. Fix the pain, restore life.
            </p>
            <div className="flex items-center gap-4 text-white/40">
              <a href="#" className="hover:text-brand-teal transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-teal transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-teal transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-brand-teal transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-teal font-mono text-xs uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><a href="#" className="hover:text-brand-teal transition-colors">Mini TENS Pods</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Advanced EMS Pads</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Wireless Systems</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Replacement Pads</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-teal font-mono text-xs uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-white/40 font-light">
              <li><a href="#" className="hover:text-brand-teal transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Our Science</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Physio Guide</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-brand-teal transition-colors">Support</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-brand-teal font-mono text-xs uppercase tracking-widest">Stay Calm & Informed</h4>
            <p className="text-sm text-white/40 leading-relaxed font-light">
              Subscribe for wellness tips, new relief technologies, and exclusive community discounts.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-brand-teal/5 border border-brand-teal/20 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-brand-teal/30 transition-all text-white font-light"
              />
              <button className="absolute right-2 top-1.5 p-2 bg-brand-teal text-white rounded-full hover:scale-110 transition-transform">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-widest text-white/20 font-mono">
          <p>&copy; 2026 Theravix Health. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-teal">electrode pad therapy</a>
            <a href="#" className="hover:text-brand-teal">TENS machine at home</a>
            <a href="#" className="hover:text-brand-teal">muscle pain relief device</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
