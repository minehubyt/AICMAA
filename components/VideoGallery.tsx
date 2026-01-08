
import React, { useState, useEffect } from 'react';
import { VIDEOS } from '../constants';
import { GalleryItem } from '../types';
import { Play, X, Clock, Calendar, Share2, Youtube, Info, ChevronRight } from 'lucide-react';

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Keynotes', 'Technical', 'Interviews'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredVideos = VIDEOS.filter(v => activeCategory === 'All' || v.category === activeCategory);

  return (
    <div className="bg-[#0f172a] min-h-screen pt-24 md:pt-32 pb-24 text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-500 uppercase tracking-widest mb-12">
          <span className="hover:text-blue-400 cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-white">Cinematic Archive</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-[1.05] tracking-tighter mb-6">
              Insights in <br /> Motion
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Access premium recordings of technical workshops, policy keynotes, and exclusive leadership interviews from across India.
            </p>
          </div>

          <div className="flex bg-white/5 backdrop-blur-md p-1 rounded-2xl border border-white/10 shadow-2xl overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredVideos.map((video) => (
            <div 
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-8 shadow-2xl border border-white/5">
                <img 
                  src={video.thumbnail} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[3s] opacity-70 group-hover:opacity-100" 
                  alt={video.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
                
                {/* Custom Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 text-white pl-1">
                      <Play fill="currentColor" size={32} />
                   </div>
                </div>

                <div className="absolute top-8 left-8">
                   <span className="px-5 py-2 bg-[#0f172a]/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                      {video.category}
                   </span>
                </div>
              </div>

              <div className="px-4">
                 <div className="flex items-center gap-4 text-blue-400 text-[11px] font-black uppercase tracking-widest mb-4">
                    <Calendar size={14} /> {video.date}
                    <span className="w-1.5 h-1.5 bg-white/10 rounded-full"></span>
                    <Clock size={14} /> 12:45
                 </div>
                 <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{video.title}</h3>
                 <p className="text-gray-400 leading-relaxed text-lg line-clamp-2">{video.description}</p>
                 
                 <div className="mt-8 flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-500">
                    Play Session <ChevronRight size={16} className="text-blue-600" />
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Lightbox */}
        {selectedVideo && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-10">
            <div 
              className="absolute inset-0 bg-[#0f172a]/95 backdrop-blur-2xl animate-reveal" 
              onClick={() => setSelectedVideo(null)} 
            />
            
            <div className="relative w-full max-w-6xl animate-reveal flex flex-col gap-8">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-4">
                    <Youtube className="text-red-600" size={32} />
                    <div>
                       <h3 className="text-2xl font-bold tracking-tight">{selectedVideo.title}</h3>
                       <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{selectedVideo.category} • Full Recorded Session</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"><Share2 size={20} /></button>
                    <button 
                      onClick={() => setSelectedVideo(null)}
                      className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
                    >
                      <X size={20} />
                    </button>
                 </div>
              </div>

              <div className="bg-[#1e293b] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5">
                 <div className="aspect-video w-full">
                    <iframe 
                      src={selectedVideo.videoUrl}
                      className="w-full h-full"
                      allowFullScreen
                      title={selectedVideo.title}
                    />
                 </div>
                 <div className="p-10 md:p-16 flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex-1">
                       <div className="flex items-center gap-3 mb-8">
                          <Info size={20} className="text-blue-400" />
                          <h4 className="text-[12px] font-black uppercase tracking-widest">Session Insight</h4>
                       </div>
                       <p className="text-gray-300 text-xl leading-relaxed font-medium">
                         {selectedVideo.description}
                       </p>
                    </div>
                    <div className="w-full md:w-[320px] shrink-0 space-y-8 p-8 bg-white/5 rounded-[2rem] border border-white/10">
                       <div>
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Speaker</p>
                          <p className="text-lg font-bold">AICMAA National Council</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Duration</p>
                          <p className="text-lg font-bold">45 Minutes 20 Seconds</p>
                       </div>
                       <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl">
                          Download Transcript
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
