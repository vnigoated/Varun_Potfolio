import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Removed GeminiMessage interface
interface Message {
  role: 'user' | 'assistant' | 'system'; // Added system role
  content: string;
  timestamp?: Date;
}

interface ChatbotProps {
  embedded?: boolean;
}

export default function Chatbot({ embedded = false }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! I'm Varun's AI assistant. I can answer questions about his work, skills, and experience. How can I help you?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const portfolioContext = `
You are an AI assistant for Varun Inamdar's portfolio website. Here is information about Varun:

CONTACT:
- Email: vninamdar03@gmail.com
- Phone: (+91) 7517277551
- LinkedIn: linkedin.com/in/varun-inamdar
- GitHub: github.com/vnigoated
- Portfolio: portfolio/varuninamdar

EDUCATION:
- Vishwakarma University Pune, Maharashtra
  B.Tech in Artificial Intelligence — CGPA: 8.7/10 (Aug 2023 – May 2027)
- Vishwakarma University Pune, Maharashtra
  Honors in Cybersecurity — CGPA: 9.0/10 (Aug 2024 – May 2027)

EXPERIENCE:
1. AI Engineer Intern (Jun 2024 – Dec 2024)
   Payload Drone Project — Vishwakarma University Pune, Maharashtra
   – Designed a high-payload drone system with intelligent autonomous navigation for Southern Command, increasing flight stability by 22%.
   – Built a GPS-independent visual SLAM pipeline integrating YOLOv5 object detection and MiDaS depth estimation, achieving 92% localization accuracy in indoor environments.
   – Applied model quantization techniques to reduce inference latency by 40%, enhancing real-time decision-making on edge devices.

2. Security Analyst — Web Application VAPT (Apr 2025 – Sep 2025)
   Beeman & Nimka Pune, Maharashtra
   – Performed vulnerability assessments using BurpSuite and OWASP ZAP across 10+ web applications, identifying 15+ high-risk vulnerabilities.
   – Discovered unencrypted form data, missing security headers, and SQL injection flaws, reducing critical exposure by 35% post-mitigation.
   – Authored detailed VAPT reports aligned with OWASP Top 10 standards, including proof-of-concept exploits and remediation guidelines.
   – Collaborated with developers to implement security hardening measures, improving application security scores by 28%.

3. Software Developer Intern (Oct 2025 – Nov 2025)
   Bootcoding Pvt. Ltd. — Remote
   – Contributed to real-world product engineering in a structured corporate tech environment.
   – Developed and deployed production-grade features using React.js, Node.js, FastAPI, and cloud infrastructure.
   – Applied model quantization to reduce LLM inference latency by 38% and memory footprint by 60% on edge deployments.
   – Gained hands-on experience in agile workflows, code reviews, and CI/CD pipelines, enhancing software delivery efficiency.
   – Collaborated with cross-functional teams to design scalable solutions, improving system performance and user experience.

TECHNICAL SKILLS:
- Languages: Python, C, JavaScript, TypeScript, SQL
- Frameworks: React, Next, Node, Express, Flask, FastAPI, TailwindCSS
- AI/ML Stack: PyTorch, Scikit-learn, Pydantic, spaCy, Transformers, OpenCV, LangChain, LangGraph, LlamaIndex
- Databases: PostgreSQL, MongoDB, Redis, FAISS, Pinecone
- Specializations: Natural Language Processing, RAG, Agentic AI
- DevOps & Tools: Git, Docker, AWS, GCP, Vercel, MLflow, BentoML, Langflow, Ollama
- Cybersecurity: OWASP ZAP, BurpSuite, VAPT

PROJECTS:
1. Skoda AI/ML Based Building & Energy Management System | FastAPI, PyTorch Transformer
   – Developing an intelligent BMS/EMS solution for Skoda manufacturing facilities integrating chiller, boiler, and HVAC optimization using predictive machine learning models.
   – Implemented time-series forecasting models for energy consumption prediction, achieving 87% accuracy and reducing energy waste by 18%.
   – Built predictive failure detection system using anomaly detection algorithms, identifying equipment faults 48 hours in advance with 91% precision.
   – Designed centralized failure management dashboard with automated alert mechanisms, reducing maintenance downtime by 25%.

2. Digital and Intelligent Diet Plan RAG Agent | Watsonx AI, Granite 8b-instruct, FAISS, LangFlow, Node.js, React
   – Developed a Retrieval-Augmented Generation system for personalized nutrition guidance using Watsonx Studio for model orchestration and deployment.
   – Leveraged Granite models for both embedding generation and LLM-based response synthesis, ensuring domain-specific accuracy and efficiency.
   – Integrated FAISS vector store for scalable semantic retrieval across 10K+ nutritional records, enabling context-aware and adaptive meal recommendations.

3. Career Connect | FastAPI, Next.js, LangChain, Supabase, Docker, Vercel (January 2025)
   – Developed a cybersecurity learning platform with personalized learning paths, adaptive assessments, AI proctoring, and virtual labs.
   – Created and embedded course materials into Supabase pgvector to provide explanations and curriculum guidance through a LangChain-driven RAG chatbot.
   – Integrated LangChain with Google Gemini to deliver intelligent question answering and confidence-based MCQ scoring with automated integrity logs.
   – Implemented Supabase for course storage and containerized the entire stack with Docker for consistent development and deployment.

4. CNN-based Diabetic Retinopathy Detection with Explainable AI | PyTorch, Grad-CAM, Flask, Hugging Face
   – Developed a CNN model achieving 91% accuracy for diabetic retinopathy classification using retinal fundus images.
   – Applied Grad-CAM for visual interpretability, improving clinician trust and model transparency.
   – Deployed with Flask API and integrated LLM-generated natural language diagnostic reports.

PUBLICATIONS:
1. AICCT 2025 (Accepted): Explainable AI in Diabetic Retinopathy Diagnosis: CNN-Based Detection with Gradient-Weighted Class Activation Mapping
2. SPRINGER NATURE 2025 (Accepted): Document Summarizer: A Machine Learning Approach to PDF Summarization

ACHIEVEMENTS:
- 1st Place — IBM Hackathon: Secured 1st place for developing a multi-agent AI solution using Watsonx and Cloud (presented at IBM Summit, Delhi).
- IBM Business Intelligence Specialization (SQL, ETL, Data Warehousing) — Coursera Certificate
- Google Data Analytics Certificate
- 3× Hackathon Winner: Recognized in innovation events hosted by Binghamton University and WILO for AI-driven automation solutions.
- 1st Place — Codeathon 2025: Won against 20+ teams for a multimodal healthcare prediction platform using ML and LLMs.
- Open Source Contributor: Contributed to 10+ GitHub repositories involving machine learning frameworks and educational AI tools.
- Deployed AI Monitoring system at Shri Mahalaxmi Mandir, Pune during Navratri, counting 200,000+ people and boosting crowd management.
`;

  // ... context string remains the same ...

  const searchContext = (query: string): string | null => {
    const normalize = (text: string) => text.toLowerCase().replace(/[^\w\s]/g, '');
    const queryTokens = normalize(query).split(/\s+/).filter(t => t.length > 2);

    if (queryTokens.length === 0) return null;

    // Split context into meaningful chunks
    const sections = portfolioContext.split('\n\n').filter(s => s.trim().length > 10);

    let bestMatch = { score: 0, content: '' };

    sections.forEach(section => {
      const normalizedSection = normalize(section);
      let score = 0;

      queryTokens.forEach(token => {
        if (normalizedSection.includes(token)) {
          score += 1;
          // Boost score for exact keyword matches in headers
          if (section.toUpperCase().includes(token.toUpperCase())) score += 2;
        }
      });

      if (score > bestMatch.score) {
        bestMatch = { score, content: section };
      }
    });

    // Threshold for relevance
    return bestMatch.score > 0 ? bestMatch.content : null;
  };

  const getFallbackResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();

    // 1. Handle Greetings (Conversational)
    if (/\b(hi|hello|hey|greetings)\b/i.test(input) && input.length < 20) {
      return "Hello! I'm capable of answering questions about Varun's projects, experience, and skills based on his portfolio data. What would you like to know?";
    }

    // 2. Handle 'Who is Varun' / 'About' specifically using the Bio context
    if (/(who is|about|tell me about) varun/i.test(input)) {
      // Return the Bio section
      const bio = portfolioContext.split('CONTACT:')[0].replace(/You are.*?BIO:/s, '').trim();
      return bio;
    }

    // 3. Smart Context Search (The "Info" part)
    const contextMatch = searchContext(userInput);
    if (contextMatch) {
      // Formulate a dynamic-sounding response
      return `Based on Varun's portfolio: \n\n${contextMatch}`;
    }

    // 4. Specific Fallbacks for Vague Queries
    if (input.includes('project')) return "Varun has worked on projects like the Skoda Energy Management System, a Diet Plan RAG Agent, and Career Connect. Ask about one of them!";
    if (input.includes('experience')) return "Varun has experience as an AI Engineer Intern and Security Analyst. He has worked with Vishwakarma University and Beeman & Nimka.";
    if (input.includes('skill') || input.includes('tech')) return "He is skilled in Python, React, Next.js, PyTorch, and cybersecurity tools like BurpSuite.";

    // 5. Ultimate Fallback
    return "I found no specific records for that in the portfolio guidelines. Could you rephrase or ask about his Experience, Projects, or Skills?";
  };

  // Groq / OpenAI-compatible Message Interface
  const buildConversationContext = (userInput: string): Message[] => {
    // Build system message with context
    const systemMessage: Message = {
      role: 'system',
      content: portfolioContext + "\n\nCRITICAL INSTRUCTION: You are Varun Inamdar's professional AI portfolio assistant. Your tone should be helpful, professional, and concise. Do NOT use sci-fi or robotic jargon (e.g., 'Neural link', 'System Online'). Answer questions directly based on the provided context. If a user asks about general topics unrelated to Varun, politely redirect them to his portfolio content."
    };

    // Add recent conversation history (last 10 messages)
    // Map strictly as 'user' or 'assistant'
    const recentHistory = messages.slice(1).slice(-10).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    } as Message));

    // Current user input
    const currentMessage: Message = {
      role: 'user',
      content: userInput
    };

    return [systemMessage, ...recentHistory, currentMessage];
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    // Optimistic update
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const messagesPayload = buildConversationContext(userInput);
      const apiKey = import.meta.env.VITE_GROQ_API;

      if (!apiKey) {
        throw new Error("GROQ API Key not found in environment.");
      }

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "llama3-70b-8192", // High performance model
          messages: messagesPayload.map(m => ({ role: m.role, content: m.content })),
          temperature: 0.7,
          max_tokens: 1000,
          stream: false
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Groq API error: ${response.status} - ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || getFallbackResponse(userInput);

      const assistantMessage: Message = {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, assistantMessage]);

    } catch (error) {
      console.error('Chatbot error:', error);
      const fallbackResponse = getFallbackResponse(userInput);
      const assistantMessage: Message = {
        role: 'assistant',
        content: fallbackResponse,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearConversation = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Conversation history cleared. How can I help you regarding Varun's portfolio?",
        timestamp: new Date(),
      },
    ]);
  };

  // Embedded Mode (IDE Terminal)
  if (embedded) {
    return (
      <div className="flex flex-col h-full w-full bg-slate-950/50">
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {messages.map((message, index) => (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              key={index}
              className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`p-2 rounded-lg max-w-[85%] font-sans text-sm ${message.role === 'user'
                ? 'bg-emerald-600/20 text-emerald-100 border border-emerald-500/30'
                : 'bg-slate-800/50 text-slate-300 border border-white/5'
                }`}>
                {message.role === 'assistant' && (
                  <span className="text-xs text-emerald-400 block mb-1">AI Assistant</span>
                )}
                {message.content}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex gap-2 text-slate-500 text-xs font-sans animate-pulse">
              <span>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-500">➜</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything about Varun..."
            className="flex-1 bg-transparent border-none outline-none text-slate-300 font-sans text-sm placeholder:text-slate-600"
            disabled={isLoading}
          />
        </div>
      </div>
    );
  }

  // Floating Mode (Original)
  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-emerald-600/20 backdrop-blur-md border border-emerald-500/50 text-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-600/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all z-50 group"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-emerald-500/20 duration-1000 -z-10"></span>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] glass border border-white/10 rounded-2xl flex flex-col z-50 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30 relative">
                  <div className="absolute inset-0 bg-emerald-400/20 blur opacity-50 animate-pulse"></div>
                  <Sparkles size={20} className="text-emerald-400 relative z-10" />
                </div>
                <div>
                  <h3 className="font-bold text-white flex items-center gap-2">
                    Portfolio Assistant
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </h3>
                  <p className="text-xs text-emerald-400/70 font-sans">Online</p>
                </div>
              </div>
              <button
                onClick={clearConversation}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-white/5 transition-colors font-sans"
              >
                Clear
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
              {messages.map((message, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index}
                  className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`p-2 rounded-lg h-fit ${message.role === 'user'
                    ? 'bg-slate-700/50 border border-slate-600/30'
                    : 'bg-emerald-600/20 border border-emerald-500/30'
                    }`}>
                    {message.role === 'user' ? (
                      <User size={16} className="text-slate-300" />
                    ) : (
                      <Bot size={16} className="text-emerald-300" />
                    )}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl backdrop-blur-sm ${message.role === 'user'
                    ? 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tr-none'
                    : 'bg-slate-900/60 text-slate-300 border border-white/10 rounded-tl-none shadow-lg'
                    }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-sans">
                      {message.content}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-emerald-600/20 border border-emerald-500/30 h-fit">
                    <Bot size={16} className="text-emerald-300" />
                  </div>
                  <div className="bg-slate-900/60 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/5 bg-slate-950/80 backdrop-blur-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask anything..."
                  className="flex-1 px-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:bg-slate-900/80 text-slate-200 placeholder-slate-600 transition-all font-sans text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-xl hover:bg-emerald-600/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
