import { Briefcase, MapPin, Calendar } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Bootcoding Pvt. Ltd.',
      location: 'Remote',
      period: 'Oct 2025 – Nov 2025',
      responsibilities: [
        'Contributed to real-world product engineering in a structured corporate tech environment.',
        'Developed and deployed production-grade features using React.js, Node.js, FastAPI, and cloud infrastructure.',
        'Applied model quantization to reduce LLM inference latency by 38% and memory footprint by 60% on edge deployments.',
        'Gained hands-on experience in agile workflows, code reviews, and CI/CD pipelines.',
      ],
    },
    {
      title: 'Security Analyst — Web Application VAPT',
      company: 'Beeman & Nimka',
      location: 'Pune, Maharashtra',
      period: 'Apr 2025 – Sep 2025',
      responsibilities: [
        'Performed vulnerability assessments using BurpSuite and OWASP ZAP across 10+ web applications, identifying 15+ high-risk vulnerabilities.',
        'Discovered unencrypted form data, missing security headers, and SQL injection flaws, reducing critical exposure by 35% post-mitigation.',
        'Authored detailed VAPT reports aligned with OWASP Top 10 standards, including proof-of-concept exploits and remediation guidelines.',
        'Collaborated with developers to implement security hardening measures, improving application security scores by 28%.',
      ],
    },
    {
      title: 'AI Engineer Intern',
      company: 'Payload Drone Project — Vishwakarma University',
      location: 'Pune, Maharashtra',
      period: 'Jun 2024 – Dec 2024',
      responsibilities: [
        'Designed a high-payload drone system with intelligent autonomous navigation for Southern Command, increasing flight stability by 22%.',
        'Built a GPS-independent visual SLAM pipeline integrating YOLOv5 object detection and MiDaS depth estimation, achieving 92% localization accuracy.',
        'Applied model quantization techniques to reduce inference latency by 40%, enhancing real-time decision-making on edge devices.',
      ],
    },
  ];

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
            <Briefcase className="text-cyan-400" />
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
        </motion.div>

        <div className="space-y-8 relative">
          {/* Connector Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/50 to-violet-500/50 hidden md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute left-8 -translate-x-1/2 top-10 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 z-10 hidden md:block" />

              <GlassCard className="md:ml-16 border-white/5 hover:border-cyan-500/30" delay={index * 0.2}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-violet-400 mt-1.5">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
