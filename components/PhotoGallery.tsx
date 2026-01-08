
import React, { useState, useEffect } from 'react';
import { PHOTOS } from '../constants';
import { GalleryItem } from '../types';
import { Maximize2, X, Calendar, MapPin, Share2, Camera } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Summits', 'Regional', 'Institutional'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPhotos = PHOTOS.filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-24 md:pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-12">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-[#1a365d]">Visual Archive</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#1a365d] leading-[1.05] tracking-tighter mb-6">
              Capturing Our <br /> Institutional Legacy
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Explore the moments that define the All India CMA Association's journey through national summits, regional leadership meets, and policy roundtables.
            </p>
          </div>

          <div className="flex bg-white p-1 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-[#1a365d] text-white shadow-md' 
                    : 'text-gray-500 hover:text-[#1a365d] hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid System */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 bg-white border border-gray-100"
            >
              <img 
                src={photo.thumbnail} 
                alt={photo.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[2s]"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-[#1a365d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2 block">{photo.category} • {photo.date}</span>
                  <h3 className="text-white text-xl font-bold mb-4 leading-tight">{photo.title}</h3>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#1a365d] transition-all">
                        <Maximize2 size={18} />
                     </div>
                     <span className="text-white/60 text-xs font-bold uppercase tracking-widest">View Frame</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 md:p-12">
            <div 
              className="absolute inset-0 bg-[#0f172a]/95 backdrop-blur-xl animate-reveal" 
              onClick={() => setSelectedPhoto(null)} 
            />
            
            <div className="relative w-full max-w-6xl animate-reveal flex flex-col gap-8">
              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-4 text-white">
                    <Camera className="text-blue-500" />
                    <div>
                       <h3 className="text-2xl font-bold tracking-tight">{selectedPhoto.title}</h3>
                       <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{selectedPhoto.category} • {selectedPhoto.date}</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <button className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"><Share2 size={20} /></button>
                    <button 
                      onClick={() => setSelectedPhoto(null)}
                      className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all"
                    >
                      <X size={20} />
                    </button>
                 </div>
              </div>

              <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl p-4 md:p-6">
                 <img 
                  src={selectedPhoto.thumbnail} 
                  className="w-full h-auto max-h-[70vh] object-contain rounded-[2rem]" 
                  alt={selectedPhoto.title} 
                 />
                 <div className="p-8 md:p-12">
                    <p className="text-[#1a365d] text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                      {selectedPhoto.description}
                    </p>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
