
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Our Work',
    'Our Thinking',
    'Representation',
    'Connect',
    'Donate'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white ${isScrolled ? 'py-2 shadow-sm border-b border-gray-100' : 'py-4'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex justify-between items-center relative">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 group cursor-pointer shrink-0 z-[110]">
          <div className="relative w-9 h-9 flex items-center justify-center">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`absolute transition-all duration-500`}
                style={{ transform: `rotate(${i * 40}deg) translateY(-11px)` }}
              >
                <svg width="7" height="7" viewBox="0 0 24 24" fill={i % 2 === 0 ? "#ef4444" : "#1e3a8a"}>
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
              </div>
            ))}
            <span className="text-[#1a365d] font-black text-[9px] mt-0.5">AIC</span>
          </div>
          <div className="text-[20px] font-bold tracking-tight text-[#1a365d] whitespace-nowrap">
            AICMAA
          </div>
        </div>

        {/* Desktop Navigation - Updated Items */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((name) => (
            <a 
              key={name} 
              href="#" 
              className="flex items-center gap-1.5 text-[15px] font-semibold text-[#1a365d] hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              {name}
              {name !== 'Donate' && (
                <ChevronDown size={14} className="text-gray-400 mt-0.5" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Section: Member Portal & Search */}
        <div className="flex items-center gap-4 z-[110]">
          <button className="hidden md:block px-6 py-2 bg-[#f0f4f8] hover:bg-[#e2e8f0] text-[#1a365d] text-[14px] font-bold rounded-full transition-all duration-300 whitespace-nowrap">
            Member Portal
          </button>
          
          <button className="p-2 text-[#1a365d] hover:bg-gray-100 rounded-full transition-colors">
            <Search size={21} strokeWidth={2.5} />
          </button>

          <button 
            className="lg:hidden p-2 text-[#1a365d] hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full pt-24 px-10 pb-10">
          <div className="flex-1 space-y-6 overflow-y-auto py-8">
            {navItems.map((name) => (
              <a 
                key={name} 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-2xl font-bold text-[#1a365d] hover:text-blue-600 transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
          <div className="pt-8 border-t border-gray-100">
            <button className="w-full py-4 bg-[#1a365d] text-white font-bold rounded-xl text-lg mb-4">
              Member Portal
            </button>
            <p className="text-center text-sm text-gray-500 font-medium">
              © 2024 All India CMA Association
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
