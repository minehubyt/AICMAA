
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-screen flex flex-col md:flex-row overflow-hidden bg-white mt-0">
      
      {/* Background Image - Absolute fill ensures it goes behind header */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2000" 
          alt="AICMAA Background" 
          className="w-full h-full object-cover animate-slide-right"
        />
      </div>

      {/* Left Pane - Translucent box */}
      <div className="w-full md:w-[45%] lg:w-[40%] h-full flex flex-col bg-white/90 backdrop-blur-xl relative z-20 border-r border-gray-200/30">
        
        {/* Alignment spacer for Fixed Header - matches Header height exactly to prevent gaps */}
        <div className="h-[65px] lg:h-[73px] shrink-0"></div>

        {/* Content wrapper */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-14 animate-reveal">
          <div className="max-w-[400px] mb-20">
            {/* Professional, Black, Unbolded Typography */}
            <h1 className="text-black text-[20px] md:text-[24px] lg:text-[28px] font-normal leading-[1.3] mb-8 tracking-tight">
              AICMAA is the voice of India’s leading CMAs in New Delhi.
            </h1>
            
            <div className="animate-reveal [animation-delay:300ms]">
              <button className="px-8 py-2.5 bg-white hover:bg-gray-50 text-black text-[13px] font-medium rounded-full border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation - Docked at bottom */}
        <div className="pb-10 pl-6 md:pl-10 lg:pl-14 flex items-center gap-4 animate-reveal [animation-delay:500ms]">
          <div className="flex bg-white/90 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm overflow-hidden py-1 px-1.5 items-center">
            <button className="p-1 hover:bg-gray-50 rounded-full transition-colors">
              <ChevronLeft size={16} className="text-black" strokeWidth={2} />
            </button>
            <div className="w-[1px] h-3.5 bg-gray-200 self-center mx-1"></div>
            <button className="p-1 hover:bg-gray-50 rounded-full transition-colors">
              <ChevronRight size={16} className="text-black" strokeWidth={2} />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600 shadow-sm"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Right area allows background image to shine through fully */}
      <div className="relative flex-1 hidden md:block"></div>
    </section>
  );
};

export default Hero;
