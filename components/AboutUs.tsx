
import React, { useEffect } from 'react';
import { Shield, Target, Award, ArrowUpRight } from 'lucide-react';

const committeeChairs = [
  {
    committee: "Corporate Governance",
    chair: "Shri. Rajesh Kumar",
    company: "TATA Steel Ltd.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    committee: "Education & Workforce",
    chair: "Ms. Sunita Sharma",
    company: "Reliance Industries",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    committee: "Energy & Environment",
    chair: "Dr. Arvind Mehta",
    company: "ONGC India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    committee: "Health & Retirement",
    chair: "Shri. Vikram Seth",
    company: "Apollo Hospitals",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  },
  {
    committee: "Tax & Fiscal Policy",
    chair: "Ms. Priya Nair",
    company: "Infosys Ltd.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    committee: "Infrastructure & Logistics",
    chair: "Shri. Anil Deshmukh",
    company: "Adani Ports",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-24 md:pt-32">
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12">
        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 uppercase tracking-widest">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-[#1a365d]">Institutional Profile</span>
        </div>
      </div>

      {/* Hero Bento Grid */}
      <section className="pb-32 max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Main Title Block */}
          <div className="md:col-span-5 min-h-[400px] bg-[#1a365d] rounded-[3.5rem] p-16 flex flex-col justify-end text-white shadow-premium relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full -mr-20 -mt-20 blur-[100px] group-hover:bg-blue-500/20 transition-all duration-1000"></div>
            <div className="relative z-10">
               <span className="text-blue-400 text-[11px] font-black uppercase tracking-[0.4em] mb-6 block">ESTABLISHED 2021</span>
               <h1 className="text-[56px] md:text-[72px] font-bold leading-[1] tracking-tighter mb-4">
                 Who <br /> We Are
               </h1>
            </div>
          </div>

          {/* Intro Text Block */}
          <div className="md:col-span-7 flex flex-col justify-center py-8">
            <p className="text-[28px] md:text-[34px] text-[#1a365d] leading-[1.25] font-bold mb-10 tracking-tight">
              AICMAA is a first-in-kind democratic PAN India association driving professional reform and economic growth.
            </p>
            <p className="text-[19px] text-gray-500 leading-relaxed font-medium mb-10 opacity-90">
              Registered under the Societies Registration Act, 1860, and headquartered in the national capital, AICMAA is dedicated exclusively to the empowerment of the Cost and Management Accountant (CMA) fraternity.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
               <div className="px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                  <Shield size={20} className="text-blue-600" />
                  <span className="font-bold text-[#1a365d] text-sm">Statutory Recognition</span>
               </div>
               <div className="px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-4">
                  <Target size={20} className="text-blue-600" />
                  <span className="font-bold text-[#1a365d] text-sm">Pan India Network</span>
               </div>
            </div>
          </div>

          {/* Large Visual Asset */}
          <div className="md:col-span-8 h-[550px] rounded-[4rem] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
              alt="CMA Leadership Conference" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Secondary Info Block */}
          <div className="md:col-span-4 min-h-[550px] bg-[#f8fafc] rounded-[4rem] p-14 flex flex-col justify-between border border-gray-100 shadow-sm group">
            <div className="space-y-6">
              <div className="w-16 h-1 bg-blue-600 group-hover:w-24 transition-all duration-700"></div>
              <h3 className="text-3xl font-bold text-[#1a365d] tracking-tight">Professional <br /> Commitment</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed font-medium">
                We are committed to nurturing a pro-industry ecosystem, bringing about a paradigm shift in our professional approach.
              </p>
            </div>
            <div className="h-[250px] rounded-[2.5rem] overflow-hidden mt-10 shadow-lg border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" 
                alt="Strategic Planning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Policy Committees with Improved Sticky Logic */}
      <section className="bg-[#0f172a] py-40 rounded-t-[5rem]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            
            {/* Left Sticky Sidebar */}
            <div className="lg:w-[450px] shrink-0 lg:sticky lg:top-[120px]">
              <div className="animate-reveal">
                <span className="text-blue-400 font-black text-[11px] uppercase tracking-[0.4em] mb-6 block">LEADERSHIP COUNCILS</span>
                <h2 className="text-[48px] md:text-[58px] font-bold text-white leading-[1.05] tracking-tighter mb-10">
                  Policy Hubs & <br /> Committee Chairs
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed font-medium mb-12">
                  Our strategic committees drive the reforms agenda and provide elite leadership in shaping professional standards and national industrial input.
                </p>
                <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-4 text-white font-bold group cursor-pointer hover:text-blue-400 transition-colors">
                      <span>View Committee Guidelines</span>
                      <ArrowUpRight size={18} />
                   </div>
                   <div className="h-[1px] w-32 bg-white/10"></div>
                </div>
              </div>
            </div>

            {/* Grid of Chairs (Right Side) */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10">
              {committeeChairs.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 backdrop-blur-md rounded-[3rem] p-12 flex flex-col gap-10 hover:bg-white/10 transition-all duration-700 cursor-pointer group border border-white/5 hover:border-blue-500/30 hover:-translate-y-2 shadow-2xl"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-[26px] font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors max-w-[220px]">
                      {item.committee}
                    </h3>
                    <Award className="text-white/10 group-hover:text-blue-500/40 transition-colors" size={40} />
                  </div>
                  
                  <div className="flex items-center gap-6 pt-10 border-t border-white/5 mt-auto">
                    <div className="w-24 h-24 rounded-[2rem] overflow-hidden shrink-0 border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-700 shadow-xl">
                      <img 
                        src={item.image} 
                        alt={item.chair} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                      />
                    </div>
                    <div>
                      <div className="text-[22px] font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-500 mb-1">
                        {item.chair}
                      </div>
                      <div className="text-[15px] text-gray-400 font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                        {item.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
