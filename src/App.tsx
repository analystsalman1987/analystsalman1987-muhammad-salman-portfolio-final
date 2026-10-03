import { useState, useEffect } from 'react';
import { useAppData } from './hooks/useAppData';
import { useTheme } from './hooks/useTheme';
import { adminAuthClient } from './services/adminAuthClient';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Software } from './components/Software';
import { EducationLanguages } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { DEFAULT_APP_DATA } from './data/defaultData';
import { Loader2 } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const { 
    data, 
    updateData, 
    resetData, 
    messages, 
    addContactMessage, 
    deleteContactMessage, 
    clearContactMessages 
  } = useAppData();

  const { theme, setTheme } = useTheme();

  // Navigation & CV Modal state
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  const checkIsAdminRoute = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    return (
      path === '/admin' || 
      path.startsWith('/admin/') || 
      hash === '#admin' || 
      hash === '#/admin' || 
      hash.includes('admin') ||
      search.includes('admin')
    );
  };

  const [currentRoute, setCurrentRoute] = useState<'home' | 'admin'>(() => {
    return checkIsAdminRoute() ? 'admin' : 'home';
  });

  // Verify server session whenever on admin route
  useEffect(() => {
    let isMounted = true;
    if (currentRoute === 'admin') {
      setIsCheckingAuth(true);
      adminAuthClient.checkAuth().then((authenticated) => {
        if (isMounted) {
          setIsAdminLoggedIn(authenticated);
          setIsCheckingAuth(false);
        }
      }).catch(() => {
        if (isMounted) {
          setIsAdminLoggedIn(false);
          setIsCheckingAuth(false);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [currentRoute]);

  // State for Experience main navigation selection & subtle background test effect
  const [isExperienceSelected, setIsExperienceSelected] = useState<boolean>(() => {
    return typeof window !== 'undefined' && (window.location.hash === '#experience' || window.location.hash === '#experience-remote');
  });

  const handleNavSelect = (href: string) => {
    if (href === '#experience' || href === '#experience-remote' || href.startsWith('#experience')) {
      setIsExperienceSelected(true);
    } else {
      setIsExperienceSelected(false);
    }
  };

  // Listen to popstate and hashchange events for browser back/forward and direct navigation
  useEffect(() => {
    const handleLocationChange = () => {
      if (checkIsAdminRoute()) {
        setCurrentRoute('admin');
      } else {
        setCurrentRoute('home');
      }
      if (window.location.hash === '#experience') {
        setIsExperienceSelected(true);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Observe Experience section for scroll-based detection
    const expEl = document.getElementById('experience');
    let observer: IntersectionObserver | null = null;
    if (expEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
              setIsExperienceSelected(true);
            }
          });
        },
        { threshold: [0.25] }
      );
      observer.observe(expEl);
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      if (observer && expEl) {
        observer.unobserve(expEl);
      }
    };
  }, [currentRoute]);

  const navigateToHome = () => {
    setCurrentRoute('home');
    try {
      window.history.pushState({ route: 'home' }, '', '/');
    } catch {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
  };

  const handleAdminLogout = async () => {
    await adminAuthClient.logout();
    setIsAdminLoggedIn(false);
    navigateToHome();
  };

  // If on /admin route: render dedicated Admin View directly
  if (currentRoute === 'admin') {
    if (isCheckingAuth) {
      return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-emerald-950 text-emerald-400 font-bold flex items-center justify-center text-lg border border-emerald-500/30 mb-4 shadow-md">
            MS
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <Loader2 className="w-4 h-4 animate-spin text-[#0F766E] dark:text-teal-400" />
            <span>Verifying admin security session...</span>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
        {isAdminLoggedIn ? (
          <AdminDashboard
            data={data}
            onUpdateData={updateData}
            onResetData={resetData}
            messages={messages}
            onDeleteMessage={deleteContactMessage}
            onClearMessages={clearContactMessages}
            onClose={navigateToHome}
            onLogout={handleAdminLogout}
            isFullPage={true}
          />
        ) : (
          <AdminLogin
            onSuccess={handleAdminLoginSuccess}
            onCancel={navigateToHome}
            isFullPage={true}
          />
        )}
      </div>
    );
  }

  // Otherwise render public profile website
  const { settings, profile, highlights, expertise, experience, skills, software, education, languages } = data;
  const rawVisibility = settings?.sectionVisibility;
  const isExpertiseVisible = rawVisibility ? rawVisibility.expertise !== false : true;
  const isHighlightsVisible = rawVisibility ? rawVisibility.highlights !== false : true;
  const effectiveExpertise = (expertise && expertise.length > 0) ? expertise : DEFAULT_APP_DATA.expertise;
  const effectiveHighlights = (highlights && highlights.length > 0) ? highlights : DEFAULT_APP_DATA.highlights;

  const visibility = {
    hero: true,
    about: true,
    highlights: true,
    expertise: true,
    experience: true,
    skills: true,
    software: true,
    education: true,
    languages: true,
    cv: true,
    contact: true,
    ...(rawVisibility || {}),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071827] text-[#F8FAFC] transition-colors duration-200">
      
      {/* Top Navigation */}
      <Navbar
        currentTheme={theme}
        onThemeChange={setTheme}
        onOpenCV={() => setIsCVOpen(true)}
        isExperienceSelected={isExperienceSelected}
        onSelectNav={handleNavSelect}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        {visibility.hero && (
          <Hero 
            profile={profile} 
            onOpenCV={() => setIsCVOpen(true)} 
            onSelectExperience={() => setIsExperienceSelected(true)}
          />
        )}

        {/* About Section */}
        {visibility.about && (
          <About profile={profile} />
        )}

        {/* Professional Highlights Section */}
        {isHighlightsVisible && (
          <Highlights highlights={effectiveHighlights} />
        )}

        {/* Core Professional Expertise Section */}
        {isExpertiseVisible && (
          <Expertise expertise={effectiveExpertise} />
        )}

        {/* Work Experience Timeline */}
        {visibility.experience && (
          <Experience 
            experience={experience} 
            isSelected={isExperienceSelected}
            onToggleSelect={() => setIsExperienceSelected(!isExperienceSelected)}
          />
        )}

        {/* ERP & Software Section */}
        {visibility.software && (
          <Software software={software} />
        )}

        {/* Education & Languages */}
        {(visibility.education || visibility.languages) && (
          <EducationLanguages
            education={visibility.education ? education : []}
            languages={visibility.languages ? languages : []}
          />
        )}

        {/* Contact Section */}
        {visibility.contact && (
          <Contact
            profile={profile}
            onSendMessage={addContactMessage}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        profile={profile}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Printable CV Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        data={data}
      />

      {/* Official Vercel Web Analytics */}
      <Analytics />

    </div>
  );
}
