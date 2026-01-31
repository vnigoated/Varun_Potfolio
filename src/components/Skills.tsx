import { Code, Wrench, Brain, Cloud } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { motion } from 'framer-motion';

export default function Skills() {
  /* Red/Crimson Theme for Skills */
  const skillCategories = [
    {
      title: 'Languages & Databases',
      icon: Code,
      skills: ['Python', 'C', 'JavaScript', 'TypeScript', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'FAISS', 'Pinecone'],
      color: 'text-red-400',
      bg: 'bg-red-500/10 border-red-500/20',
    },
    {
      title: 'Frameworks',
      icon: Wrench,
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'FastAPI', 'TailwindCSS'],
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20',
    },
    {
      title: 'AI/ML & Specializations',
      icon: Brain,
      skills: ['PyTorch', 'Scikit-learn', 'Transformers', 'OpenCV', 'LangChain', 'LangGraph', 'LlamaIndex', 'NLP', 'RAG', 'Agentic AI'],
      color: 'text-red-500',
      bg: 'bg-red-600/10 border-red-600/20',
    },
    {
      title: 'Tools, DevOps & Security',
      icon: Cloud,
      skills: ['Git', 'Docker', 'AWS', 'GCP', 'Vercel', 'MLflow', 'BentoML', 'Langflow', 'Ollama', 'OWASP ZAP', 'BurpSuite'],
      color: 'text-rose-500',
      bg: 'bg-rose-600/10 border-rose-600/20',
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
            <Brain className="text-red-500" />
            Technical Arsenal
          </h2>
          <div className="h-1.5 w-20 bg-red-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <GlassCard
                key={index}
                delay={index * 0.1}
                className="group hover:border-red-500/30"
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
