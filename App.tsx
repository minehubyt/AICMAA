
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MissionValues from './components/MissionValues';
import Events from './components/Events';
import NoticeBoard from './components/NoticeBoard';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import LegalDocs from './components/LegalDocs';
import PolicyAssistant from './components/PolicyAssistant';
import MembershipForm from './components/MembershipForm';

type ViewType = 'home' | 'about' | 'mission' | 'events' | 'notice-board' | 'photo-gallery' | 'video-gallery' | 'legal-docs' | 'membership-apply';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  // Map view names to clean URL hashes
  const viewToHash: Record<ViewType, string> = {
    'home': '',
    'about': 'about',
    'mission': 'mission',
    'events': 'events',
    'notice-board': 'notices',
    'photo-gallery': 'photos',
    'video-gallery': 'videos',
    'legal-docs': 'legal',
    'membership-apply': 'apply'
  };

  // Map hashes back to view names
  const hashToView: Record<string, ViewType> = Object.entries(viewToHash).reduce((acc, [view, hash]) => {
    acc[hash] = view as ViewType;
    return acc;
  }, {} as Record<string, ViewType>);

  useEffect(() => {
    // Initial load handling
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && hashToView[initialHash]) {
      setCurrentView(hashToView[initialHash]);
    } else if (!initialHash) {
      setCurrentView('home');
    }

    // Hash change listener for browser navigation
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (hashToView[newHash]) {
        setCurrentView(hashToView[newHash]);
      } else if (!newHash) {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Scroll to top on every view change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Update the URL hash to match current view
    const targetHash = viewToHash[currentView];
    if (window.location.hash.replace('#', '') !== targetHash) {
      window.location.hash = targetHash;
    }
  }, [currentView]);

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
  };

  const renderView = () => {
    try {
      switch (currentView) {
        case 'home': return <Home onNavigate={handleNavigate} />;
        case 'about': return <AboutUs />;
        case 'mission': return <MissionValues />;
        case 'events': return <Events />;
        case 'notice-board': return <NoticeBoard />;
        case 'photo-gallery': return <PhotoGallery />;
        case 'video-gallery': return <VideoGallery />;
        case 'legal-docs': return <LegalDocs />;
        case 'membership-apply': return (
          <MembershipForm onSuccess={() => {
            alert("Application submitted successfully!");
            handleNavigate('home');
          }} />
        );
        default: return <Home onNavigate={handleNavigate} />;
      }
    } catch (error) {
      console.error("View Rendering Error:", error);
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-gray-500 bg-white p-10 text-center">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Navigation Error</h2>
          <p className="max-w-md mx-auto mb-8">The requested module could not be rendered correctly. Please return to the homepage.</p>
          <button 
            onClick={() => handleNavigate('home')} 
            className="px-8 py-3 bg-[#1a365d] text-white rounded-full font-bold hover:shadow-xl transition-all"
          >
            Return Home
          </button>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white custom-scrollbar selection:bg-blue-100 flex flex-col overflow-x-hidden">
      <Header 
        onNavigate={handleNavigate} 
        currentView={currentView} 
      />
      
      <main className="flex-1 relative">
        {/* Animated Container for smooth view transitions */}
        <div key={currentView} className="animate-page-fade">
          {renderView()}
        </div>
      </main>

      <Footer />
      <PolicyAssistant />
    </div>
  );
};

export default App;
