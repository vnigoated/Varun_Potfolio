import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    try {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = '/resume (1).pdf';
      link.download = 'Varun_Inamdar_Resume.pdf'; // This will be the filename when downloaded
      link.target = '_blank'; // Open in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset loading state after a short delay
      setTimeout(() => setIsDownloading(false), 1000);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open('/resume (1).pdf', '_blank');
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-slate-300/30 dark:bg-slate-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200/30 dark:bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-2">
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                Varun Inamdar
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 rounded-full" />
            </div>

            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              AI Engineer & Security Analyst specializing in machine learning, web development,
              and cybersecurity with a passion for building intelligent, secure systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/varun-inamdar03/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="https://github.com/vnigoated"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-800 text-slate-900 dark:text-slate-100 border-2 border-slate-900 dark:border-slate-100 rounded-lg hover:bg-slate-50 dark:hover:bg-dark-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="mailto:vninamdar03@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-800 text-slate-900 dark:text-slate-100 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:border-slate-900 dark:hover:border-slate-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Email
              </a>
            </div>

            <button 
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-100 dark:to-slate-300 text-white dark:text-slate-900 rounded-lg hover:from-slate-700 hover:to-slate-800 dark:hover:from-slate-200 dark:hover:to-slate-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Download size={20} className={isDownloading ? 'animate-pulse' : ''} />
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </button>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600 dark:from-slate-600 dark:to-slate-800 rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <img
                src="/unnamed.png"
                alt="Varun Inamdar"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl ring-4 ring-white dark:ring-slate-800"
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-slate-600 dark:text-slate-400" />
        </button>
      </div>
    </section>
  );
}
