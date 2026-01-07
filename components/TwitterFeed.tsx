
import React, { useEffect } from 'react';
import { Twitter, Loader2 } from 'lucide-react';

const TwitterFeed: React.FC = () => {
  useEffect(() => {
    // Function to initialize Twitter widgets
    const initTwitter = () => {
      // @ts-ignore
      if (window.twttr && window.twttr.widgets) {
        // @ts-ignore
        window.twttr.widgets.load();
      }
    };

    // Trigger the load for any new DOM elements injected by React
    initTwitter();

    // Polling as a fallback because the script in index.html might load after this component mounts
    const interval = setInterval(() => {
      // @ts-ignore
      if (window.twttr && window.twttr.widgets) {
        // @ts-ignore
        window.twttr.widgets.load();
        // If the widget has successfully rendered, we can clear the interval
        if (document.querySelector('.twitter-timeline-rendered')) {
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-blue-600"></div>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-[11px]">Social Pulse</h4>
            </div>
            <h2 className="text-[32px] font-normal tracking-tight text-black leading-tight mb-8">
              Real-time updates from @AICMAA
            </h2>
            <p className="text-gray-600 text-[17px] mb-10 leading-relaxed">
              Stay connected with the All India CMA Association. Follow our official X (Twitter) handle for the latest policy updates and announcements.
            </p>
            <a 
              href="https://twitter.com/AICMAA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-xl"
            >
              <Twitter size={18} fill="currentColor" />
              Follow @AICMAA
            </a>
          </div>
          
          <div className="flex-1 w-full bg-[#f8fafc] rounded-[2.5rem] p-4 md:p-6 border border-gray-100 shadow-inner min-h-[600px] overflow-hidden">
            <div className="w-full h-[600px] overflow-y-auto custom-scrollbar relative bg-white rounded-2xl shadow-sm">
              {/* Official Twitter Timeline Embed for @AICMAA */}
              <a 
                className="twitter-timeline" 
                data-height="600" 
                data-theme="light" 
                data-chrome="noheader nofooter noborders transparent"
                href="https://twitter.com/AICMAA?ref_src=twsrc%5Etfw"
              >
                {/* Minimalist Loading State - Replaced by real feed when script executes */}
                <div className="flex flex-col items-center justify-center h-[500px] text-gray-400 gap-4">
                  <Loader2 className="animate-spin text-blue-500" size={32} />
                  <span className="text-sm font-medium">Loading official feed...</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwitterFeed;
