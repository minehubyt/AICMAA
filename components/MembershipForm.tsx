
import React, { useState, useMemo } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  User, 
  Award, 
  Zap, 
  ShieldAlert, 
  Mail, 
  Phone, 
  Lock,
  ChevronRight,
  Loader2,
  Fingerprint,
  FileCheck,
  Calendar,
  MapPin,
  Building,
  Briefcase,
  Smartphone
} from 'lucide-react';

// Data for Indian States and major Districts/Cities
const INDIA_REGIONS: Record<string, string[]> = {
  "Andaman and Nicobar Islands": ["Port Blair", "Nicobar", "South Andaman"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati"],
  "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro", "Pasighat"],
  "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Nagaon"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
  "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi"],
  "Goa": ["North Goa", "South Goa", "Panaji", "Margao"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Rohtak"],
  "Himachal Pradesh": ["Shimla", "Dharamshala", "Solan", "Mandi"],
  "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
  "Karnataka": ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru", "Belagavi"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
  "Ladakh": ["Leh", "Kargil"],
  "Lakshadweep": ["Kavaratti"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"],
  "Manipur": ["Imphal", "Thoubal", "Churachandpur"],
  "Meghalaya": ["Shillong", "Tura", "Jowai"],
  "Mizoram": ["Aizawl", "Lunglei", "Saiha"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
  "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur"],
  "Sikkim": ["Gangtok", "Namchi", "Geyzing"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Noida", "Meerut"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
};

interface MembershipFormProps {
  onSuccess: () => void;
}

const MembershipForm: React.FC<MembershipFormProps> = ({ onSuccess }) => {
  const [hasPassedCheck, setHasPassedCheck] = useState<boolean | null>(null);
  const [phase, setPhase] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    title: 'Mr.',
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Male',
    email: '',
    password: '',
    mobile: '',
    whatsapp: '',
    address: '',
    state: '',
    city: '',
    pin: '',
    membershipType: 'Associate',
    employmentStatus: 'Job',
    organization: '',
    designation: '',
    isIcmaiMember: 'Yes',
    icmaiMembershipType: 'Associate',
    cmaId: '',
    regNo: '',
  });

  const states = useMemo(() => Object.keys(INDIA_REGIONS).sort(), []);
  const cities = useMemo(() => formData.state ? INDIA_REGIONS[formData.state] : [], [formData.state]);

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPhase(2);
  };
  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPhase(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const brandDark = "#1A3140";
  const brandLight = "#F8FAFC";
  const slateDark = "#475569";
  
  const inputBase = `w-full bg-white border border-slate-100 rounded-2xl px-6 py-4.5 text-[${brandDark}] text-[16px] font-medium placeholder:text-slate-300 outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100 transition-all duration-300 shadow-sm hover:border-slate-200`;
  const labelBase = "block text-[13px] font-bold text-slate-500 mb-2.5 ml-1";

  // VIEW: ENTRY GATE
  if (hasPassedCheck === null) {
    return (
      <div className={`min-h-screen bg-[${brandLight}] pt-48 pb-20 flex flex-col items-center justify-start px-6`}>
        <div className="max-w-xl w-full text-center space-y-12">
          <div className="space-y-4 animate-reveal">
             <h1 className={`text-5xl font-bold text-[${brandDark}] tracking-tightest leading-tight`}>Institutional Entry</h1>
             <p className="text-slate-500 text-lg font-medium max-w-sm mx-auto">Access the National Practitioner Registry for All India CMAs.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 animate-reveal [animation-delay:200ms]">
            <button 
              onClick={() => setHasPassedCheck(true)}
              className={`group relative flex flex-col items-center p-10 bg-white hover:bg-[${brandDark}] rounded-[3rem] transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(26,49,64,0.1)] hover:shadow-2xl text-center border border-white`}
            >
              <div className={`w-16 h-16 rounded-3xl bg-slate-50 group-hover:bg-slate-700 flex items-center justify-center text-[${brandDark}] group-hover:text-white transition-all duration-500 mb-6`}>
                 <Fingerprint size={32} />
              </div>
              <span className={`block font-bold text-[${brandDark}] group-hover:text-white transition-colors text-lg mb-2`}>Qualified CMA</span>
              <span className="text-[14px] text-slate-400 group-hover:text-slate-400 transition-colors font-medium">I possess verified ICMAI credentials</span>
            </button>

            <button 
              onClick={() => setHasPassedCheck(false)}
              className="group flex flex-col items-center p-8 bg-transparent border border-slate-200 hover:border-slate-800 rounded-[2.5rem] transition-all duration-500"
            >
              <span className="block font-bold text-slate-400 group-hover:text-slate-800 transition-colors text-sm mb-1">Non-Qualified</span>
              <span className="text-xs text-slate-300 font-medium">I am currently a student or non-member</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // VIEW: REJECTION
  if (hasPassedCheck === false) {
    return (
      <div className={`min-h-screen bg-[${brandLight}] pt-48 flex flex-col items-center justify-start p-6`}>
        <div className="max-w-md w-full bg-white rounded-[4rem] p-16 text-center shadow-2xl animate-reveal border border-white">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-10">
            <ShieldAlert size={40} className="text-slate-400" />
          </div>
          <h2 className={`text-3xl font-bold text-[${brandDark}] mb-6 tracking-tight`}>Entry Refused</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-12 font-medium">
            Professional filing is restricted to qualified accountants. Please access resources via the <span className="text-slate-800 font-semibold underline">Student Hub</span>.
          </p>
          <button 
            onClick={onSuccess}
            className={`w-full py-6 bg-[${brandDark}] text-white rounded-3xl font-bold text-base hover:shadow-2xl transition-all`}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // VIEW: SUCCESS
  if (isSuccess) {
    return (
      <div className={`min-h-screen bg-[${brandLight}] pt-48 flex flex-col items-center justify-start p-6`}>
        <div className="max-w-2xl w-full bg-white rounded-[5rem] p-20 text-center shadow-[0_80px_200px_-50px_rgba(26,49,64,0.15)] animate-reveal border border-white">
          <div className="w-28 h-28 bg-slate-50 rounded-[3rem] flex items-center justify-center mx-auto mb-12 text-slate-700">
            <Check size={56} strokeWidth={3} />
          </div>
          <h2 className={`text-5xl font-bold text-[${brandDark}] mb-6 tracking-tighter`}>Lodgment Complete.</h2>
          <p className="text-slate-500 text-xl mb-16 max-w-sm mx-auto font-medium leading-relaxed">
            Your application for <span className="text-slate-800 font-bold">{formData.membershipType} Grade</span> is now under institutional review.
          </p>
          
          <div className="bg-slate-50 p-12 rounded-[4rem] text-left mb-16 space-y-6 border border-slate-100">
             <div className="flex justify-between items-center pb-6 border-b border-slate-200">
                <span className="text-sm font-bold text-slate-400">Registrant</span>
                <span className={`text-[${brandDark}] font-bold text-lg`}>{formData.firstName} {formData.lastName}</span>
             </div>
             <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-400">Institutional ID</span>
                <span className={`text-[${brandDark}] font-mono font-bold text-lg`}>#{Math.floor(Math.random()*90000)+10000}</span>
             </div>
          </div>

          <button 
            onClick={onSuccess}
            className={`px-20 py-7 bg-[${brandDark}] text-white rounded-full font-bold text-base hover:bg-slate-800 transition-all shadow-2xl active:scale-95`}
          >
            Close Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[${brandLight}] pt-48 pb-32 px-6`}>
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Simplified Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className={`text-5xl font-bold text-[${brandDark}] tracking-tightest`}>
            Member <span className={`text-[${slateDark}]`}>Enrolment</span>
          </h2>
          <div className="flex items-center justify-center gap-12">
             <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${phase === 1 ? 'bg-slate-800 w-10 shadow-lg' : 'bg-slate-200'}`}></div>
                <span className={`text-sm font-bold ${phase === 1 ? 'text-[#1A3140]' : 'text-slate-300'}`}>Individual Registry</span>
             </div>
             <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${phase === 2 ? 'bg-slate-800 w-10 shadow-lg' : 'bg-slate-200'}`}></div>
                <span className={`text-sm font-bold ${phase === 2 ? 'text-[#1A3140]' : 'text-slate-300'}`}>Professional Standing</span>
             </div>
          </div>
        </div>

        {/* Main Application Container */}
        <div className="bg-white rounded-[4rem] shadow-[0_60px_180px_-40px_rgba(26,49,64,0.12)] border border-white p-12 md:p-20 relative overflow-hidden">
          
          {/* Decorative Corner Icon */}
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-slate-50 rounded-full flex items-end justify-start p-10 opacity-30">
             <FileCheck className="text-slate-300" size={48} />
          </div>

          <form onSubmit={handleSubmit} className="animate-page-fade">
            
            {phase === 1 && (
              <div className="space-y-12">
                {/* Name and Title */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="md:col-span-1">
                    <label className={labelBase}>Title</label>
                    <select className={inputBase} value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}>
                      <option>Mr.</option><option>Ms.</option><option>Dr.</option><option>CMA.</option>
                    </select>
                  </div>
                  <div className="md:col-span-1.5">
                    <label className={labelBase}>First Name</label>
                    <input type="text" required placeholder="Alexander" className={inputBase} value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
                  </div>
                  <div className="md:col-span-1.5">
                    <label className={labelBase}>Last Name</label>
                    <input type="text" required placeholder="Hamilton" className={inputBase} value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
                  </div>
                </div>

                {/* DOB and Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelBase}>Date of Birth</label>
                    <div className="relative">
                       <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200" size={18} />
                       <input type="date" required className={inputBase} value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className={labelBase}>Gender</label>
                    <select className={inputBase} value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})}>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Email and Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelBase}>Institutional Email</label>
                    <div className="relative">
                       <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200" size={18} />
                       <input type="email" required placeholder="alexander@aicmaa.in" className={inputBase} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className={labelBase}>Access Password</label>
                    <div className="relative">
                       <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200" size={18} />
                       <input type="password" required placeholder="••••••••" className={inputBase} value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
                    </div>
                  </div>
                </div>

                {/* Mobile Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelBase}>Mobile Number</label>
                    <div className="relative">
                       <Phone className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200" size={18} />
                       <input type="tel" required placeholder="+91 00000 00000" className={inputBase} value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className={labelBase}>WhatsApp Number</label>
                    <div className="relative">
                       <Smartphone className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200" size={18} />
                       <input type="tel" placeholder="+91 00000 00000" className={inputBase} value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
                    </div>
                  </div>
                </div>

                {/* Address Group */}
                <div className="space-y-8">
                   <div className="w-full h-px bg-slate-50"></div>
                   <div className="grid grid-cols-1 gap-8">
                      <div>
                        <label className={labelBase}>Permanent Address</label>
                        <textarea required placeholder="Full residential or corporate address" className={`${inputBase} h-24 resize-none pt-4`} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <label className={labelBase}>State / UT</label>
                        <select required className={inputBase} value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})}>
                           <option value="">-- select state --</option>
                           {states.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelBase}>City / District</label>
                        <select required className={inputBase} value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} disabled={!formData.state}>
                           <option value="">-- select city --</option>
                           {cities.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelBase}>Postal Code</label>
                        <input type="text" required placeholder="000 000" className={inputBase} value={formData.pin} onChange={e => setFormData({...formData, pin: e.target.value})} />
                      </div>
                   </div>
                </div>
              </div>
            )}

            {phase === 2 && (
              <div className="space-y-12">
                {/* Membership and Employment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className={labelBase}>Membership Type Required</label>
                    <select className={inputBase} value={formData.membershipType} onChange={e => setFormData({...formData, membershipType: e.target.value})}>
                      <option>Associate</option><option>Fellow</option><option>Student</option><option>Corporate</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelBase}>Current Engagement</label>
                    <select className={inputBase} value={formData.employmentStatus} onChange={e => setFormData({...formData, employmentStatus: e.target.value})}>
                      <option>Job</option><option>Practice</option><option>Entrepreneurship</option><option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Organization Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className={labelBase}>Organization Name</label>
                    <div className="relative">
                      <Building className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200" size={18} />
                      <input type="text" required placeholder="Institutional Name" className={inputBase} value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className={labelBase}>Professional Designation</label>
                    <div className="relative">
                      <Briefcase className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200" size={18} />
                      <input type="text" required placeholder="CFO / Partner / Manager" className={inputBase} value={formData.designation} onChange={e => setFormData({...formData, designation: e.target.value})} />
                    </div>
                  </div>
                </div>

                {/* ICMAI Integration */}
                <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner space-y-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                     <span className="text-[15px] font-bold text-slate-600">Are you a member of The Institute of Cost Accountants of India?</span>
                     <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100">
                        {['Yes', 'No'].map(choice => (
                          <button
                            key={choice} type="button"
                            onClick={() => setFormData({...formData, isIcmaiMember: choice})}
                            className={`px-8 py-2 rounded-xl text-sm font-bold transition-all ${formData.isIcmaiMember === choice ? `bg-[${brandDark}] text-white shadow-lg` : 'text-slate-400 hover:text-slate-600'}`}
                          >
                            {choice}
                          </button>
                        ))}
                     </div>
                  </div>

                  {formData.isIcmaiMember === 'Yes' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 animate-reveal">
                       <div>
                          <label className={labelBase}>ICMAI Grade</label>
                          <select className={inputBase} value={formData.icmaiMembershipType} onChange={e => setFormData({...formData, icmaiMembershipType: e.target.value})}>
                             <option>Associate</option><option>Fellow</option><option>Student</option>
                          </select>
                       </div>
                       <div>
                          <label className={labelBase}>Membership No.</label>
                          <input type="text" required placeholder="M/XXXXX" className={`${inputBase} font-mono uppercase tracking-wider`} value={formData.cmaId} onChange={e => setFormData({...formData, cmaId: e.target.value})} />
                       </div>
                       <div>
                          <label className={labelBase}>Registration No. (Final)</label>
                          <input type="text" required placeholder="SRO/XXXXXX" className={`${inputBase} font-mono uppercase tracking-wider`} value={formData.regNo} onChange={e => setFormData({...formData, regNo: e.target.value})} />
                       </div>
                    </div>
                  )}
                </div>

                {/* Credential Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <label className="group h-48 rounded-[3rem] border-2 border-dashed border-slate-100 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:border-slate-300 transition-all shadow-sm">
                    <Upload size={24} className="text-slate-300 group-hover:text-slate-500 mb-4" />
                    <span className="text-sm font-bold text-slate-400">Professional Photo</span>
                    <input type="file" required className="hidden" />
                  </label>
                  <label className="group h-48 rounded-[3rem] border-2 border-dashed border-slate-100 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:border-slate-300 transition-all shadow-sm">
                    <User size={24} className="text-slate-300 group-hover:text-slate-500 mb-4" />
                    <span className="text-sm font-bold text-slate-400 text-center px-4">CMA Marksheet / Certificate</span>
                    <input type="file" required className="hidden" />
                  </label>
                </div>
              </div>
            )}

            {/* ACTION BAR */}
            <div className="mt-20 pt-12 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-10">
              {phase === 2 ? (
                <button 
                  type="button" onClick={handleBack}
                  className="text-base font-bold text-slate-400 hover:text-[#1A3140] flex items-center gap-4 transition-all group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Individual Registry
                </button>
              ) : <div className="hidden md:block" />}

              <div className="flex gap-6 w-full md:w-auto">
                {isSubmitting ? (
                  <div className={`px-20 py-6 bg-[${brandDark}] text-white rounded-full flex items-center gap-5 shadow-2xl`}>
                    <Loader2 size={22} className="animate-spin text-slate-400" />
                    <span className="text-base font-bold">Transmitting Registry...</span>
                  </div>
                ) : (
                  phase === 1 ? (
                    <button 
                      type="button" onClick={handleNext}
                      className={`w-full md:w-auto px-20 py-6 bg-[${brandDark}] text-white rounded-full font-bold text-base shadow-2xl hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4 group`}
                    >
                      Credential Details <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  ) : (
                    <button 
                      type="submit"
                      className="w-full md:w-auto px-24 py-7 bg-slate-800 text-white rounded-full font-bold text-base shadow-[0_30px_70px_-15px_rgba(30,41,59,0.3)] hover:bg-slate-900 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4"
                    >
                      Finalize Filing <Zap size={22} fill="currentColor" />
                    </button>
                  )
                )}
              </div>
            </div>

          </form>
        </div>

        {/* Support Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 opacity-60 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></div>
              <span className={`text-xs font-bold text-[${brandDark}]`}>AES-256 Filing Pipeline</span>
           </div>
           <div className="w-px h-4 bg-slate-200 hidden md:block"></div>
           <p className="text-xs font-bold text-slate-400">
              Registrar Helpline: registrar@aicmaa.in
           </p>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;
