export default function Research() {
  return (
    <section id="research" className="py-20 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-500">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Research & Publications</h2>
          <div className="h-1 w-20 bg-slate-900 dark:bg-slate-100 rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-white dark:bg-dark-700 rounded-xl shadow-lg dark:shadow-dark-900/20 p-6 border border-slate-200 dark:border-dark-600">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Document Summarizer: A Machine Learning approach to PDF summarization</h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                  DocSum is a PDF summarizer that efficiently extracts key information, preserves semantics, and minimizes manual effort. It offers targeted summaries and a simple UI to speed document understanding and streamline workflows.
              </p>
            </article>

            <article className="bg-white dark:bg-dark-700 rounded-xl shadow-lg dark:shadow-dark-900/20 p-6 border border-slate-200 dark:border-dark-600">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Explainable AI in Diabetic Retinopathy Diagnosis: CNN-Based Detection with Grad-CAM</h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                  This paper presents a deep-learning system for automated diabetic retinopathy (DR) detection from fundus images. By integrating Grad-CAM and LLM-driven insights, it provides visual explanations that improve clinician trust while delivering strong accuracy and localization for scalable DR screening.
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Keywords: Diabetic Retinopathy, Explainable AI (XAI), Grad-CAM, Deep Learning, Fundus Imaging, EfficientNetB0</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
