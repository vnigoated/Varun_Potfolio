import { useEffect, useRef, useState } from 'react';
import { Code, Wrench, Brain, Cloud } from 'lucide-react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Languages & Technologies',
      icon: Code,
      skills: ['C', 'Java', 'Python', 'SQL', 'JavaScript', 'TypeScript'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Frameworks & Tools',
      icon: Wrench,
      skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB', 'BigQuery', 'FastAPI', 'Flask'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: 'AI/ML & Platforms',
      icon: Brain,
      skills: ['TensorFlow', 'Scikit-Learn', 'Pandas', 'Keras', 'OpenCV', 'Streamlit', 'Hugging Face', 'Ollama', 'Gemini'],
      color: 'from-slate-600 to-slate-700',
    },
    {
      title: 'Developer Tools & Cloud',
      icon: Cloud,
      skills: ['Git', 'OWASP ZAP', 'BurpSuite', 'Docker', 'VS Code', 'Cursor', 'Postman', 'ONNX', 'Anaconda', 'Vercel'],
      color: 'from-slate-500 to-slate-600',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-slate-900 dark:bg-slate-200 rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-700 dark:to-dark-600 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-dark-900/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-dark-600 overflow-hidden group"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg shadow-md`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white dark:bg-dark-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-dark-600 hover:border-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
