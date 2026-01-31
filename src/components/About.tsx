import { GraduationCap, Award, User } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="p-6 md:p-8 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <User className="text-cyan-400" />
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <GlassCard className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate <span className="text-cyan-400 font-medium">AI Engineer</span> and <span className="text-violet-400 font-medium">Security Analyst</span> currently pursuing my B.Tech in
              Artificial Intelligence at Vishwakarma University with a CGPA of <span className="text-white font-bold">8.7</span>. I specialize
              in developing intelligent systems that combine machine learning, web technologies,
              and cybersecurity principles.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My experience spans from working on <span className="text-white">drone navigation systems</span> with object detection
              to performing <span className="text-white">vulnerability assessments</span> for web applications. I'm driven by the
              challenge of creating secure, intelligent solutions that make a real-world impact.
            </p>
          </GlassCard>

          {/* Stats / Education */}
          <div className="space-y-6">
            <GlassCard delay={0.2} className="hover:border-violet-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/20">
                  <GraduationCap className="text-violet-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-sm text-slate-400">Vishwakarma University</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-300">B.Tech in AI</span>
                  <span className="text-cyan-400 font-mono font-bold">CGPA 8.7</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-300">Hons in Cybersecurity</span>
                  <span className="text-violet-400 font-mono font-bold">CGPA 9.0</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.4} className="hover:border-cyan-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Award className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Highlights</h3>
                  <p className="text-sm text-slate-400">Key Achievements</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400">•</span>
                  <span>3x Hackathon Winner (WILO & IBM)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400">•</span>
                  <span>IBM BI Specialization</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400">•</span>
                  <span>Google Data Analytics Certified</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
