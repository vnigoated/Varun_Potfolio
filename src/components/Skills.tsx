import { Code, Wrench, Brain, Cloud } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Databases',
      icon: Code,
      skills: ['Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'FAISS', 'Pinecone'],
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Frameworks',
      icon: Wrench,
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'FastAPI', 'TailwindCSS'],
      color: 'text-teal-400',
      bg: 'bg-teal-500/10 border-teal-500/20',
    },
    {
      title: 'AI/ML & Specializations',
      icon: Brain,
      skills: ['PyTorch', 'Scikit-learn', 'Transformers', 'OpenCV', 'LangChain', 'LangGraph', 'LlamaIndex', 'NLP', 'RAG', 'Agentic AI'],
      color: 'text-violet-400',
      bg: 'bg-violet-500/10 border-violet-500/20',
    },
    {
      title: 'Tools, DevOps & Security',
      icon: Cloud,
      skills: ['Git', 'Docker', 'AWS', 'GCP', 'Vercel', 'MLflow', 'BentoML', 'Langflow', 'Ollama', 'OWASP ZAP', 'BurpSuite'],
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Brain className="text-violet-400" />
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-400 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <GlassCard
                key={index}
                delay={index * 0.1}
                className="group hover:border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${category.bg} ${category.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white/5 text-slate-300 rounded-lg text-sm font-medium border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
