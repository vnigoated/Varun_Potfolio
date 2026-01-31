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
              <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800 rounded-full">
                SYSTEM_STATUS: ONLINE
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-2">
                VARUN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 text-glow">
                  INAMDAR
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
            </motion.div>

            <motion.div
              custom={1}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-lg"
            >
              <p>
                Architecting <span className="text-cyan-400 font-medium">Inteligent Systems</span> &
                Securing <span className="text-violet-400 font-medium">Digital Frontiers</span>.
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
                className="group relative px-8 py-4 bg-white/5 overflow-hidden rounded-xl border border-white/10 hover:border-violet-500/50 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-violet-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center gap-3">
                  <Download size={20} className={`text-violet-400 ${isDownloading ? 'animate-bounce' : ''}`} />
                  <span className="font-mono text-slate-200 group-hover:text-white">
                    {isDownloading ? 'INITIALIZING_DOWNLOAD...' : 'ACCESS_RESUME_DATA'}
                  </span>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Glitch/Tech Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-violet-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 border border-dashed border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

              {/* Glow */}
              <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full" />

              {/* Image */}
              <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-white/10 glass">
                <img
                  src="/unnamed.png"
                  alt="Varun Inamdar"
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
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
      className="p-3 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
