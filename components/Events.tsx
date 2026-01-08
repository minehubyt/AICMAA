
import React, { useState, useEffect, useMemo } from 'react';
import { EVENTS } from '../constants';
import { AICMAAEvent } from '../types';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Filter, 
  Timer, 
  ChevronLeft, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  CreditCard, 
  User, 
  Mail, 
  Phone, 
  Building, 
  QrCode,
  ArrowLeft,
  Share2,
  FileText,
  CalendarDays,
  LayoutGrid
} from 'lucide-react';

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-8">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
            <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-[10px] md:text-xs font-bold text-blue-200 uppercase tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const RegistrationModal: React.FC<{ event: AICMAAEvent; onClose: () => void }> = ({ event, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipId: '',
    organization: '',
    transactionId: ''
  });

  const upiId = "7541076176@ybl";
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=AICMAA&cu=INR&tn=Reg_${event.id}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiDeepLink)}`;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md animate-reveal opacity-50" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-reveal h-full max-h-[850px] border border-white/20">
        <div className="hidden md:flex md:w-[40%] bg-[#1a365d] p-12 flex-col justify-between text-white relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="text-[15vw] font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 italic text-white/50">AIC</div>
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-1 bg-blue-400 mb-10"></div>
            <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">Registration for</p>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-8">{event.title}</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-blue-100/70">
                <Calendar size={18} className="text-blue-400" />
                <span>{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-blue-100/70">
                <Clock size={18} className="text-blue-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-blue-100/70">
                <MapPin size={18} className="text-blue-400" />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-[11px] font-bold text-blue-300 uppercase tracking-widest mb-2">Instructions</p>
            <p className="text-xs text-blue-100/60 leading-relaxed">
              Please ensure all details match your AICMAA membership records for verified accreditation.
            </p>
          </div>
        </div>

        <div className="flex-1 p-8 md:p-14 overflow-y-auto custom-scrollbar flex flex-col relative">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#1a365d] transition-colors rounded-full hover:bg-gray-100">
            <X size={24} />
          </button>

          <div className="flex items-center gap-3 mb-12">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                  step === s ? 'bg-[#1a365d] text-white shadow-lg' : 
                  step > s ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  {step > s ? <CheckCircle2 size={20} /> : s}
                </div>
                {s < 3 && <div className={`h-[2px] w-8 transition-all duration-500 ${step > s ? 'bg-green-500' : 'bg-gray-100'}`} />}
              </React.Fragment>
            ))}
          </div>

          {step === 1 && (
            <div className="animate-reveal">
              <h2 className="text-3xl font-bold text-[#1a365d] mb-4 tracking-tight">Personal Details</h2>
              <p className="text-gray-500 mb-10">Step 1 of 3: Enter your professional information.</p>
              
              <form onSubmit={handleNext} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3.5 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none text-sm font-medium"
                        placeholder="Dr. Rajesh Kumar"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3.5 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none text-sm font-medium"
                        placeholder="rajesh@company.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3.5 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none text-sm font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Membership ID</label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        required
                        type="text" 
                        value={formData.membershipId}
                        onChange={e => setFormData({...formData, membershipId: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3.5 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none text-sm font-medium"
                        placeholder="AIC-2024-XXXX"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Organization / Firm</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      required
                      type="text" 
                      value={formData.organization}
                      onChange={e => setFormData({...formData, organization: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3.5 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none text-sm font-medium"
                      placeholder="TATA Steel Ltd."
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full py-4 bg-[#1a365d] text-white rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl flex items-center justify-center gap-3 group">
                    Continue to Payment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="animate-reveal">
              <div className="flex items-center gap-2 mb-4">
                <button onClick={() => setStep(1)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-[#1a365d] transition-all">
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-3xl font-bold text-[#1a365d] tracking-tight">Secure Payment</h2>
              </div>
              <p className="text-gray-500 mb-10">Step 2 of 3: Complete your secure UPI transaction.</p>

              <div className="bg-blue-50/50 rounded-[2rem] p-8 border border-blue-100/50 mb-8 flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-white p-4 rounded-2xl shadow-inner border border-gray-100 flex items-center justify-center">
                  <img src={qrUrl} alt="UPI QR Code" className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">UPI ID</p>
                    <div className="flex items-center justify-between bg-white px-4 py-2.5 rounded-xl border border-blue-100 font-mono text-sm font-bold text-[#1a365d]">
                      {upiId}
                      <button 
                        onClick={() => navigator.clipboard.writeText(upiId)}
                        className="text-blue-600 hover:text-blue-800 text-xs underline font-sans ml-2"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Account Name</p>
                    <p className="text-sm font-bold text-[#1a365d]">AICMAA National Council</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 bg-white/50 p-3 rounded-lg border border-blue-50">
                    <QrCode size={16} className="text-blue-400" />
                    Scan using any UPI App
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Transaction ID / UTR</label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      required
                      type="text" 
                      value={formData.transactionId}
                      onChange={e => setFormData({...formData, transactionId: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3.5 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all outline-none text-sm font-medium"
                      placeholder="Enter 12-digit UTR number"
                    />
                  </div>
                </div>
                
                <div className="pt-6">
                  <button onClick={() => setStep(3)} disabled={!formData.transactionId} className="w-full py-4 bg-[#1a365d] text-white rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-xl flex items-center justify-center gap-3 group disabled:opacity-50">
                    Submit Registration <CheckCircle2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-reveal flex flex-col items-center justify-center flex-1 py-10 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8 shadow-inner">
                <CheckCircle2 size={48} className="animate-reveal" />
              </div>
              <h2 className="text-4xl font-bold text-[#1a365d] mb-4 tracking-tight">Submission Received</h2>
              <p className="text-gray-500 max-w-sm mb-12 text-lg">
                Thank you, <span className="text-[#1a365d] font-bold">{formData.name}</span>. Your registration for <span className="text-[#1a365d] font-bold">{event.title}</span> is now processing.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 w-full mb-10 text-left space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Reference</span>
                  <span className="text-sm font-mono font-bold text-[#1a365d]">{formData.transactionId}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Next Step</span>
                  <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Manual Verification</span>
                </div>
                <p className="text-[11px] text-gray-400 text-center pt-2 italic leading-relaxed">
                  Accreditation credentials will be dispatched to {formData.email} following fiscal reconciliation.
                </p>
              </div>

              <button onClick={onClose} className="px-12 py-4 bg-[#1a365d] text-white rounded-full font-bold text-sm hover:bg-blue-900 transition-all shadow-xl">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CalendarView: React.FC<{ 
  onEventSelect: (id: string) => void;
  selectedEventId: string | null;
}> = ({ onEventSelect, selectedEventId }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getEventsForDay = (day: number) => {
    return EVENTS.filter(e => {
      const d = new Date(e.date);
      return d.getDate() === day && 
             d.getMonth() === currentDate.getMonth() && 
             d.getFullYear() === currentDate.getFullYear();
    });
  };

  const days = Array.from({ length: daysInMonth(currentDate) }, (_, i) => i + 1);
  const padding = Array.from({ length: firstDayOfMonth(currentDate) }, (_, i) => i);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="animate-reveal">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-[#1a365d] p-8 md:p-12 text-white flex justify-between items-center">
          <div className="space-y-1">
            <h3 className="text-3xl font-bold tracking-tight">
              {currentDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </h3>
            <p className="text-blue-200/60 text-xs font-bold uppercase tracking-widest">Global Event Calendar</p>
          </div>
          <div className="flex gap-4">
            <button onClick={prevMonth} className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><ChevronLeft size={24} /></button>
            <button onClick={nextMonth} className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><ChevronRight size={24} /></button>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
            {weekDays.map(wd => (
              <div key={wd} className="text-center text-[10px] font-black text-gray-400 uppercase tracking-widest py-2">
                {wd}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {padding.map(p => <div key={`p-${p}`} className="aspect-square"></div>)}
            {days.map(day => {
              const dayEvents = getEventsForDay(day);
              const hasForthcoming = dayEvents.some(e => e.type === 'forthcoming');
              const hasPast = dayEvents.some(e => e.type === 'past');
              const isSelected = dayEvents.some(e => e.id === selectedEventId);

              return (
                <div 
                  key={day}
                  onClick={() => dayEvents.length > 0 && onEventSelect(dayEvents[0].id)}
                  className={`relative aspect-square rounded-2xl md:rounded-[1.5rem] border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group
                    ${dayEvents.length > 0 ? 'bg-gray-50 hover:bg-white hover:shadow-xl hover:border-blue-200' : 'border-transparent text-gray-300 cursor-default'}
                    ${isSelected ? 'bg-blue-50 border-blue-600 shadow-lg scale-105' : 'border-gray-50'}
                  `}
                >
                  <span className={`text-lg font-bold ${dayEvents.length > 0 ? 'text-[#1a365d]' : ''}`}>{day}</span>
                  
                  <div className="absolute bottom-2 flex gap-1">
                    {hasForthcoming && <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>}
                    {hasPast && <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>}
                  </div>

                  {dayEvents.length > 0 && (
                    <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS.filter(e => {
          const d = new Date(e.date);
          return d.getMonth() === currentDate.getMonth() && d.getFullYear() === currentDate.getFullYear();
        }).map(event => (
          <div 
            key={event.id}
            onClick={() => onEventSelect(event.id)}
            className={`p-6 rounded-[2rem] border transition-all duration-500 cursor-pointer flex flex-col gap-4 overflow-hidden
              ${selectedEventId === event.id ? 'bg-[#1a365d] text-white shadow-2xl scale-105 border-transparent' : 'bg-white border-gray-100 hover:shadow-xl text-gray-600'}
            `}
          >
            <div className="flex gap-4">
               <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                  <img src={event.image} className="w-full h-full object-cover" alt="" />
               </div>
               <div className="flex flex-col justify-center gap-1 flex-1">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest w-fit ${
                    selectedEventId === event.id ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {event.category}
                  </span>
                  <h4 className="text-sm font-bold leading-tight line-clamp-2">{event.title}</h4>
                  <div className="flex items-center gap-2 text-[10px] opacity-70">
                    <Clock size={12} />
                    <span>{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} • {event.time}</span>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forthcoming' | 'past' | 'calendar'>('forthcoming');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const forthcomingEvents = useMemo(() => EVENTS.filter(e => e.type === 'forthcoming'), []);
  const pastEvents = useMemo(() => EVENTS.filter(e => e.type === 'past'), []);
  
  const displayEvents = activeTab === 'forthcoming' ? forthcomingEvents : pastEvents;
  const featuredEvent = forthcomingEvents[0];

  const handleEventClick = (id: string) => {
    setSelectedEventId(id === selectedEventId ? null : id);
  };

  const selectedEvent = EVENTS.find(e => e.id === selectedEventId);

  return (
    <div className="bg-[#fcfcfc] pt-24 md:pt-32 min-h-screen">
      {isRegistering && (activeTab === 'forthcoming' || activeTab === 'calendar') && (
        <RegistrationModal 
          event={selectedEvent || featuredEvent} 
          onClose={() => setIsRegistering(false)} 
        />
      )}

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12">
        <div className="flex items-center gap-2 text-[12px] font-bold text-gray-400 uppercase tracking-widest">
          <span className="hover:text-blue-600 cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-[#1a365d]">Conclaves & Summits</span>
        </div>
      </div>

      {activeTab === 'forthcoming' && featuredEvent && !selectedEventId && (
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-20 animate-reveal">
          <div className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl group border border-gray-100">
            <img 
              src={featuredEvent.image} 
              alt={featuredEvent.title} 
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[8s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] via-[#1a365d]/85 to-transparent"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-24 max-w-5xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="px-5 py-2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">Live Registration</span>
                <span className="text-blue-200 text-[11px] font-bold uppercase tracking-[0.2em]">{featuredEvent.category}</span>
              </div>
              <h1 className="text-white text-4xl md:text-7xl font-bold leading-[1.05] mb-10 tracking-tighter">
                {featuredEvent.title}
              </h1>
              <p className="text-blue-100/70 text-xl mb-14 max-w-2xl leading-relaxed font-medium">
                {featuredEvent.description}
              </p>
              
              <div className="mb-14">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Commencing In</p>
                <CountdownTimer targetDate={featuredEvent.date} />
              </div>

              <div className="flex flex-wrap gap-8 items-center">
                <button 
                  onClick={() => setIsRegistering(true)}
                  className="px-12 py-5 bg-white text-[#1a365d] rounded-full font-black text-[16px] hover:bg-blue-50 transition-all flex items-center gap-4 shadow-2xl hover:-translate-y-1"
                >
                  Secure Seat <ArrowRight size={20} />
                </button>
                <div className="flex items-center gap-10 border-l border-white/10 pl-10 h-12">
                  <div className="flex flex-col">
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Calendar</span>
                    <span className="text-white font-bold text-sm">{new Date(featuredEvent.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Location</span>
                    <span className="text-white font-bold text-sm">{featuredEvent.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-[1440px] mx-auto px-6 md:px-10 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="flex bg-gray-100/50 p-2 rounded-[2rem] border border-gray-100 shadow-inner">
            <button 
              onClick={() => { setActiveTab('forthcoming'); setSelectedEventId(null); }}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-500 ${activeTab === 'forthcoming' ? 'bg-[#1a365d] text-white shadow-xl' : 'text-gray-400 hover:text-[#1a365d]'}`}
            >
              <LayoutGrid size={16} /> Forthcoming
            </button>
            <button 
              onClick={() => { setActiveTab('past'); setSelectedEventId(null); }}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-500 ${activeTab === 'past' ? 'bg-[#1a365d] text-white shadow-xl' : 'text-gray-400 hover:text-[#1a365d]'}`}
            >
              Archive
            </button>
            <button 
              onClick={() => { setActiveTab('calendar'); setSelectedEventId(null); }}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-500 ${activeTab === 'calendar' ? 'bg-[#1a365d] text-white shadow-xl' : 'text-gray-400 hover:text-[#1a365d]'}`}
            >
              <CalendarDays size={16} /> Calendar
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-100 rounded-full cursor-pointer hover:border-blue-600 transition-all shadow-sm">
              <Filter size={18} className="text-blue-600" />
              <span className="text-sm font-bold text-[#1a365d]">Categorization</span>
              <ChevronRight size={16} className="text-gray-300 rotate-90 ml-2" />
            </div>
          </div>
        </div>

        {activeTab === 'calendar' && !selectedEventId ? (
          <CalendarView onEventSelect={handleEventClick} selectedEventId={selectedEventId} />
        ) : selectedEventId && selectedEvent ? (
          <div className="animate-reveal [animation-duration:0.6s]">
            <div className="flex justify-between items-center mb-12">
              <button 
                onClick={() => setSelectedEventId(null)}
                className="flex items-center gap-3 text-[#1a365d] font-bold text-[13px] uppercase tracking-widest hover:text-blue-600 transition-colors group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Overview
              </button>
              <button className="p-3 bg-white border border-gray-100 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                <Share2 size={20} className="text-gray-400" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-7">
                <div className="h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl mb-14 relative group">
                  <img src={selectedEvent.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]" alt="" />
                  <div className="absolute top-8 left-8">
                    <span className="px-8 py-2.5 bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full shadow-2xl">
                      {selectedEvent.category}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-[#1a365d] mb-10 leading-[1.1] tracking-tighter">
                  {selectedEvent.title}
                </h2>
                
                <div className="prose prose-2xl text-gray-600 max-w-none mb-16 space-y-8">
                  <p className="text-2xl leading-relaxed text-gray-500 font-medium">
                    {selectedEvent.description}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-600">
                    The All India CMA Association cordially invites you to this high-impact technical session. As the industrial landscape evolves, the role of Cost and Management Accountants in driving national productivity becomes increasingly critical. This event provides a platform for strategic networking, policy dialogue, and professional upskilling.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-10">
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50/50">
                    <h3 className="text-2xl font-bold text-[#1a365d] mb-12 pb-8 border-b border-gray-100 flex items-center justify-between tracking-tight">
                      Institutional Memo
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                    </h3>
                    
                    <div className="space-y-10">
                      <div className="flex gap-8 items-start group">
                        <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                          <Calendar size={28} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2">Schedule</p>
                          <p className="text-xl font-bold text-[#1a365d] leading-snug">
                            {new Date(selectedEvent.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-8 items-start group">
                        <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                          <Clock size={28} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2">Timing</p>
                          <p className="text-xl font-bold text-[#1a365d] leading-snug">{selectedEvent.time}</p>
                        </div>
                      </div>

                      <div className="flex gap-8 items-start group">
                        <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                          <MapPin size={28} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-2">Venue</p>
                          <p className="text-xl font-bold text-[#1a365d] leading-snug">{selectedEvent.venue}</p>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsRegistering(true)}
                      className="w-full mt-14 py-6 bg-[#1a365d] text-white rounded-[2rem] font-black text-lg hover:bg-blue-900 transition-all shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4"
                    >
                      {selectedEvent.type === 'forthcoming' ? (
                        <>Register Now <ArrowRight size={22} /></>
                      ) : (
                        <>Access Archive <FileText size={22} /></>
                      )}
                    </button>
                    
                    {selectedEvent.type === 'forthcoming' && (
                      <div className="mt-12 pt-10 border-t border-gray-100">
                         <p className="text-center text-gray-300 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Countdown to Launch</p>
                         <div className="flex justify-center scale-90">
                            <CountdownTimer targetDate={selectedEvent.date} />
                         </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-reveal">
            {displayEvents.map((event) => (
              <div 
                key={event.id}
                onClick={() => handleEventClick(event.id)}
                className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-700 cursor-pointer flex flex-col h-full"
              >
                <div className="h-72 relative overflow-hidden">
                  <img src={event.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="" />
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-white/95 backdrop-blur-md text-[#1a365d] font-black text-[10px] uppercase tracking-widest rounded-full shadow-lg">
                      {event.category}
                    </span>
                  </div>
                  {event.type === 'forthcoming' && (
                    <div className="absolute bottom-6 left-6 right-6 bg-blue-900/95 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 text-white">
                        <Timer size={16} className="text-blue-400" />
                        <span className="text-[11px] font-black uppercase tracking-widest">Registering</span>
                      </div>
                      <span className="text-white font-bold text-sm tabular-nums">
                        T-Minus {Math.floor((+new Date(event.date) - +new Date()) / (1000 * 60 * 60 * 24))} Days
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-blue-600 font-black text-[11px] uppercase tracking-[0.2em] mb-6">
                    <Calendar size={16} />
                    {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-6 leading-tight group-hover:text-blue-600 transition-colors tracking-tight">
                    {event.title}
                  </h3>
                  
                  <div className="mt-auto pt-8 border-t border-gray-50 space-y-6">
                    <div className="flex items-center gap-4 text-gray-400 text-[15px] font-medium">
                      <MapPin size={18} className="text-blue-200" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-[#1a365d] flex items-center gap-2 uppercase tracking-widest group-hover:gap-4 transition-all duration-500">
                        View Details <ArrowRight size={16} className="text-blue-600" />
                      </span>
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-500 shadow-sm">
                        <ChevronRight size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="bg-[#1a365d] py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="text-[30vw] font-black italic whitespace-nowrap -translate-x-1/4">CONCLAVE 2025</div>
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tighter">Strategic Partnerships & <br /> Institutional Sponsorship</h2>
          <p className="text-blue-100/60 text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
            Align your brand with India's most influential management accounting body. Partnership opportunities available for forthcoming summits.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="px-12 py-5 bg-white text-[#1a365d] rounded-full font-black text-lg hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.3)] transition-all active:scale-95">
               Corporate Delegate 
             </button>
             <button className="px-12 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-black text-lg hover:bg-white/5 transition-all active:scale-95">
               Sponsorship Prospectus
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
