import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vninamdar03@gmail.com',
      href: 'mailto:vninamdar03@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7517277551',
      href: 'tel:+917517277551',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Varun Inamdar',
      href: 'https://www.linkedin.com/in/varun-inamdar03/',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@vnigoated',
      href: 'https://github.com/vnigoated',
      color: 'from-slate-600 to-slate-700',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra',
      href: null,
      color: 'from-slate-500 to-slate-600',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-900 dark:to-dark-800 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-slate-900 dark:bg-slate-200 rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <>
                  <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-lg shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{contact.label}</p>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">{contact.value}</p>
                  </div>
                </>
              );

              return contact.href ? (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-dark-900/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-dark-600 p-6 flex items-center gap-4 group"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-lg dark:shadow-dark-900/20 border border-slate-200 dark:border-dark-600 p-6 flex items-center gap-4 group"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-700 dark:text-slate-300 text-lg mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:vninamdar03@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg hover:from-slate-700 hover:to-slate-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold dark:from-slate-700 dark:to-dark-500"
            >
              <Mail size={20} />
              Let's Connect
            </a>
          </div>
        </div>
      </div>

  <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-dark-700 text-center text-slate-600 dark:text-slate-400">
        <p>&copy; 2025 Varun Inamdar. All rights reserved.</p>
      </footer>
    </section>
  );
}
