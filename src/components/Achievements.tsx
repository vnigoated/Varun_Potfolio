import { useEffect, useRef, useState } from 'react';
import { Trophy, Award, BookOpen } from 'lucide-react';

export default function Achievements() {
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

  const achievements = [
    {
      icon: Trophy,
      title: '3× Hackathon Winner',
      description: 'Secured victories in innovation hackathons organized by WILO and IBM',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Trophy,
      title: 'IBM Hackathon Winner',
      description: 'First place winner in IBM-sponsored hackathon competition',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'IBM Business Intelligence Foundations',
      description: 'Specialization in SQL, ETL & Data Warehousing — Coursera Certificate',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Google Data Analytics Certificate',
      description: 'Professional certification in data analytics and visualization',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-slate-900 dark:bg-slate-100 rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-700 dark:to-dark-600 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-dark-900/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-dark-600 overflow-hidden group"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />
                  <div className="p-6 text-center">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${achievement.color} rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
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
