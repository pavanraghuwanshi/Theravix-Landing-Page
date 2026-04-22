import { ShoppingCart, Menu, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-teal py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-brand-blue rounded-full" />
          </div>
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-white">Theravix</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/50">
        <a href="#hero" className="hover:text-brand-teal transition-colors">Home</a>
        <a href="#categories" className="hover:text-brand-teal transition-colors">Devices</a>
        <a href="#how-it-works" className="hover:text-brand-teal transition-colors">How it Works</a>
        <a href="#why-us" className="hover:text-brand-teal transition-colors">Why Theravix</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative text-white/70">
          <ShoppingCart size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-brand-teal rounded-full shadow-[0_0_8px_#49b6ab]" />
        </button>
        <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-white/70">
          <Menu size={20} />
        </button>
        <button className="hidden md:block px-6 py-2 bg-brand-teal text-white rounded-full font-semibold text-sm hover:bg-brand-teal/90 transition-all hover:shadow-[0_0_20px_rgba(73,182,171,0.4)]">
          Shop Now
        </button>
      </div>
    </nav>
  );
}
