import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TechCard from './components/TechCard';
import { FaGithub, FaLinkedin, FaNodeJs, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { SiTypescript, SiPostgresql, SiTailwindcss, SiGo } from 'react-icons/si';

function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark ${isDarkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="sticky top-0 bg-background-light dark:bg-background-dark shadow-sm z-10">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-2xl font-bold text-text-strong-light dark:text-text-strong-dark">Bekir Ün</a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 text-lg">
              <a href="#about" className="font-semibold text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">{t('about')}</a>
              <a href="#contact" className="font-semibold text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">{t('contact')}</a>
              <button onClick={() => changeLanguage('tr')} className="p-2 rounded-full text-text-strong-light dark:text-text-strong-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">TR</button>
              <button onClick={() => changeLanguage('en')} className="p-2 rounded-full text-text-strong-light dark:text-text-strong-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">EN</button>
              <button onClick={toggleTheme} className="p-2 rounded-full text-text-strong-light dark:text-text-strong-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleTheme} className="p-2 rounded-full text-text-strong-light dark:text-text-strong-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors mr-2">
                {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-strong-light dark:text-text-strong-dark">
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-lg font-semibold text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800">{t('about')}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-lg font-semibold text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800">{t('contact')}</a>
            <div className="flex justify-center py-2">
              <button onClick={() => changeLanguage('tr')} className="p-2 rounded-full text-text-strong-light dark:text-text-strong-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">TR</button>
              <button onClick={() => changeLanguage('en')} className="p-2 rounded-full text-text-strong-light dark:text-text-strong-dark hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">EN</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background-light dark:bg-background-dark">

        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center gap-12 my-16 scroll-mt-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-text-strong-light dark:text-text-strong-dark">{t('greeting')}</h1>
            <p className="mt-4 text-xl text-text-light dark:text-text-muted-dark leading-relaxed">
              {t('intro')}
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="https://github.com/ichbinbekir" target="_blank" rel="noopener noreferrer" className="bg-primary-background-light text-text-strong-dark font-bold py-3 px-6 rounded-lg hover:bg-slate-900 dark:bg-primary-background-dark dark:hover:bg-slate-600 transition-colors flex items-center gap-2">
                <FaGithub className="w-6 h-6" />
                {t('github')}
              </a>
              <a href="https://www.linkedin.com/in/bekirun" target="_blank" rel="noopener noreferrer" className="bg-primary-light text-text-strong-dark font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2">
                <FaLinkedin className="w-6 h-6" />
                {t('linkedin')}
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/profile-photo.png" alt="Profile photo" className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-border-light dark:border-primary-background-light" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="my-24 scroll-mt-16">
          <div className="bg-card-background-light dark:bg-card-background-dark p-8 rounded-2xl shadow-lg backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-center text-text-strong-light dark:text-text-strong-dark mb-8">{t('about_me_title')}</h2>
            <p className="text-lg text-text-light dark:text-text-dark leading-loose">
              {t('about_me_text')}
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="my-24">
          <h2 className="text-4xl font-bold text-center text-text-strong-light dark:text-text-strong-dark mb-12">{t('technologies_title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechCard name="React"><DiReact className="w-12 h-12 text-icon-react" /></TechCard>
            <TechCard name="Node.js"><FaNodeJs className="w-12 h-12 text-icon-nodejs" /></TechCard>
            <TechCard name="TypeScript"><SiTypescript className="w-12 h-12 text-icon-typescript" /></TechCard>
            <TechCard name="Go"><SiGo className="w-12 h-12 text-icon-go" /></TechCard>
            <TechCard name="PostgreSQL"><SiPostgresql className="w-12 h-12 text-icon-postgresql" /></TechCard>
            <TechCard name="TailwindCSS"><SiTailwindcss className="w-12 h-12 text-icon-tailwindcss" /></TechCard>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-primary-background-light text-text-strong-dark">
        <div id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">{t('contact_title')}</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="text-center">
              <h3 className="font-semibold text-lg text-text-dark">{t('email')}</h3>
              <a href="mailto:bekiirun@gmail.com" className="text-primary-dark hover:underline text-lg">bekiirun@gmail.com</a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-text-dark">{t('phone')}</h3>
              <a href="tel:+905519656196" className="text-primary-dark hover:underline text-lg">+90 (551) 965 61 96</a>
            </div>
          </div>
          <div className="mt-12 text-center text-text-muted-dark border-t border-primary-background-dark pt-8">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;