import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Tender Summarizer',
      description: 'Industry-grade NLP pipeline for KRIATEC PVT LTD, enabling automated summarization and key insights extraction from tender PDFs.',
      technologies: ['Python', 'NLP', 'Flask', 'JavaScript', 'Transformers', 'NER'],
      highlights: [
        'Orchestrated pipeline with Transformers and NER for structured entity extraction',
        'Deployed solution reducing manual review time significantly',
      ],
    },
    {
      title: 'Cybersecurity AI Tutor and Evaluator',
      description: 'Interactive learning platform with topic-wise explanations, adaptive MCQs, and confidence-based scoring using secure offline LLM deployment.',
      technologies: ['React', 'FastAPI', 'Python', 'SQL/NoSQL', 'Ollama'],
      highlights: [
        'Dynamic quizzes with feedback and AI chatbot for topic-specific guidance',
        'Progress tracking with structured PDFs and curated learning resources',
      ],
    },
    {
      title: 'CNN-based Diabetic Retinopathy Detection',
      description: 'Deep learning model with explainable AI (XAI) for diabetic retinopathy detection using retinal fundus images.',
      technologies: ['PyTorch', 'Grad-CAM', 'Hugging Face LLM', 'OpenCV', 'Flask'],
      highlights: [
        'Integrated Grad-CAM for XAI to highlight prediction-influencing regions',
        'LLM-based natural language explanations for clinicians',
      ],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-900 dark:to-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-slate-900 dark:bg-slate-200 rounded-full mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-700 rounded-xl shadow-lg dark:shadow-dark-900/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-dark-600 overflow-hidden group flex flex-col"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="h-2 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-500" />

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight flex-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 ml-2">
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Github size={20} className="text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <ExternalLink size={20} className="text-slate-600" />
                      </button>
                    </div>
                  </div>

                      <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                    <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Key Features:</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <span className="text-slate-900 dark:text-slate-100 font-bold mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 dark:bg-dark-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
