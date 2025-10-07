import { useState } from 'react';
import TechCard from './components/TechCard';
import { FaGithub, FaLinkedin, FaNodeJs, FaBars, FaTimes } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { SiTypescript, SiPostgresql, SiTailwindcss, SiGo } from 'react-icons/si';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-2xl font-bold text-slate-900">Bekir Ün</a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 text-lg">
              <a href="#about" className="font-semibold text-slate-600 hover:text-blue-600 transition-colors">Hakkımda</a>
              <a href="#contact" className="font-semibold text-slate-600 hover:text-blue-600 transition-colors">İletişim</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900">
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-lg font-semibold text-slate-600 hover:bg-slate-100">Hakkımda</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 px-4 text-lg font-semibold text-slate-600 hover:bg-slate-100">İletişim</a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center gap-12 my-16 scroll-mt-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900">Merhaba, ben Bekir ÜN</h1>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed">
              Elektrik Elektronik Mühendisliği öğrencisi ve tutkulu bir yazılım geliştirici.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="https://github.com/ichbinbekir" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-900 transition-colors flex items-center gap-2">
                <FaGithub className="w-6 h-6" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/bekirun" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2">
                <FaLinkedin className="w-6 h-6" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/profile-photo.png" alt="Profile photo" className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-white" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="my-24 scroll-mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-8">Hakkımda</h2>
            <p className="text-lg text-slate-700 leading-loose">
              Bilgisayarlar küçüklüğümden beri en büyük tutkum oldu. Elektrik Elektronik Mühendisliği eğitimimle birlikte bu tutkuyu, yazılım alanında somut projelere dönüştürmeye odaklandım. Web geliştirme, backend sistemleri, mobil uygulamalar ve siber güvenlik gibi çeşitli alanlarda kendimi geliştiriyor, sürekli yeni teknolojiler öğrenmekten keyif alıyorum.
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="my-24">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Kullandığım Teknolojiler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechCard name="React"><DiReact className="w-12 h-12 text-sky-500" /></TechCard>
            <TechCard name="Node.js"><FaNodeJs className="w-12 h-12 text-green-500" /></TechCard>
            <TechCard name="TypeScript"><SiTypescript className="w-12 h-12 text-blue-600" /></TechCard>
            <TechCard name="Go"><SiGo className="w-12 h-12 text-cyan-500" /></TechCard>
            <TechCard name="PostgreSQL"><SiPostgresql className="w-12 h-12 text-blue-500" /></TechCard>
            <TechCard name="TailwindCSS"><SiTailwindcss className="w-12 h-12 text-cyan-500" /></TechCard>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">İletişim</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="text-center">
              <h3 className="font-semibold text-lg text-slate-300">Email</h3>
              <a href="mailto:bekiirun@gmail.com" className="text-blue-400 hover:underline text-lg">bekiirun@gmail.com</a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-slate-300">Telefon</h3>
              <a href="tel:+905519656196" className="text-blue-400 hover:underline text-lg">+90 (551) 965 61 96</a>
            </div>
          </div>
          <div className="mt-12 text-center text-slate-400 border-t border-slate-700 pt-8">
            <p>&copy; 2025 Bekir Ün. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;