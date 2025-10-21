import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

interface GeminiMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Varun's AI assistant. Ask me anything about his experience, skills, projects, or how to get in touch!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<GeminiMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const portfolioContext = `
You are an AI assistant for Varun Inamdar's portfolio website. Here is information about Varun:

EDUCATION:
- B.Tech in Artificial Intelligence at Vishwakarma University (CGPA 8.7)
- Honors - Cybersecurity at Vishwakarma University  (CGPA 9.0)

EXPERIENCE:
1. AI Engineer at Drone Project Internship, Southern Command (June 2024 – Dec 2024)
   - Designed payload drone system with high-load capacity and intelligent navigation
   - Implemented object detection, avoidance, and path tracking module

2. Security Analyst - Web Application VA at Beeman (Aug 2025 – Sept 2025)
   - Performed BurpSuite and OWASP ZAP assessment; found unencrypted forms and missing security headers
   - Documented findings per OWASP Top 10 with reproduction steps and mitigations
   - Conducted comprehensive vulnerability assessment and penetration testing (VAPT) on web applications
   - Identified and reported critical security vulnerabilities including SQL injection and XSS flaws

3. Security Analyst - Web Application VA at Nimka (April 2025)
   - Performed BurpSuite and OWASP ZAP assessment
   - Documented findings per OWASP Top 10 with reproduction steps and mitigations

TECHNICAL SKILLS:
- Languages: C, Java, Python, SQL, JavaScript, TypeScript
- Frameworks: React.js, Node.js, Express.js, Tailwind CSS, MongoDB, BigQuery, FastAPI, Flask
- AI/ML: TensorFlow, Scikit-Learn, Pandas, Keras, OpenCV, Streamlit, Hugging Face, Ollama, Gemini
- Tools: Git, OWASP ZAP, BurpSuite, Docker, VS Code, Cursor, Postman, ONNX, Anaconda, Vercel

PROJECTS:
1. Tender Summarizer - NLP pipeline for automated tender document summarization
2. Cybersecurity AI Tutor and Evaluator - Interactive learning platform with adaptive MCQs
3. CNN-based Diabetic Retinopathy Detection - Deep learning model with XAI using Grad-CAM

RESEARCH & PUBLICATIONS:
1. DocSum — PDF summarizer
  - DocSum efficiently extracts key information from PDFs, preserves semantics, and provides targeted, concise summaries via a simple UI to speed document understanding.

2. Explainable DR Detection — Grad-CAM + LLM
  - A deep-learning system for automated diabetic retinopathy detection from fundus images that integrates Grad-CAM and LLM-driven explanations to improve clinician trust while delivering strong accuracy and localization.

ACHIEVEMENTS:
- 3× Hackathon Winner (WILO and IBM)
- IBM Hackathon Winner (First place)
- IBM Business Intelligence Foundations with SQL, ETL & Data Warehousing
- Google Data Analytics Certificate

CONTACT:
- Email: vninamdar03@gmail.com
- Phone: +91 7517277551
- LinkedIn: linkedin.com/in/varun-inamdar03/
- GitHub: github.com/vnigoated

Answer questions about Varun professionally and helpfully. If asked about something not in this context, politely say you don't have that information. Keep responses concise and relevant.
`;

  const getFallbackResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    
    // Handle greetings
    if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return "Hello! I'm Varun's AI assistant. I can tell you about his experience, skills, projects, and achievements. What would you like to know?";
    }
    
    // Handle questions about experience
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      return "Varun has experience as an AI Engineer at Drone Project Internship (Southern Command) and as a Security Analyst at Nimka. He's worked on drone systems, object detection, and web application security assessments.";
    }
    
    // Handle questions about skills
    if (input.includes('skill') || input.includes('technology') || input.includes('tech')) {
      return "Varun's technical skills include Python, Java, JavaScript, TypeScript, React.js, Node.js, TensorFlow, OpenCV, and many more. He's also experienced with AI/ML frameworks and cybersecurity tools.";
    }
    
    // Handle questions about projects
    if (input.includes('project') || input.includes('work')) {
      return "Varun has worked on several projects including a Tender Summarizer (NLP), Cybersecurity AI Tutor, and CNN-based Diabetic Retinopathy Detection. Would you like to know more about any specific project?";
    }
    
    // Handle questions about contact
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('reach')) {
      return "You can contact Varun at vninamdar03@gmail.com or +91 7517277551. You can also find him on LinkedIn (linkedin.com/in/varun-inamdar03/) and GitHub (github.com/vnigoated).";
    }
    
    // Handle questions about education
    if (input.includes('education') || input.includes('degree') || input.includes('university') || input.includes('college')) {
      return "Varun is pursuing a B.Tech in Artificial Intelligence at Vishwakarma University with a CGPA of 8.7. He also has Honors with a CGPA of 9.0.";
    }
    
    // Default response
    return "I'd be happy to help! I can tell you about Varun's experience, skills, projects, education, or how to contact him. What would you like to know?";
  };

  const buildConversationContext = (userInput: string): GeminiMessage[] => {
    // Build conversation history for context
    const contextMessages: GeminiMessage[] = [
      {
        role: 'user',
        parts: [{ text: portfolioContext }]
      },
      {
        role: 'model',
        parts: [{ text: "I understand. I'm Varun's AI assistant and I have all the information about his background, experience, skills, projects, and contact details. I'm ready to help answer any questions about him professionally and accurately." }]
      }
    ];

    // Add recent conversation history (last 10 messages to maintain context)
    const recentHistory = conversationHistory.slice(-10);
    contextMessages.push(...recentHistory);

    // Add current user input
    contextMessages.push({
      role: 'user',
      parts: [{ text: userInput }]
    });

    return contextMessages;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { 
      role: 'user', 
      content: input,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    try {
      // Build context-aware conversation
      const conversationContext = buildConversationContext(userInput);

      const body = {
        contents: conversationContext,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1000,
          topP: 0.8,
          topK: 40,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        ],
      };

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API request failed with status: ${response.status}. ${errorData.error?.message || ''}`);
      }

      const data = await response.json();

      // Google Generative API may return candidates similar to previous shape
      const aiResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.candidates?.[0]?.content?.text ||
        data?.candidates?.[0]?.output ||
        getFallbackResponse(userInput);
      
      // Update conversation history
      const newConversationHistory = [
        ...conversationHistory,
        {
          role: 'user' as const,
          parts: [{ text: userInput }]
        },
        {
          role: 'model' as const,
          parts: [{ text: aiResponse }]
        }
      ];
      setConversationHistory(newConversationHistory);

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
        content: `${fallbackResponse}\n\n(Note: AI service is currently unavailable, but I can still help with basic questions about Varun!)`,
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
        content: "Hi! I'm Varun's AI assistant. Ask me anything about his experience, skills, projects, or how to get in touch!",
        timestamp: new Date(),
      },
    ]);
    setConversationHistory([]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-dark-700 dark:to-dark-600 text-white rounded-full shadow-2xl hover:from-slate-700 hover:to-slate-800 dark:hover:from-dark-600 dark:hover:to-dark-500 transition-all transform hover:scale-110 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-dark-800 rounded-2xl shadow-2xl dark:shadow-dark-900/20 flex flex-col z-50 border border-slate-200 dark:border-dark-700 overflow-hidden transition-colors duration-300">
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-dark-700 dark:to-dark-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 dark:bg-dark-500/30 rounded-full">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold">Varun's AI Assistant</h3>
                <p className="text-xs text-slate-200 dark:text-slate-300">Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={clearConversation}
              className="text-xs text-slate-300 dark:text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-white/10 dark:hover:bg-dark-500/30 transition-colors"
              title="Clear conversation"
            >
              Clear
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-dark-900">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`p-2 rounded-full ${
                    message.role === 'user'
                      ? 'bg-slate-800 dark:bg-slate-600'
                      : 'bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User size={20} className="text-white" />
                  ) : (
                    <Bot size={20} className="text-slate-800 dark:text-slate-100" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-slate-800 dark:bg-slate-600 text-white rounded-tr-none'
                      : 'bg-white dark:bg-dark-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-dark-600 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="p-2 rounded-full bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600">
                  <Bot size={20} className="text-slate-800 dark:text-slate-100" />
                </div>
                <div className="bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 p-3 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-slate-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-400 focus:border-transparent bg-white dark:bg-dark-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-slate-800 dark:bg-slate-600 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
