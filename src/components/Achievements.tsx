import { Trophy, Award, BookOpen } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { motion } from 'framer-motion';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: '1st Place — IBM Hackathon',
      description: 'Secured 1st place for multi-agent AI solution using Watsonx and Cloud',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: Trophy,
      title: '1st Place — Codeathon 2025',
      description: 'Won against 20+ teams for multimodal healthcare prediction platform',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Award,
      title: '3× Hackathon Winner',
      description: 'Recognized in innovation events by Binghamton University and WILO',
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10 border-yellow-500/20',
    },
    {
      icon: BookOpen,
      title: 'IBM Business Intelligence',
      description: 'Specialization in SQL, ETL, Data Warehousing (Coursera)',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20',
    },
    {
      icon: Award,
      title: 'Deployed AI Monitoring',
      description: 'Crowd management system at Shri Mahalaxmi Mandir (200k+ people)',
      color: 'text-red-400',
      bg: 'bg-red-500/10 border-red-500/20',
    },
    {
      icon: Trophy,
      title: 'Open Source Contributor',
      description: 'Contributed to 10+ GitHub repositories for ML frameworks/tools',
      color: 'text-green-400',
      bg: 'bg-green-500/10 border-green-500/20',
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Trophy className="text-yellow-400" />
            Achievements
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <GlassCard
                key={index}
                delay={index * 0.1}
                className="flex flex-col items-center text-center group hover:border-white/20"
              >
                <div className={`p-4 rounded-full ${achievement.bg} ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {achievement.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm">
                  {achievement.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
