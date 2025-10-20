# Varun's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works on all devices
- **AI Chatbot**: Interactive assistant powered by Google Gemini AI
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Easy way to get in touch
- **Project Showcase**: Highlighting key projects and achievements

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure AI Chatbot (Optional)**
   - Get a Google AI API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a `.env` file in the project root:
     ```
     VITE_GOOGLE_AI_API_KEY=your_actual_api_key_here
     ```
   - Replace `your_actual_api_key_here` with your actual Gemini API key
   - If no API key is provided, the chatbot will use intelligent fallback responses
   - The chatbot maintains conversation context and memory for better interactions

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Chatbot Features

The AI chatbot provides context-aware conversations about:
- **Experience & Work History**: AI Engineer at Drone Project, Security Analyst at Nimka
- **Technical Skills**: Python, JavaScript, React, TensorFlow, OpenCV, and more
- **Projects**: Tender Summarizer, Cybersecurity AI Tutor, Diabetic Retinopathy Detection
- **Education**: B.Tech in AI at Vishwakarma University
- **Contact Information**: Email, phone, LinkedIn, GitHub

### Advanced Features:
- **Context Memory**: Maintains conversation history for better responses
- **Fallback System**: Works even without API key using intelligent pattern matching
- **Safety Settings**: Built-in content filtering for appropriate responses
- **Real-time Processing**: Fast responses with loading indicators
- **Conversation Management**: Clear conversation button to reset context

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **AI**: Google Gemini API (with fallback responses)
- **Build Tool**: Vite
- **Deployment**: Vercel-ready

## Contact

- Email: vninamdar03@gmail.com
- Phone: +91 7517277551
- LinkedIn: [linkedin.com/in/varun-inamdar03/](https://linkedin.com/in/varun-inamdar03/)
- GitHub: [github.com/vnigoated](https://github.com/vnigoated)
