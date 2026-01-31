import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

export default function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }));
  }, [controls]);

  const handleDownloadResume = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = '/Varun_Inamdar_Resume.pdf';
      link.download = 'Varun_Inamdar_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => setIsDownloading(false), 1000);
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open('/Varun_Inamdar_Resume.pdf', '_blank');
      setIsDownloading(false);
    }
  };

  return (
    <div className="p-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <motion.div custom={0} initial={{ opacity: 0, y: 20 }} animate={controls}>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-blue-300 bg-blue-900/30 border border-blue-800 rounded-full">
                AVAILABLE FOR WORK
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-2">
                VARUN <br />
                <span className="text-blue-500">
                  INAMDAR
                </span>
              </h1>
              <div className="h-1.5 w-32 bg-blue-600 rounded-full" />
            </motion.div>

            <motion.div
              custom={1}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-lg"
            >
              <p>
                Architecting <span className="text-blue-400 font-medium">Intelligent Systems</span> &
                Securing <span className="text-blue-400 font-medium">Digital Frontiers</span>.
              </p>
            </motion.div>

            <motion.div
              custom={2}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="flex flex-wrap gap-4"
            >
              <SocialButton href="https://linkedin.com/in/varun-inamdar03" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialButton href="https://github.com/vnigoated" icon={<Github size={20} />} label="GitHub" />
              <SocialButton href="mailto:vninamdar03@gmail.com" icon={<Mail size={20} />} label="Email" />
            </motion.div>

            <motion.div custom={3} initial={{ opacity: 0, y: 20 }} animate={controls}>
              <button
                onClick={handleDownloadResume}
                disabled={isDownloading}
                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white overflow-hidden rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="relative flex items-center gap-3">
                  <Download size={20} className={`${isDownloading ? 'animate-bounce' : ''}`} />
                  <span className="font-semibold">
                    {isDownloading ? 'Downloading...' : 'Download Resume'}
                  </span>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Simple Clean Border */}
              <div className="absolute inset-4 rounded-full border-4 border-blue-500/20" />

              {/* Image */}
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img
                  src="/unnamed.png"
                  alt="Varun Inamdar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
