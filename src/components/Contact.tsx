import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vninamdar03@gmail.com',
      href: 'mailto:vninamdar03@gmail.com',
      color: 'text-slate-300',
      bg: 'bg-slate-500/10 border-slate-500/20',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7517277551',
      href: 'tel:+917517277551',
      color: 'text-slate-300',
      bg: 'bg-slate-500/10 border-slate-500/20',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Varun Inamdar',
      href: 'https://www.linkedin.com/in/varun-inamdar03/',
      color: 'text-blue-400', // Keep brand color slightly visible but muted
      bg: 'bg-blue-900/10 border-blue-900/20',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@vnigoated',
      href: 'https://github.com/vnigoated',
      color: 'text-slate-400',
      bg: 'bg-slate-500/10 border-slate-500/20',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra',
      href: null,
      color: 'text-slate-400',
      bg: 'bg-slate-500/10 border-slate-500/20',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Mail className="text-slate-400" />
            Get In Touch
          </h2>
          <div className="h-1.5 w-20 bg-slate-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;

            const Content = () => (
              <>
                <div className={`p-3 rounded-lg ${contact.bg} ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-slate-400 font-medium">{contact.label}</p>
                  <p className="text-white font-semibold">{contact.value}</p>
                </div>
              </>
            );

            return contact.href ? (
              <GlassCard
                key={index}
                delay={index * 0.1}
                className="group flex items-center gap-4 hover:border-violet-500/30 cursor-pointer"
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 w-full"
                >
                  <Content />
                </a>
              </GlassCard>
            ) : (
              <GlassCard
                key={index}
                delay={index * 0.1}
                className="group flex items-center gap-4"
              >
                <Content />
              </GlassCard>
            );
          })}
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Varun Inamdar. Neural Systems Online.</p>
      </footer>
    </section>
  );
}
