
import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

interface SubCategory {
  title: string;
  items: string[];
}

interface NavItem {
  name: string;
  megaMenu?: SubCategory[];
}

interface HeaderProps {
  onNavigate: (view: 'home' | 'about' | 'mission' | 'events' | 'notice-board' | 'photo-gallery' | 'video-gallery' | 'legal-docs' | 'membership-apply') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navConfig: NavItem[] = [
    {
      name: 'Our Work',
      megaMenu: [
        {
          title: 'About Us',
          items: ['Who Are We', 'Mission & Vision', 'By-Laws & MOA', 'Annual Reports', 'Office Bearers']
        },
        {
          title: 'Updates',
          items: ['Events', 'Notice Board', 'CMA News']
        },
        {
          title: 'Gallery',
          items: ['Photo Gallery', 'Video Gallery']
        }
      ]
    },
    {
      name: 'Membership',
      megaMenu: [
        {
          title: 'Join AICMAA',
          items: ['Application Process', 'Eligibility Criteria', 'Fee Structure', 'Corporate Membership']
        },
        {
          title: 'Member Services',
          items: ['Member Portal', 'Subscription Renewal', 'Professional Indemnity', 'Digital ID Card']
        },
        {
          title: 'Directory',
          items: ['Find a Professional', 'Regional Chapters', 'Empanelled Firms']
        }
      ]
    },
    { name: 'Our Thinking' },
    { name: 'Representation' },
    { name: 'Connect' }
  ];

  const headerHeight = 'h-[80px]';

  const handleLinkClick = (view: any) => {
    onNavigate(view);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const mapLabelToView = (label: string): any => {
    if (label === 'Who Are We') return 'about';
    if (label === 'Mission & Vision') return 'mission';
    if (label === 'By-Laws & MOA') return 'legal-docs';
    if (label === 'Events') return 'events';
    if (label === 'Notice Board') return 'notice-board';
    if (label === 'Photo Gallery') return 'photo-gallery';
    if (label === 'Video Gallery') return 'video-gallery';
    if (label === 'Application Process') return 'membership-apply';
    return 'home';
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-100 shadow-sm ${headerHeight}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center h-full">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-2 md:gap-3 cursor-pointer shrink-0 z-[110]"
          onClick={() => handleLinkClick('home')}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="absolute"
                style={{ transform: `rotate(${i * 36}deg) translateY(-14px)` }}
              >
                <svg className="w-1.5 md:w-2" viewBox="0 0 24 24" fill={i % 2 === 0 ? "#ef4444" : "#1e3a8a"}>
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
              </div>
            ))}
            <span className="font-black text-[clamp(7px,1.5vw,10px)] text-[#1a365d] mt-0.5">AIC</span>
          </div>
          <div className="text-[clamp(16px,2.5vw,22px)] font-extrabold tracking-tightest text-[#1a365d]">
            AICMAA
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 h-full ml-6">
          {navConfig.map((item) => (
            <div key={item.name} className="static h-full flex items-center">
              <button 
                onClick={() => toggleDropdown(item.name)}
                className={`flex items-center gap-1.5 text-[clamp(13px,1.2vw,15px)] font-semibold py-4 whitespace-nowrap transition-colors ${
                  activeDropdown === item.name ? 'text-blue-600' : 'text-[#1a365d]'
                }`}
              >
                {item.name}
                {item.megaMenu && (
                  <ChevronDown size={14} className={`mt-0.5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* Mega Menu - With smooth dropdown animation */}
              {item.megaMenu && activeDropdown === item.name && (
                <div 
                  className="fixed left-0 right-0 w-full bg-white border-b border-gray-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-[90] top-[80px] animate-dropdown"
                >
                  <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-[clamp(1.2rem,3vw,2.2rem)] font-normal text-[#1a365d] tracking-tight">
                        {item.name}
                      </h2>
                      <button 
                        onClick={() => setActiveDropdown(null)}
                        className="p-2 text-gray-400 hover:text-black transition-colors"
                      >
                        <X size={28} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="w-full h-[1px] bg-gray-900/10 mb-8"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                      {item.megaMenu.map((category, catIdx) => (
                        <div key={catIdx} className="space-y-4">
                          {/* Bolded Sub-Header */}
                          <h3 className="text-[12px] font-bold text-gray-900 uppercase tracking-[0.2em] mb-4">
                            {category.title}
                          </h3>
                          <div className="flex flex-col gap-3">
                            {category.items.map((subItem, idx) => (
                              <button 
                                key={idx}
                                onClick={() => handleLinkClick(mapLabelToView(subItem))}
                                className="text-[clamp(0.85rem,1.4vw,1.1rem)] font-normal text-gray-600 hover:text-blue-600 transition-colors block w-fit text-left leading-snug"
                              >
                                {subItem}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4 z-[110]">
          <button className="hidden md:block px-4 lg:px-6 py-2.5 bg-[#f0f4f8] hover:bg-[#e2e8f0] text-[#1a365d] text-[clamp(12px,1.1vw,15px)] font-bold rounded-full transition-colors whitespace-nowrap">
            Member Portal
          </button>
          
          <button className="p-2 md:p-2.5 rounded-full hover:bg-black/5 text-[#1a365d]">
            <Search size={22} strokeWidth={2} />
          </button>

          <button 
            className="lg:hidden p-2 md:p-2.5 rounded-full hover:bg-black/5 text-[#1a365d]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - with smooth dropdown effect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[105] overflow-y-auto pt-[80px] animate-dropdown">
          <div className="flex flex-col min-h-full px-5 md:px-8 pb-10">
            <div className="flex-1 space-y-8 py-8">
              {navConfig.map((item) => (
                <div key={item.name} className="space-y-4 border-b border-gray-50 pb-6">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between text-[clamp(1.3rem,4vw,2rem)] font-normal text-[#1a365d] text-left"
                  >
                    {item.name}
                    {item.megaMenu && <ChevronDown className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} size={24} />}
                  </button>
                  
                  {item.megaMenu && activeDropdown === item.name && (
                    <div className="space-y-8 pt-4 pl-4 border-l-2 border-blue-50 animate-dropdown">
                      {item.megaMenu.map((cat) => (
                        <div key={cat.title} className="space-y-4">
                          <h4 className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase">{cat.title}</h4>
                          <div className="flex flex-col gap-3">
                            {cat.items.map((sub) => (
                              <button 
                                key={sub} 
                                onClick={() => handleLinkClick(mapLabelToView(sub))}
                                className="block text-[clamp(0.95rem,3vw,1.1rem)] text-gray-500 font-normal text-left py-1"
                              >
                                {sub}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-6">
              <button className="w-full py-5 bg-[#1a365d] text-white font-bold rounded-2xl text-lg mb-4">
                Member Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
