
import React, { useEffect } from 'react';
import { Target, Shield, Zap, TrendingUp, Factory, Award, Landmark, Rocket, ChevronRight } from 'lucide-react';

const MissionValues: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missionPoints = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      title: "Strategic Networking",
      description: "Co-ordinate and facilitate Networking of CMA's Firm/LLP in order to optimize professional efficiency & harness principles of mutual benefit and make Cost & Management Accountants more productive and successful."
    },
    {
      icon: <Shield className="text-blue-600" size={32} />,
      title: "Rights Advocacy",
      description: "Protect legitimate rights of it's members & ensure level playing fields is extended to CMA by the government, regulators and organisations when soliciting any audit and assurance services from the professionals."
    },
    {
      icon: <Zap className="text-blue-600" size={32} />,
      title: "Scope Expansion",
      description: "Demand for exclusive rights for CMA in Cost Certification under RERA 2016, Stock Audits in Banks. Further endeavour to widen the scope of work in Cost Audits and Taxation."
    },
    {
      icon: <TrendingUp className="text-blue-600" size={32} />,
      title: "Career Horizons",
      description: "Broaden the career horizons of CMA in Jobs. Act as an interface between industries and CMA professionals. Inspire every CMA to deliver unmatched services in strategy, consulting, digital, technology and operations."
    },
    {
      icon: <Factory className="text-blue-600" size={32} />,
      title: "Industrial Competitiveness",
      description: "Revitalize Indian industries cost competitiveness. Drive them towards smart manufacturing and become a key enabler in Decision-Making process with simple analysis and presentation of IIoT data."
    }
  ];

  return (
    <div className="bg-white pt-24 md:pt-32">
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12">
        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 uppercase tracking-widest">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-[#1a365d]">Mission & Values</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[600px] mb-24 overflow-hidden rounded-[2.5rem] max-w-[1440px] mx-auto mx-6 md:mx-10 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Visionary leadership"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] via-[#1a365d]/80 to-transparent flex items-center">
          <div className="px-12 md:px-24 max-w-4xl animate-reveal">
            <div className="w-12 h-1 bg-blue-400 mb-8"></div>
            <h1 className="text-white text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tighter mb-6">
              Our Mission <br /> & Global Vision
            </h1>
            <p className="text-blue-100/90 text-[20px] md:text-[24px] font-medium leading-relaxed max-w-2xl">
              Charting the path for CMA excellence and driving India's industrial transformation towards a $30 Trillion economy by 2047.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Content with Sticky Sidebar */}
      <section className="pb-40 max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Sticky Left Column */}
          <div className="lg:w-[400px] lg:sticky lg:top-[120px] shrink-0">
            <div className="animate-reveal">
              <span className="text-[12px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4 block">INSTITUTIONAL CORE</span>
              <h2 className="text-[48px] md:text-[56px] font-bold text-[#1a365d] leading-[1.05] tracking-tighter mb-8">
                The AICMAA <br /> Mandate
              </h2>
              <div className="space-y-6">
                <p className="text-gray-500 text-lg leading-relaxed">
                  We are dedicated to fostering professional efficiency, protecting practitioner rights, and broadening the strategic impact of CMAs across global industries.
                </p>
                <div className="h-[1px] w-20 bg-gray-100"></div>
                <div className="flex items-center gap-4 text-[#1a365d] font-bold group cursor-pointer">
                  <span className="group-hover:text-blue-600 transition-colors">Download Charter PDF</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Content Block */}
          <div className="flex-1 grid grid-cols-1 gap-10">
            {missionPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="group p-12 md:p-16 rounded-[3rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-sm flex items-center justify-center shrink-0 group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-500 border border-gray-100">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-3 block">GOAL 0{idx + 1}</span>
                    <h3 className="text-[32px] font-bold text-[#1a365d] mb-6 tracking-tight group-hover:text-blue-700 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-gray-500 text-[19px] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2047 Section - Parallax Effect Feel */}
      <section className="bg-[#0f172a] py-40 relative overflow-hidden rounded-t-[5rem]">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-500/5 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-400/5 blur-[120px] rounded-full"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-4xl mb-32">
            <h4 className="text-blue-400 font-black text-[14px] uppercase tracking-[0.4em] mb-6">STRATEGIC ROADMAP 2047</h4>
            <h2 className="text-white text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tighter leading-[1.05]">Reimagining the <br /> Future of Cost Audit</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Vision Point 1 */}
            <div className="bg-white/5 backdrop-blur-md p-14 rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all duration-700 group hover:-translate-y-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Rocket className="text-blue-400" size={32} />
              </div>
              <h3 className="text-[28px] font-bold text-white mb-6 tracking-tight">Entrepreneurial Empowerment</h3>
              <p className="text-blue-100/60 leading-relaxed text-[18px]">
                Promote independent entrepreneurial ventures among our cadre to create at least one <span className="text-white font-bold">"Global Big-4"</span> like CMA LLP by 2047.
              </p>
            </div>

            {/* Vision Point 2 */}
            <div className="bg-white/5 backdrop-blur-md p-14 rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all duration-700 group hover:-translate-y-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Award className="text-blue-400" size={32} />
              </div>
              <h3 className="text-[28px] font-bold text-white mb-6 tracking-tight">Global Brand Leadership</h3>
              <p className="text-blue-100/60 leading-relaxed text-[18px]">
                Establish <span className="text-white font-bold">Brand CMA</span> as the preferred source for Performance Audit, Propriety Audits and emerge as a leader in Predictive Analytics.
              </p>
            </div>

            {/* Vision Point 3 */}
            <div className="bg-white/5 backdrop-blur-md p-14 rounded-[3.5rem] border border-white/10 hover:bg-white/10 transition-all duration-700 group hover:-translate-y-4">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <Landmark className="text-blue-400" size={32} />
              </div>
              <h3 className="text-[28px] font-bold text-white mb-6 tracking-tight">National Development</h3>
              <p className="text-blue-100/60 leading-relaxed text-[18px]">
                Ensure CMA's active role in realizing <span className="text-white font-bold">Viksit Bharat 2047</span>, transforming India into a developed superpower.
              </p>
            </div>
          </div>

          <div className="mt-40 flex flex-col md:flex-row items-center justify-between gap-12 pt-20 border-t border-white/5">
             <div className="flex items-center gap-8">
                <div className="text-[48px] font-black text-white/10 italic">2047</div>
                <p className="text-white/40 text-sm font-bold tracking-widest uppercase">Target Centenary Milestone</p>
             </div>
             <button className="px-12 py-6 bg-white text-[#0f172a] rounded-full font-black text-lg hover:bg-blue-50 transition-all shadow-2xl">
                Explore The Roadmap
             </button>
          </div>
        </div>
      </section>

      {/* Values Callout */}
      <section className="py-48 bg-white text-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h3 className="text-[#1a365d] text-[36px] md:text-[52px] font-bold leading-tight max-w-5xl mx-auto tracking-tight">
            "We foster an ecosystem where <span className="text-blue-600 italic">professionalism</span> meets strategic foresight to redefine the industrial landscape of India."
          </h3>
          <div className="mt-16 h-1 w-32 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default MissionValues;
