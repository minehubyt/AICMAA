
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Download, 
  FileText, 
  ShieldCheck, 
  Search,
  BookOpen,
  Scale
} from 'lucide-react';

interface DocumentPage {
  pageNumber: number;
  title?: string;
  content: React.ReactNode;
}

const Flipbook: React.FC<{ pages: DocumentPage[], title: string }> = ({ pages, title }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const totalPages = pages.length;

  const next = () => {
    if (currentPage < totalPages - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prev = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Book Container */}
      <div className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[1.4/1] bg-white rounded-lg shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-200">
        <div className="absolute inset-0 flex">
          {/* Left Page (Desktop) */}
          <div className="hidden md:flex flex-1 border-r border-gray-100 p-10 md:p-16 bg-gradient-to-r from-gray-50/50 to-white relative">
            <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-200/20 to-transparent pointer-events-none" />
            <div className={`w-full transition-all duration-300 ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
               {pages[currentPage * 2] ? (
                 <div className="h-full flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                       <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{title}</span>
                       <span className="text-[10px] font-bold text-gray-300">PAGE {pages[currentPage * 2].pageNumber}</span>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
                       {pages[currentPage * 2].content}
                    </div>
                 </div>
               ) : (
                 <div className="h-full flex items-center justify-center opacity-10">
                    <img src="https://aicmaa.com/logo.png" className="w-32" alt="" />
                 </div>
               )}
            </div>
          </div>

          {/* Right Page (Desktop) */}
          <div className="flex-1 p-10 md:p-16 bg-white relative">
             <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-200/20 to-transparent pointer-events-none" />
             <div className={`w-full h-full transition-all duration-300 ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {/* On mobile we show current page, on desktop we show current * 2 + 1 */}
                {window.innerWidth < 768 ? (
                   <div className="h-full flex flex-col">
                      <div className="flex justify-between items-start mb-8">
                         <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{title}</span>
                         <span className="text-[10px] font-bold text-gray-300">PAGE {pages[currentPage].pageNumber}</span>
                      </div>
                      <div className="flex-1 overflow-y-auto custom-scrollbar">
                         {pages[currentPage].content}
                      </div>
                   </div>
                ) : (
                   pages[currentPage * 2 + 1] ? (
                     <div className="h-full flex flex-col">
                        <div className="flex justify-between items-start mb-8">
                           <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{title}</span>
                           <span className="text-[10px] font-bold text-gray-300">PAGE {pages[currentPage * 2 + 1].pageNumber}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
                           {pages[currentPage * 2 + 1].content}
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex items-center justify-center opacity-5">
                        <FileText size={120} />
                     </div>
                   )
                )}
             </div>
          </div>
        </div>

        {/* Page Turn Buttons */}
        <button 
          onClick={prev}
          disabled={currentPage === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-all disabled:opacity-0"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          disabled={window.innerWidth < 768 ? currentPage >= totalPages - 1 : currentPage >= Math.ceil(totalPages / 2) - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white transition-all disabled:opacity-0"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Controls */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
         <div className="flex-1 flex items-center gap-6">
            <div className="px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm text-sm font-bold text-[#1a365d] flex items-center gap-3">
               <span className="text-gray-300">Progression</span>
               <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500" 
                    style={{ width: `${((currentPage + 1) / (window.innerWidth < 768 ? totalPages : Math.ceil(totalPages / 2))) * 100}%` }}
                  />
               </div>
               <span>{currentPage + 1} / {window.innerWidth < 768 ? totalPages : Math.ceil(totalPages / 2)}</span>
            </div>
         </div>
         
         <div className="flex gap-4">
            <button className="p-4 bg-white border border-gray-100 rounded-2xl text-[#1a365d] hover:text-blue-600 shadow-sm transition-all hover:-translate-y-0.5">
               <Maximize2 size={20} />
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-[#1a365d] text-white rounded-2xl font-bold text-sm hover:bg-blue-900 shadow-xl transition-all hover:-translate-y-0.5 group">
               <Download size={18} className="group-hover:translate-y-0.5 transition-transform" /> 
               Download Institutional PDF
            </button>
         </div>
      </div>
    </div>
  );
};

const LegalDocs: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState<'moa' | 'bylaws'>('moa');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const moaPages: DocumentPage[] = [
    {
      pageNumber: 1,
      content: (
        <div className="prose prose-slate max-w-none">
          <h1 className="text-xl md:text-2xl font-bold text-center border-b-2 border-black pb-4 mb-8">MEMORANDUM OF ASSOCIATION OF ALL INDIA COST AND MANAGEMENT ACCOUNTANTS ASSOCIATION</h1>
          <p className="text-xs font-bold text-center mb-10 italic">(A society registered under the Societies Registration Act 1860 as applicable to the National Capital Territory of Delhi)</p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="font-bold">1.</span>
              <div>
                <h3 className="font-bold uppercase mb-2">Name: ALL INDIA COST AND MANAGEMENT ACCOUNTANTS ASSOCIATION (AICMAA)</h3>
                <p>The name of the Society is ALL INDIA COST AND MANAGEMENT ACCOUNTANTS ASSOCIATION. This is a welfare Society for Cost and Management Accountants who are the members and students of the Institute of Cost Accountants of India established under Cost and Works Accountants Act, 1959.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">2.</span>
              <div>
                <h3 className="font-bold uppercase mb-2">Registered Office:</h3>
                <p className="font-bold">The registered office of the Society, at present, is situated at House No-1/44 First Floor, Gurudwara Road, Lalita Park, Laxmi Nagar, Delhi-110092.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">3.</span>
              <p>The society will operate on all India basis & abroad.</p>
            </div>

            <div className="flex gap-4">
              <span className="font-bold">4.</span>
              <p>Society may open branch offices in other states of the India.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      pageNumber: 2,
      content: (
        <div className="prose prose-slate max-w-none">
          <h2 className="text-xl font-bold border-b pb-2 mb-6">5. Aims and Objects</h2>
          <p className="mb-4">The basic aims and objects for which the Society is formed and registered are the following:-</p>
          
          <ul className="list-none space-y-4">
            <li className="flex gap-4">
              <span className="font-bold">(i)</span>
              <span>To promote & propagate, professional & welfare activities of the Cost and Management Accountants who are members and students of The Institute of Cost Accountants of India.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">(ii)</span>
              <span>To promote research in the field of Cost & Management Accountancy and Direct and Indirect Taxation.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">(iii)</span>
              <span>To protect the common & larger legal as well as financial interest of Practitioners of Cost & Management Accountants (PCMA) in India.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold">(iv)</span>
              <span>To serve as a forum for exchange of ideas, experiences, collection and dissemination of information on business, trade and commerce.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
        pageNumber: 3,
        content: (
          <div className="prose prose-slate max-w-none">
            <ul className="list-none space-y-4">
              <li className="flex gap-4">
                <span className="font-bold">(v)</span>
                <span>To promote professional activities of the members and others related to the profession through performance, seminars, talks show and workshops in order to achieve high degree of proficiency in field of accountancy.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(vi)</span>
                <span>To develop and provide basic analytical tool-kit for management so that scientific approaches may be used in implementing various management applications tools in the industry with focused approach on Micro, Small & Medium Enterprises (MSME).</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(vii)</span>
                <span>To provide technical assistance and consultancy to organizations with the help of experts available at the association.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(viii)</span>
                <span>To publish Books, Journals, Periodicals etc. whether in print or electronic media for the welfare of academicians and practitioners.</span>
              </li>
            </ul>
          </div>
        )
      },
      {
        pageNumber: 4,
        content: (
          <div className="prose prose-slate max-w-none">
            <ul className="list-none space-y-4">
              <li className="flex gap-4">
                <span className="font-bold">(ix)</span>
                <span>To provide financial aid, in the publication of any literature for the promotion of the above objects.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(x)</span>
                <span>To use the audio-visual media for furtherance of its aims and objects.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(xi)</span>
                <span>To give or establish prizes for excellence in the field of (a) Social services (b) Professional understanding (c) Scientific and Technical work/research for the furtherance of Cost & Management Accountancy and Taxation matters in the country.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(xii)</span>
                <span>To subscribe or give donations, financially or otherwise, to such other societies, agencies, associations or institutions who are working in the profession of Accountancy.</span>
              </li>
            </ul>
          </div>
        )
      },
      {
        pageNumber: 5,
        content: (
          <div className="prose prose-slate max-w-none">
            <ul className="list-none space-y-4">
              <li className="flex gap-4">
                <span className="font-bold">(xiii)</span>
                <span>To receive any grant, donation, fee, support and assistance in any form for the furtherance of the objects of the society.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(xiv)</span>
                <span>To purchase, lease, secure by exchange or license, hire or otherwise acquire any moveable or immovable property and any interest, easement, right and privilege necessary or alter any moveable and immovable property of the Society and undertake such other activities as may be necessary and incidental to the objects of the Society.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(xv)</span>
                <span>To frame bye-laws and rules and regulations for the conduct of the business of the Association/Society and its branches/offices.</span>
              </li>
            </ul>
          </div>
        )
      },
      {
        pageNumber: 6,
        content: (
          <div className="prose prose-slate max-w-none">
            <ul className="list-none space-y-4">
              <li className="flex gap-4">
                <span className="font-bold">(xvi)</span>
                <span>To do all such other lawful acts, deeds and things as are incidental to the attainment of the above objects or any of them.</span>
              </li>
              <li className="flex gap-4 font-bold italic">
                <span className="font-bold">(xvii)</span>
                <span>Society will not engage in any commercial activities. Society will not receive any foreign contribution without approval of Home Ministry and applicable regulatory authorities.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(xviii)</span>
                <span>All the income, earnings, moveable properties of the society shall be utilized and applied towards the promotion of its aims and objects.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold">(xix)</span>
                <span>The aims of objective of the society also includes the advancement of any other object of the general public utility for the benefit of all the persons belongings to whatsoever community irrespective of caste, creed or religion.</span>
              </li>
            </ul>
          </div>
        )
      }
  ];

  const bylawsPages: DocumentPage[] = [
    {
      pageNumber: 1,
      content: (
        <div className="prose prose-slate max-w-none">
          <h1 className="text-xl md:text-2xl font-bold text-center border-b-2 border-black pb-4 mb-8">RULES AND REGULATIONS OF ALL INDIA COST AND MANAGEMENT ACCOUNTANTS ASSOCIATION</h1>
          
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 w-1/4 font-bold">(1) TITLE OF THE SOCIETY</td>
                <td className="border border-gray-300 p-4">
                  The name of the society shall be <span className="font-bold">"ALL INDIA COST AND MANAGEMENT ACCOUNTANTS ASSOCIATION"</span> and Abbreviation <span className="font-bold">"AICMAA"</span> will be used wherever required.<br/>
                  <span className="font-bold">These Rules shall come into force with effect from the date of registration of the Society by the Registrar of Societies.</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-bold">DEFINITION</td>
                <td className="border border-gray-300 p-4 space-y-2">
                  <p><span className="font-bold">"General Body"</span> Means a body comprising of all the valid members of the Association collectively.</p>
                  <p><span className="font-bold">"Governing Body"</span> means the President, Vice President, Secretary and Treasurer along with other member of Governing Body of the Society duly notified by the Secretary in this regard.</p>
                  <p><span className="font-bold">"Member"</span> Every subscriber to the Memorandum of the Society, every member of the Governing Body and every person who has applied and accepted by competent authority in the society for the membership of the Association.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      pageNumber: 2,
      content: (
        <div className="prose prose-slate max-w-none">
          <table className="w-full border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4 w-1/4 font-bold">(3) MEMBERSHIP</td>
                <td className="border border-gray-300 p-4">
                  <h4 className="font-bold underline mb-2">Eligibility:</h4>
                  <p className="mb-2">For Membership in General:</p>
                  <p className="mb-4 pl-4">(1) Any person who is a qualified CMA.</p>
                  <p className="mb-2">For Governing Council (Body) Membership:</p>
                  <p className="mb-2 pl-4">(1) Any person who is a qualified CMA.</p>
                  <p className="mb-2 pl-4">(2) Must not be holding COP other than The Institute of Cost Accountants of India (CMA).</p>
                  <p className="mb-2 pl-4">(3) Should not hold any office of profit or influential position in the ICMAI.</p>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4 font-bold">(4) DISQUALIFICATION</td>
                <td className="border border-gray-300 p-4 space-y-2 text-sm">
                  <p>(a) On contesting Regional or Central Council Election of ICMAI.</p>
                  <p>(b) Holding COP of ICAI-CA / ICSI-CS.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-24 md:pt-32 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        
        {/* Navigation / Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <div className="max-w-2xl">
             <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                <span className="hover:text-blue-600 cursor-pointer">Home</span>
                <span>/</span>
                <span className="text-[#1a365d]">Constitutional Documents</span>
             </div>
             <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#1a365d] leading-[1.05] tracking-tighter mb-6">
                Charter & <br /> Governance Rules
             </h1>
             <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                The foundational documents governing the All India Cost and Management Accountants Association, outlining our mission, structural authority, and professional bylaws.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row bg-white p-1.5 rounded-[2rem] border border-gray-100 shadow-2xl">
             <button 
              onClick={() => setActiveDoc('moa')}
              className={`flex items-center gap-3 px-8 py-4 rounded-[1.5rem] font-bold text-sm transition-all ${activeDoc === 'moa' ? 'bg-[#1a365d] text-white shadow-xl' : 'text-gray-400 hover:text-[#1a365d]'}`}
             >
                <Scale size={18} /> Memorandum (MOA)
             </button>
             <button 
              onClick={() => setActiveDoc('bylaws')}
              className={`flex items-center gap-3 px-8 py-4 rounded-[1.5rem] font-bold text-sm transition-all ${activeDoc === 'bylaws' ? 'bg-[#1a365d] text-white shadow-xl' : 'text-gray-400 hover:text-[#1a365d]'}`}
             >
                <ShieldCheck size={18} /> Rules & By-Laws
             </button>
          </div>
        </div>

        {/* The Flipbook View */}
        <div className="animate-reveal [animation-duration:1s]">
           {activeDoc === 'moa' ? (
              <Flipbook pages={moaPages} title="Memorandum of Association" />
           ) : (
              <Flipbook pages={bylawsPages} title="Rules and Regulations" />
           )}
        </div>

        {/* Institutional Significance Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-20">
           <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                 <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d]">Statutory Compliance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                 Registered under the Societies Registration Act 1860, ensuring a legal framework for national professional representation.
              </p>
           </div>
           <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                 <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d]">Transparent Audit</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                 Constitutional mandates for annual audits by qualified professional examiners to maintain fiscal integrity.
              </p>
           </div>
           <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                 <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d]">Member Welfare</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                 Foundational objects focused on the protection and advancement of Cost and Management Accountants nationwide.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default LegalDocs;
