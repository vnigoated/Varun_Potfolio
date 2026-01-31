import { BookOpen, FileText } from 'lucide-react';
import GlassCard from './UI/GlassCard';
import { motion } from 'framer-motion';

export default function Research() {
  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <BookOpen className="text-cyan-400" />
            Research & Publications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="hover:border-cyan-500/30 group">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <FileText className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Document Summarizer: A Machine Learning approach to PDF summarization</h3>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              DocSum is a PDF summarizer that efficiently extracts key information, preserves semantics, and minimizes manual effort. It offers targeted summaries and a simple UI to speed document understanding and streamline workflows.
            </p>
          </GlassCard>

          <GlassCard className="hover:border-violet-500/30 group" delay={0.2}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/20 group-hover:scale-110 transition-transform">
                <FileText className="text-violet-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Explainable AI in Diabetic Retinopathy Diagnosis: CNN-Based Detection with Grad-CAM</h3>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              This paper presents a deep-learning system for automated diabetic retinopathy (DR) detection from fundus images. By integrating Grad-CAM and LLM-driven insights, it provides visual explanations that improve clinician trust while delivering strong accuracy and localization for scalable DR screening.
            </p>
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs font-mono text-violet-400">
                Keywords: Diabetic Retinopathy, Explainable AI (XAI), Grad-CAM, Deep Learning, Fundus Imaging
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
