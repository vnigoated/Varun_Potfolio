import { useWindowManager } from '../../hooks/useWindowManager';
import ParticleBackground from '../Canvas/ParticleBackground';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import WindowFrame from './WindowFrame';
import { User, Briefcase, Code, Cpu, BookOpen, Award, Mail, Bot } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

// Content Components
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Skills from '../Skills';
import Research from '../Research'; // Assuming you have this
import Achievements from '../Achievements';
import Contact from '../Contact';
import Chatbot from '../Chatbot';
import Hero from '../Hero'; // Maybe Hero is the "Home" or "Welcome" app?

export default function Desktop() {
    const {
        windows,
        activeWindowId,
        openWindow,
        closeWindow,
        focusWindow,
        minimizeWindow,
        toggleMaximize,
    } = useWindowManager();

    const apps = [
        { id: 'about', title: 'About Me', icon: <User />, component: <About /> },
        { id: 'experience', title: 'Experience', icon: <Briefcase />, component: <Experience /> },
        { id: 'projects', title: 'Projects', icon: <Code />, component: <Projects /> },
        { id: 'skills', title: 'Skills', icon: <Cpu />, component: <Skills /> },
        { id: 'research', title: 'Research', icon: <BookOpen />, component: <Research /> },
        { id: 'achievements', title: 'Achievements', icon: <Award />, component: <Achievements /> },
        { id: 'contact', title: 'Contact', icon: <Mail />, component: <Contact /> },
        { id: 'assistant', title: 'Neural Assistant', icon: <Bot />, component: <Chatbot /> },
    ];

    return (
        <div className="fixed inset-0 overflow-hidden bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
            {/* Dynamic Background */}
            <ParticleBackground />

            {/* Desktop Area */}
            <div className="absolute inset-0 p-8 pt-12 flex flex-col flex-wrap content-start gap-4 z-10 pointer-events-none">

                {/* Welcome Widget / Hero - Maybe open by default? */}
                {/* We can have desktop icons be clickable */}
                <div className="pointer-events-auto flex flex-col gap-4">
                    {apps.map((app) => (
                        <DesktopIcon
                            key={app.id}
                            icon={app.icon}
                            label={app.title}
                            onClick={() => openWindow(app.id, app.title, app.component)}
                        />
                    ))}
                </div>

            </div>

            {/* Windows Layer */}
            <div className="absolute inset-0 pointer-events-none z-20">
                <AnimatePresence>
                    {windows.map((win) => (
                        <div key={win.id} className="pointer-events-auto">
                            <WindowFrame
                                window={win}
                                onClose={closeWindow}
                                onMinimize={minimizeWindow}
                                onMaximize={toggleMaximize}
                                onFocus={focusWindow}
                            />
                        </div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Taskbar */}
            <Taskbar
                windows={windows}
                activeWindowId={activeWindowId}
                onWindowClick={(id) => {
                    const win = windows.find(w => w.id === id);
                    if (win?.isMinimized) {
                        focusWindow(id); // focus handles un-minimize behavior if we modify hook, or we call restore
                    } else if (win?.id === activeWindowId) {
                        minimizeWindow(id);
                    } else {
                        focusWindow(id);
                    }
                }}
            />
        </div>
    );
}
