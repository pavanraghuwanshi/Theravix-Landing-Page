import { useEffect, useRef } from 'preact/hooks';
import { gsap } from 'gsap';

export default function ScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const circuitRef = useRef<HTMLDivElement>(null);
  const backPanelRef = useRef<HTMLDivElement>(null);
  const textBlocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: 1.5,
      }
    });

    // Initial 3D Setup
    gsap.set(sceneRef.current, { perspective: 1500, rotateY: -30, rotateX: 10 });
    gsap.set(displayRef.current, { translateZ: 150, opacity: 0.8 });
    gsap.set(circuitRef.current, { translateZ: 0, opacity: 0.9, scale: 0.9 });
    gsap.set(backPanelRef.current, { translateZ: -150, opacity: 0.7 });

    // Step 1: Assembly
    tl.to([displayRef.current, circuitRef.current, backPanelRef.current], {
      translateZ: 0,
      opacity: 1,
      scale: 1,
      duration: 2,
      stagger: -0.2,
      ease: 'power2.inOut'
    })
    // Step 2: Full Rotation to show "Resale Quality"
    .to(sceneRef.current, {
      rotateY: 330, // Full 360 rotation from -30 to 330
      duration: 3,
      ease: 'none'
    }, "-=1")
    // Step 3: Explode view again for "Deep Inspection"
    .to(displayRef.current, { translateZ: 300, y: -50, scale: 0.9, duration: 2 })
    .to(backPanelRef.current, { translateZ: -300, y: 50, scale: 0.9, duration: 2 }, "<")
    .to(circuitRef.current, { scale: 1.1, duration: 2 }, "<")
    // Step 4: Text Highlights
    .fromTo('.step-text', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 1.5, duration: 2 }, "-=4");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-bg-navy relative overflow-hidden flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10 h-full">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-12">
          <div className="step-text flex flex-col gap-4">
            <span className="text-brand-teal font-mono text-sm tracking-widest uppercase">Smart Pulse Technology</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Targeted relief,<br /><span className="text-brand-teal italic font-light tracking-tight">clinically inspired.</span>
            </h2>
            <p className="text-white/40 max-w-sm">Theravix uses gentle electrical stimulation to target sore muscles and promote deep relaxation.</p>
          </div>
          
          <div className="step-text flex flex-col gap-4 opacity-0">
            <span className="text-brand-teal font-mono text-sm tracking-widest uppercase">Custom Intensity Control</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Comfort tailored<br />to your needs.
            </h2>
            <p className="text-white/40 max-w-sm">Select from multiple modes and adjustable intensity levels for a truly personalized experience.</p>
          </div>
        </div>

        {/* 3D Scene */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[700px] flex items-center justify-center" style={{ perspective: '2000px' }}>
          <div ref={sceneRef} className="relative w-[280px] h-[580px]" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* DISPLAY LAYER */}
            <div 
              ref={displayRef}
              className="absolute inset-0 rounded-[2.5rem] border-4 border-white/5 overflow-hidden shadow-2xl transition-shadow"
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
            >
              <div className="absolute inset-0 bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" 
                  alt="Therapy Relaxation" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/40 to-transparent" />
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-4 bg-brand-teal/20 rounded-full" />
            </div>

            {/* CIRCUIT LAYER (The "Something More") */}
            <div 
              ref={circuitRef}
              className="absolute inset-0 rounded-[2.5rem] bg-[#0c1626] border-2 border-brand-teal/30 p-8 flex flex-col items-center gap-6 overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full h-1/2 border-2 border-brand-teal/20 rounded-2xl relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#49b6ab_0%,_transparent_70%)] opacity-10 animate-pulse" />
                <div className="w-16 h-16 bg-brand-teal/20 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-brand-teal rounded-sm rotate-45 animate-pulse duration-[2000ms]" />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full text-center">
                <span className="text-brand-teal font-mono text-[10px] uppercase tracking-widest">Pulse Frequency: 80Hz</span>
                <div className="h-2 bg-white/5 border border-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-brand-teal w-3/4" />
                </div>
                <span className="text-brand-teal font-mono text-[10px] uppercase tracking-widest">Duration: 15min</span>
              </div>
            </div>

            {/* BACK PANEL LAYER */}
            <div 
              ref={backPanelRef}
              className="absolute inset-0 rounded-[2.5rem] bg-[#050b14] border-4 border-white/10 flex flex-col items-center pt-12"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center">
                 <div className="w-8 h-8 bg-brand-teal rounded-full animate-ping" />
              </div>
              <div className="mt-8 space-y-4 w-full px-12">
                <div className="h-1 bg-white/5 rounded-full" />
                <div className="h-1 bg-white/5 rounded-full" />
                <div className="h-1 bg-white/5 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
