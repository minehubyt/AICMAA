
import React, { useState, useEffect } from 'react';
import { NOTICES } from '../constants';
import { Notice } from '../types';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Bell, 
  ChevronRight, 
  ArrowLeft,
  Calendar,
  AlertCircle,
  Hash
} from 'lucide-react';

const NoticeBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Circular', 'Government', 'Professional', 'Legal'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredNotices = NOTICES.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         notice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isRecent = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14;
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 md:pt-32 pb-24">
      {/* Header Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-12">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-[#1a365d]">Notice Board</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#1a365d] leading-[1.05] tracking-tighter mb-6">
              Notices & <br /> Regulatory Circulars
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Access official AICMAA notifications, government directives, and professional standards for Cost & Management Accountants.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative group flex-1 sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search by Circular ID or Title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-2xl pl-12 pr-6 py-4 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-sm"
              />
            </div>
            <div className="flex bg-white p-1 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                      ? 'bg-[#1a365d] text-white shadow-md' 
                      : 'text-gray-500 hover:text-[#1a365d] hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* List of Notices */}
        <div className="space-y-6 animate-reveal">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div 
                key={notice.id} 
                className={`group bg-white rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${
                  notice.isImportant ? 'border-blue-100 bg-blue-50/10' : 'border-gray-100'
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Left Metadata */}
                  <div className="flex flex-col items-center gap-4 shrink-0 min-w-[120px]">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center w-full">
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">
                        {new Date(notice.date).toLocaleDateString('en-IN', { month: 'short' })}
                      </span>
                      <span className="text-3xl font-bold text-[#1a365d] leading-none">
                        {new Date(notice.date).getDate()}
                      </span>
                      <span className="text-[11px] font-bold text-gray-400 mt-1">
                        {new Date(notice.date).getFullYear()}
                      </span>
                    </div>
                    {isRecent(notice.date) && (
                      <span className="flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse">
                        <Bell size={12} fill="currentColor" /> New
                      </span>
                    )}
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                        <Hash size={14} className="text-blue-400" /> {notice.id}
                      </span>
                      <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                      <span className={`px-3 py-1 rounded-md text-[11px] font-black uppercase tracking-widest ${
                        notice.category === 'Circular' ? 'bg-blue-50 text-blue-700' :
                        notice.category === 'Government' ? 'bg-amber-50 text-amber-700' :
                        notice.category === 'Legal' ? 'bg-purple-50 text-purple-700' : 'bg-emerald-50 text-emerald-700'
                      }`}>
                        {notice.category}
                      </span>
                      {notice.isImportant && (
                        <span className="flex items-center gap-1.5 text-[11px] font-black text-blue-600 uppercase tracking-widest">
                          <AlertCircle size={14} /> High Priority
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a365d] mb-4 leading-tight group-hover:text-blue-700 transition-colors tracking-tight">
                      {notice.title}
                    </h3>
                    
                    <p className="text-gray-500 text-lg leading-relaxed max-w-4xl mb-8">
                      {notice.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                      <button className="flex items-center gap-3 px-8 py-4 bg-[#1a365d] text-white rounded-2xl font-bold text-sm hover:bg-blue-900 hover:shadow-xl transition-all active:scale-95 group/btn">
                        <Download size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
                        Download Official PDF
                        <span className="opacity-40 font-normal ml-1">({notice.fileSize})</span>
                      </button>
                      
                      <button className="flex items-center gap-2 text-[#1a365d] font-bold text-sm hover:text-blue-600 transition-colors">
                        View Details <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-[3rem] p-20 text-center border border-dashed border-gray-200">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search size={32} className="text-gray-300" />
               </div>
               <h3 className="text-2xl font-bold text-[#1a365d] mb-4">No Notices Found</h3>
               <p className="text-gray-500 max-w-md mx-auto">
                 We couldn't find any circulars matching your current search parameters. Try adjusting your filters or search keywords.
               </p>
               <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-10 px-8 py-3 bg-[#f0f4f8] text-[#1a365d] font-bold rounded-xl hover:bg-gray-100 transition-all"
               >
                 Reset All Filters
               </button>
            </div>
          )}
        </div>

        {/* Subscription Sidebar/Bottom */}
        <div className="mt-24 p-12 md:p-16 bg-[#1a365d] rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[40%] h-full opacity-5 pointer-events-none">
              <div className="text-[20vw] font-black italic -translate-y-1/4">ALERT</div>
           </div>
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="max-w-xl">
               <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter leading-tight">Never miss a critical professional update.</h2>
               <p className="text-blue-100/60 text-lg leading-relaxed">
                 Subscribe to AICMAA Pulse and receive real-time regulatory circulars and policy briefs directly in your professional inbox.
               </p>
             </div>
             
             <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
               <input 
                type="email" 
                placeholder="Professional Email Address"
                className="px-8 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-blue-200/40 outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-80"
               />
               <button className="px-10 py-5 bg-white text-[#1a365d] rounded-2xl font-black text-sm hover:bg-blue-50 transition-all shadow-xl whitespace-nowrap">
                 Activate Notifications
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
