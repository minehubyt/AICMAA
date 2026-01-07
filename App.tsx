
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PolicyAssistant from './components/PolicyAssistant';
import { POLICY_ISSUES, LATEST_NEWS } from './constants';
import { ArrowRight, ChevronRight, BarChart3, Users, Globe, Building2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white custom-scrollbar selection:bg-blue-100">
      <Header />
      <Hero />

      {/* Trust & Impact Stats - Mixed Case */}
      <section className="py-[10%] md:py-24 bg-[#f8fafc] border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-12 text-center">
            <div className="flex flex-col items-center group cursor-default">
              <div className="w-[min(64px,12vw)] h-[min(64px,12vw)] rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-all duration-500 transform group-hover:-translate-y-1">
                <Users className="text-[#1a365d]" size={28} />
              </div>
              <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1a365d] mb-1">50,000+</div>
              <div className="text-[min(12px,2.5vw)] font-bold text-blue-600/70">Professional Members</div>
            </div>
            <div className="flex flex-col items-center group cursor-default">
              <div className="w-[min(64px,12vw)] h-[min(64px,12vw)] rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-all duration-500 transform group-hover:-translate-y-1">
                <Building2 className="text-[#1a365d]" size={28} />
              </div>
              <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1a365d] mb-1">₹150T</div>
              <div className="text-[min(12px,2.5vw)] font-bold text-blue-600/70">Assets Managed</div>
            </div>
            <div className="flex flex-col items-center group cursor-default">
              <div className="w-[min(64px,12vw)] h-[min(64px,12vw)] rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-all duration-500 transform group-hover:-translate-y-1">
                <Globe className="text-[#1a365d]" size={28} />
              </div>
              <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1a365d] mb-1">12 Chapters</div>
              <div className="text-[min(12px,2.5vw)] font-bold text-blue-600/70">National Network</div>
            </div>
            <div className="flex flex-col items-center group cursor-default">
              <div className="w-[min(64px,12vw)] h-[min(64px,12vw)] rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-all duration-500 transform group-hover:-translate-y-1">
                <BarChart3 className="text-[#1a365d]" size={28} />
              </div>
              <div className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[#1a365d] mb-1">Top 5%</div>
              <div className="text-[min(12px,2.5vw)] font-bold text-blue-600/70">Policy Influence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Grid - Mixed Case */}
      <section className="py-[12%] md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10 transition-all">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[2px] w-8 bg-blue-600"></div>
                <h4 className="text-blue-600 font-bold text-[min(13px,3vw)]">Core Priorities</h4>
              </div>
              <h2 className="text-fluid-h2 font-bold tracking-tight text-[#1a365d] leading-[1.1] transition-all">Advancing the Future of Business and Global Public Policy.</h2>
            </div>
            <button className="flex items-center gap-2 text-[min(14px,3vw)] font-bold group border-b-2 border-transparent hover:border-blue-600 pb-2 transition-all whitespace-nowrap text-[#1a365d]">
              All Issues <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {POLICY_ISSUES.map((issue) => (
              <div key={issue.id} className="group relative h-[min(500px,60vh)] overflow-hidden rounded-[2rem] cursor-pointer shadow-lg transition-all duration-700 hover:shadow-2xl">
                <img 
                  src={issue.image} 
                  alt={issue.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/95 via-[#1a365d]/20 to-transparent transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 p-[8%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-[clamp(1.4rem,2.2vw,1.8rem)] font-bold mb-4 tracking-tight">{issue.title}</h3>
                  <p className="text-white/80 text-[clamp(0.85rem,1.1vw,1rem)] mb-8 line-clamp-3 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {issue.description}
                  </p>
                  <div className="flex items-center gap-2 text-white text-[13px] font-bold hover:text-blue-300 transition-colors">
                    Learn More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Wire / News Feed - Mixed Case */}
      <section className="py-[10%] md:py-32 bg-[#fcfcfc]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex justify-between items-end mb-16 pb-8 border-b border-gray-100">
            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold tracking-tight text-[#1a365d]">The Wire</h2>
            <button className="text-[min(13px,3vw)] font-bold text-[#1a365d] hover:text-blue-600 transition-all flex items-center gap-2">
              All Media <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-20">
            {LATEST_NEWS.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="flex items-center gap-4 text-[min(12px,2.5vw)] font-bold text-gray-400 mb-6 group-hover:text-blue-600 transition-colors">
                  <span className="bg-gray-50 px-3 py-1 rounded-md">{item.category}</span>
                  <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-bold leading-tight text-[#1a365d] group-hover:text-blue-900 transition-all duration-300 mb-8 transform group-hover:translate-x-1">
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

      {/* Responsive CTA - Mixed Case */}
      <section className="bg-[#1a365d] py-[15%] md:py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <div className="text-[20vw] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 italic text-white/50">AICMAA</div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
           <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-white mb-8 tracking-tight leading-[1.05]">Join the Inner Circle.</h2>
           <p className="text-blue-100/70 text-[clamp(1.1rem,1.5vw,1.4rem)] mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
             Partner with India’s most influential strategic accountants to shape the future of industrial policy and national development.
           </p>
           <button className="bg-white text-[#1a365d] px-12 py-5 text-[16px] font-bold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
             Apply for Membership
           </button>
        </div>
      </section>

      <Footer />
      <PolicyAssistant />
    </div>
  );
};

export default App;
