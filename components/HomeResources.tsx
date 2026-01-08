
import React, { useState, useEffect } from 'react';
import { RESOURCE_TABS, ResourceTab, ResourceSubTab, ResourceItem } from '../constants';
import { ChevronRight, Calendar, Video, FileText, Newspaper, Megaphone, ArrowUpRight } from 'lucide-react';

const HomeResources: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(RESOURCE_TABS[0].id);
  const [activeSubTabId, setActiveSubTabId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get active tab object
  const activeTab = RESOURCE_TABS.find(tab => tab.id === activeTabId) as ResourceTab;

  // Initialize sub-tab if available when main tab changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      if (activeTab?.subTabs && activeTab.subTabs.length > 0) {
        setActiveSubTabId(activeTab.subTabs[0].id);
      } else {
        setActiveSubTabId(null);
      }
      setIsTransitioning(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [activeTabId]);

  const getIcon = (id: string) => {
    switch(id) {
      case 'representation': return <Megaphone size={18} />;
      case 'events': return <Calendar size={18} />;
      case 'videos': return <Video size={18} />;
      case 'circulars': return <FileText size={18} />;
      case 'cma-news': return <Newspaper size={18} />;
      default: return null;
    }
  };

  // Determine current items to display
  let displayItems: ResourceItem[] = [];
  if (activeSubTabId && activeTab.subTabs) {
    const subTab = activeTab.subTabs.find(st => st.id === activeSubTabId);
    displayItems = subTab?.items || [];
  } else {
    displayItems = activeTab.items || [];
  }

  const handleSubTabChange = (id: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSubTabId(id);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-16">
          
          {/* Section Header & Primary Tabs */}
          <div className="space-y-12">
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4 border-b border-gray-100 pb-0 overflow-x-auto no-scrollbar">
              {RESOURCE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-3 px-2 py-6 text-[17px] font-bold transition-all relative group whitespace-nowrap ${
                    activeTabId === tab.id 
                      ? 'text-[#1a365d]' 
                      : 'text-gray-400 hover:text-[#1a365d]'
                  }`}
                >
                  <span className={`transition-colors duration-300 ${activeTabId === tab.id ? 'text-blue-600' : 'text-gray-300 group-hover:text-gray-400'}`}>
                    {getIcon(tab.id)}
                  </span>
                  {tab.label}
                  {activeTabId === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-blue-600 rounded-t-full animate-fadeIn" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area - items-start is critical for sticky sidebar to work */}
          <div className="flex flex-col lg:flex-row gap-16 min-h-[900px] items-start">
            
            {/* Sidebar Sub-Navigation (Sticky Desktop) */}
            {activeTab.subTabs ? (
              <div className="w-full lg:w-[420px] shrink-0 lg:sticky lg:top-[120px] pt-4 z-10">
                <div className="animate-reveal" key={`sidebar-${activeTabId}`}>
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-12 pl-6">
                    DEPARTMENTAL ARCHIVE
                  </p>
                  <div className="flex flex-col gap-3">
                    {activeTab.subTabs.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubTabChange(sub.id)}
                        className={`group flex items-center justify-between px-8 py-7 rounded-[2rem] transition-all duration-500 text-left border-2 ${
                          activeSubTabId === sub.id 
                            ? 'bg-blue-50/50 text-blue-600 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)] border-blue-100 scale-[1.02]' 
                            : 'text-gray-500 hover:text-[#1a365d] hover:bg-gray-50 border-transparent'
                        }`}
                      >
                        <span className={`text-[18px] leading-snug transition-all pr-4 ${activeSubTabId === sub.id ? 'font-bold' : 'font-medium'}`}>
                          {sub.label}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeSubTabId === sub.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                          <ChevronRight 
                            size={18} 
                            className={`transition-transform ${activeSubTabId === sub.id ? 'rotate-90' : ''}`} 
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {/* Content Grid with Animation Wrapper */}
            <div className={`w-full ${activeTab.subTabs ? 'flex-1' : ''}`}>
              {/* Mobile View for Sub-Tabs */}
              {activeTab.subTabs && (
                <div className="lg:hidden flex gap-4 overflow-x-auto no-scrollbar mb-10 pb-4 border-b border-gray-100">
                  {activeTab.subTabs.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleSubTabChange(sub.id)}
                      className={`whitespace-nowrap px-8 py-3.5 text-[13px] font-black uppercase tracking-widest rounded-full transition-all ${
                        activeSubTabId === sub.id 
                          ? 'bg-[#1a365d] text-white shadow-xl' 
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}

              <div 
                className={`grid gap-10 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} ${activeTab.subTabs ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
              >
                {displayItems.length > 0 ? displayItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group flex flex-col justify-between p-12 rounded-[3.5rem] bg-white border border-gray-100 hover:border-blue-200 hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 cursor-pointer min-h-[420px] hover:-translate-y-3"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-12">
                        <span className="text-[10px] font-black text-blue-600 tracking-[0.3em] uppercase bg-blue-50 px-5 py-2.5 rounded-full">
                          {item.date || item.duration || 'NEW'}
                        </span>
                        <div className="h-[1px] flex-1 bg-gray-50"></div>
                      </div>
                      <h3 className="text-[28px] font-bold text-[#1a365d] leading-[1.15] tracking-tight group-hover:text-blue-700 transition-colors mb-8">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-[17px] line-clamp-3 leading-relaxed transition-all duration-300 font-medium opacity-80">
                        Detailed institutional analysis regarding {activeTab.label.toLowerCase()}. This resource provide strategic foresight for CMA professionals and national stakeholders.
                      </p>
                    </div>
                    
                    <div className="mt-14 flex items-center justify-between border-t border-gray-50 pt-10">
                      <span className="text-[15px] font-bold text-[#1a365d] flex items-center gap-3 group-hover:text-blue-600 transition-colors">
                        View Assessment
                        <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-700 shadow-sm">
                        <ChevronRight size={24} />
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-full py-40 text-center bg-gray-50/50 rounded-[4rem] border-2 border-dashed border-gray-200">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                      <FileText className="text-gray-200" size={40} />
                    </div>
                    <p className="text-gray-400 font-bold text-xl uppercase tracking-widest opacity-60">Pending Publication</p>
                  </div>
                )}
              </div>

              {/* View All Button - Elegant Footer */}
              <div className="mt-32 pt-20 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex flex-col max-w-lg">
                  <h4 className="text-[#1a365d] text-[32px] font-bold tracking-tighter leading-tight">Access the full institutional archive</h4>
                  <p className="text-gray-400 text-[17px] font-medium mt-4">
                    Explore our comprehensive repository of policy briefings, technical session recordings, and regulatory updates.
                  </p>
                </div>
                <button className="group px-16 py-7 bg-[#1a365d] text-white text-[18px] font-black rounded-full hover:bg-blue-900 transition-all duration-700 flex items-center gap-6 active:scale-95 shadow-[0_30px_60px_-10px_rgba(26,54,93,0.3)]">
                  Explore Hub
                  <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeResources;
