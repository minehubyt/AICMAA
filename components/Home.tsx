
import React from 'react';
import Hero from './Hero';
import HomeResources from './HomeResources';
import { LATEST_NEWS } from '../constants';
import { ArrowRight, Users, ArrowUpRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: 'home' | 'about' | 'mission' | 'events' | 'notice-board' | 'photo-gallery' | 'video-gallery' | 'legal-docs' | 'membership-apply') => void;
}

const IndiaMapIcon = ({ size = 400, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 450 500" fill="none" className={className}>
    <g stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
      <path d="M141.5 22.5L145 28L158.5 29.5L163 36.5L178 35.5L185 43.5L183.5 54.5L189 61.5L200.5 59.5L208.5 69L208.5 83L199.5 95.5L206.5 106.5L216.5 107.5L227.5 116.5L232.5 129L229.5 142.5L233.5 152.5L227.5 163L234.5 174.5L247 174L259 181.5L265.5 180L273.5 186.5L285.5 183L293.5 188.5L304 186L317 195L327 189L340.5 194.5L351.5 188L363 194.5L375 190L383 196.5L395.5 192L403.5 197L398 205L410 216L404 228.5L409 238L402.5 244.5L392.5 239.5L383.5 242L374 235.5L364.5 237L357 246.5L343.5 241L331.5 246.5L322.5 258L319.5 272.5L311.5 281L303.5 293.5L293.5 304L281.5 316.5L273 328L262.5 342L258 358L252.5 373L243 388L234.5 401L225.5 414.5L221 428.5L214.5 440.5L213.5 455.5L203 469.5L194.5 478.5L184.5 487L173.5 491.5L163.5 484.5L160.5 470L164.5 455L157.5 442L150.5 428L142 415L132.5 400L124.5 385L118.5 369L113.5 352.5L108 335L102 318L97.5 300L91.5 282.5L84.5 264.5L78 246.5L70 232L61 217.5L52.5 204.5L43.5 190.5L36.5 174.5L29 158.5L23.5 142.5L22.5 125L26.5 109L35 95L48.5 83L62 76.5L77 71.5L93 72.5L108.5 76L122.5 69L135 60.5L142.5 48L141.5 36L141.5 22.5Z" fill="currentColor" fillOpacity="0.1" />
    </g>
  </svg>
);

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero />

      {/* Institutional Impact Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative bg-[#1a2533] py-24 px-10 md:px-20 flex flex-col items-center text-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center">
              <IndiaMapIcon size={600} className="text-white transform scale-150" />
            </div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-white text-[18px] md:text-[22px] font-medium leading-tight max-w-sm mx-auto tracking-tight">
                AICMAA Member Professionals' Contributions to the Indian Economy
              </h3>
              <div className="flex flex-col items-center">
                <span className="text-white text-[72px] md:text-[96px] font-black leading-none tracking-tighter">50,000+</span>
                <span className="text-white text-[24px] md:text-[28px] font-bold opacity-90">CMA professionals supported</span>
              </div>
              <p className="text-blue-100/60 text-sm font-bold uppercase tracking-[0.2em]">PAN India Network</p>
              <button 
                onClick={() => onNavigate('about')}
                className="mt-6 px-10 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-100 transition-all shadow-xl"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative bg-[#243342] py-24 px-10 md:px-20 flex flex-col items-center text-center overflow-hidden">
             <div className="absolute inset-0 opacity-10 flex items-center justify-center">
              <Users size={400} strokeWidth={0.5} className="text-white transform -rotate-12" />
            </div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-white text-[18px] md:text-[22px] font-medium leading-tight max-w-sm mx-auto tracking-tight">
                India's Largest Industrial Assets Advance Economic and Social Mobility
              </h3>
              <div className="flex flex-col items-center">
                <span className="text-white text-[72px] md:text-[96px] font-black leading-none tracking-tighter">₹150</span>
                <span className="text-white text-[24px] md:text-[28px] font-bold opacity-90">Trillion assets managed</span>
              </div>
              <p className="text-blue-100/60 text-sm font-bold uppercase tracking-[0.2em]">Institutional Oversight</p>
              <button 
                onClick={() => onNavigate('mission')}
                className="mt-6 px-10 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-100 transition-all shadow-xl"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 -mt-10 mb-20">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 relative z-20">
            <div className="shrink-0 flex items-center justify-center relative w-20 h-20">
              <div className="absolute inset-0 border-[3px] border-black rounded-full"></div>
              <span className="text-black font-black text-xl tracking-tighter">AIC</span>
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-[#1a365d] text-2xl md:text-3xl font-bold tracking-tight">About AICMAA</h2>
              <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-4xl">
                AICMAA is a democratic PAN India association of Cost and Management Accountants working to promote professional excellence, industrial cost competitiveness, and expanded opportunity for all CMAs.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => onNavigate('about')}
                  className="px-10 py-3 bg-[#0066cc] text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all shadow-lg inline-flex items-center gap-2"
                >
                  Learn More <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeResources />

      <section className="py-24 md:py-32 bg-[#fcfcfc]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex justify-between items-end mb-16 pb-8 border-b border-gray-100">
            <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight text-[#1a365d]">The Wire</h2>
            <button className="text-sm font-bold text-[#1a365d] hover:text-blue-600 transition-all flex items-center gap-2">
              All Media <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-20">
            {LATEST_NEWS.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 mb-6 group-hover:text-blue-600 transition-colors">
                  <span className="bg-gray-50 px-3 py-1 rounded-md">{item.category}</span>
                  <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#1a365d] group-hover:text-blue-900 transition-all duration-300 mb-8 transform group-hover:translate-x-1">
                  {item.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-[13px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  Read Investigation <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a365d] py-32 md:py-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
          <div className="text-[40vw] font-black italic text-white leading-none">AIC</div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
           <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-white mb-8 tracking-tight leading-tight">Join the Inner Circle.</h2>
           <p className="text-blue-100/70 text-lg md:text-xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
             Partner with India’s most influential strategic accountants to shape the future of industrial policy and national development.
           </p>
           <button 
             onClick={() => onNavigate('membership-apply')}
             className="bg-white text-black px-12 py-5 text-[16px] font-bold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-2xl"
           >
             Apply for Membership
           </button>
        </div>
      </section>
    </>
  );
};

export default Home;
