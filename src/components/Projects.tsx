import { ExternalLink, Github, Code } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Skoda AI/ML Based Building & Energy Management System',
      description: 'Intelligent BMS/EMS solution for Skoda manufacturing facilities integrating chiller, boiler, and HVAC optimization.',
      technologies: ['FastAPI', 'PyTorch Transformer', 'Python', 'Machine Learning'],
      highlights: [
        'Implemented time-series forecasting for energy consumption with 87% accuracy, reducing waste by 18%',
        'Built predictive failure detection identifying equipment faults 48 hours in advance with 91% precision',
        'Designed centralized dashboard with automated alerts, reducing maintenance downtime by 25%',
      ],
    },
    {
      title: 'Digital and Intelligent Diet Plan RAG Agent',
      description: 'RAG system for personalized nutrition guidance using Watsonx Studio for model orchestration.',
      technologies: ['Watsonx AI', 'Granite 8b', 'FAISS', 'LangFlow', 'Node.js', 'React'],
      highlights: [
        'Leveraged Granite models for embedding generation and specific response synthesis',
        'Integrated FAISS vector store for scalable retrieval across 10K+ nutritional records',
      ],
    },
    {
      title: 'Career Connect',
      description: 'Cybersecurity learning platform with personalized paths, adaptive assessments, and AI proctoring.',
      technologies: ['FastAPI', 'Next.js', 'LangChain', 'Supabase', 'Docker', 'Vercel'],
      highlights: [
        'Embedded course materials into Supabase pgvector for RAG chatbot explanations',
        'Integrated LangChain with Google Gemini for intelligent QA and confidence-based scoring',
        'Containerized entire stack with Docker for consistent development and deployment',
      ],
    },
    {
      title: 'Diabetic Retinopathy Detection with Explainable AI',
      description: 'CNN model achieving 91% accuracy for diabetic retinopathy classification using retinal fundus images.',
      technologies: ['PyTorch', 'Grad-CAM', 'Flask', 'Hugging Face', 'Python'],
      highlights: [
        'Applied Grad-CAM for visual interpretability, improving clinician trust',
        'Integrated LLM-generated natural language diagnostic reports',
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
            <Code className="text-red-500" />
            Featured Projects
          </h2>
          <div className="h-1.5 w-20 bg-red-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} className="flex flex-col group hover:border-red-500/30" delay={index * 0.1}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white">
                    <Github size={20} />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex-1">
                <p className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wider">Key Highlights</p>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-orange-500 mt-0.5">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
