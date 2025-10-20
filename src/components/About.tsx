import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-slate-900 dark:bg-slate-100 rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate AI Engineer and Security Analyst currently pursuing my B.Tech in
                Artificial Intelligence at Vishwakarma University with a CGPA of 8.7. I specialize
                in developing intelligent systems that combine machine learning, web technologies,
                and cybersecurity principles.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                My experience spans from working on drone navigation systems with object detection
                to performing vulnerability assessments for web applications. I'm driven by the
                challenge of creating secure, intelligent solutions that make a real-world impact.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-700 dark:to-dark-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-dark-600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-dark-800 rounded-lg shadow-md">
                    <GraduationCap className="text-slate-900 dark:text-slate-100" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Education</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Vishwakarma University</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">B.Tech in AI</span>
                    <span className="text-slate-900 dark:text-slate-100 font-bold">CGPA 8.7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Honors- Cybersecurity</span>
                    <span className="text-slate-900 dark:text-slate-100 font-bold">CGPA 9.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-700 dark:to-dark-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-dark-600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-dark-800 rounded-lg shadow-md">
                    <Award className="text-slate-900 dark:text-slate-100" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Highlights</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Key Achievements</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900 dark:text-slate-100 font-bold">•</span>
                    <span>3x Hackathon Winner (WILO & IBM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900 dark:text-slate-100 font-bold">•</span>
                    <span>IBM BI Specialization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900 dark:text-slate-100 font-bold">•</span>
                    <span>Google Data Analytics Certified</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
