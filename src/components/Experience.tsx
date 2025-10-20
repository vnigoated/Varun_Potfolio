import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
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

  const experiences = [
    {
      title: 'AI Engineer',
      company: 'Drone Project Internship — Vishwakarma University',
      location: 'Pune, Maharashtra',
      period: 'June 2024 – Dec 2024',
      responsibilities: [
        'Designed payload drone system with high-load capacity and intelligent navigation for Southern Command',
        'Implemented object detection, avoidance, and path tracking module',
      ],
    },
    {
      title: 'Security Analyst — Web Application VA',
      company: 'Beeman',
      location: 'Pune, Maharashtra',
      period: 'Aug 2025 – Sept 2025',
      responsibilities: [
        'Performed BurpSuite and OWASP ZAP assessment; found unencrypted forms and missing security headers',
        'Documented findings per OWASP Top 10 with reproduction steps and mitigations',
        'Conducted comprehensive vulnerability assessment and penetration testing (VAPT) on web applications',
        'Identified and reported critical security vulnerabilities including SQL injection and XSS flaws',
      ],
    },
    {
      title: 'Security Analyst — Web Application VA',
      company: 'Nimka',
      location: 'Pune, Maharashtra',
      period: 'April 2025',
      responsibilities: [
        'Performed BurpSuite and OWASP ZAP assessment; found unencrypted forms and missing security headers',
        'Documented findings per OWASP Top 10 with reproduction steps and mitigations',
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-800 dark:to-dark-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Experience</h2>
          <div className="h-1 w-20 bg-slate-900 dark:bg-slate-100 rounded-full mb-12" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-dark-900/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-dark-700 overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-slate-100 dark:bg-dark-700 rounded-lg">
                          <Briefcase className="text-slate-900 dark:text-slate-100" size={20} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{exp.title}</h3>
                      </div>
                      <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                        <span className="text-slate-900 dark:text-slate-100 font-bold mt-1">•</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
