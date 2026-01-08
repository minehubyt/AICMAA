
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    headline: "AICMAA is the voice of India’s leading CMAs in New Delhi.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2400",
    alt: "AICMAA Leadership Summit"
  },
  {
    id: 2,
    headline: "Advancing professional excellence across the manufacturing sector.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2400",
    alt: "Strategic Policy Roundtable"
  },
  {
    id: 3,
    headline: "Driving cost competitiveness for a developed India by 2047.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2400",
    alt: "National Economic Forum"
  },
  {
    id: 4,
    headline: "Empowering the next generation of management accountants.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2400",
    alt: "CMA Workshop"
  }
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    // Height accounts for exactly 80px fixed header
    <section className="relative w-full h-[calc(100svh-80px)] mt-[80px] flex overflow-hidden bg-white">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      {/* Frosted Pane */}
      <div className="relative z-10 w-full md:w-[50%] lg:w-[42%] xl:w-[38%] h-full flex flex-col bg-white/40 backdrop-blur-[30px] border-r border-white/20 shadow-2xl transition-all duration-500">
        
        {/* Main Text Content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8">
          <div className={`w-full max-w-[480px] transition-all duration-700 transform ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {/* AGGRESSIVE FLUID TYPOGRAPHY - Shrinks much more on mobile */}
            <h1 className="text-[#111] text-[clamp(1.2rem,6vw,2.25rem)] font-normal leading-[1.2] mb-6 md:mb-10 tracking-tight">
              {slides[currentIndex].headline}
            </h1>
            
            <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-black text-[13px] md:text-[15px] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Navigation Controls - Re-scaled for smaller screens */}
        <div className="pb-8 md:pb-12 px-6 md:px-12 lg:px-16 flex flex-wrap items-center gap-6 md:gap-10">
          {/* Arrow Pill Group - Shrunk for small screens */}
          <div className="flex items-center bg-white/95 rounded-full shadow-lg p-1 border border-white/80">
            <button 
              onClick={prevSlide}
              className="p-2 md:p-3 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-[#1a365d] outline-none"
            >
              <ChevronLeft size={18} className="md:w-[22px]" strokeWidth={2.5} />
            </button>
            <div className="w-[1px] h-4 md:h-6 bg-gray-200 mx-1 md:mx-2"></div>
            <button 
              onClick={nextSlide}
              className="p-2 md:p-3 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-[#1a365d] outline-none"
            >
              <ChevronRight size={18} className="md:w-[22px]" strokeWidth={2.5} />
            </button>
          </div>
          
          {/* Indicators - Smaller sizes for mobile */}
          <div className="flex items-center gap-1.5 md:gap-2.5">
             {slides.map((_, i) => (
               <button
                key={i}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(i);
                }}
                className={`transition-all duration-500 rounded-full ${
                  i === currentIndex 
                    ? 'w-6 md:w-8 h-1.5 md:h-2 bg-[#4A90E2] shadow-sm' 
                    : 'w-1.5 md:w-2 h-1.5 md:h-2 bg-white border border-gray-200'
                }`}
               />
             ))}
          </div>
        </div>
      </div>

      {/* Institutional Leader Watermark */}
      <div className="flex-1 hidden md:block relative pointer-events-none">
        <div className="absolute bottom-12 right-12 flex flex-col items-end animate-reveal opacity-80">
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-2 drop-shadow-md">
            INSTITUTIONAL LEADER
          </span>
          <div className="w-20 h-[2px] bg-white shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
