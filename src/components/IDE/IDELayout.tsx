import { useIDE } from '../../hooks/useIDE';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import EditorArea from './EditorArea';
import TerminalPanel from './TerminalPanel';
import StatusBar from './StatusBar';
import { AnimatePresence } from 'framer-motion';

// Content Components
import About from '../About';
import Experience from '../Experience';
import Projects from '../Projects';
import Skills from '../Skills';
import Research from '../Research';
import Achievements from '../Achievements';
import Contact from '../Contact';
import Hero from '../Hero';

export default function IDELayout() {
    const initialFiles = [
        { id: 'home', name: 'README.md', language: 'markdown', content: <Hero /> },
        { id: 'about', name: 'About.tsx', language: 'typescript', content: <About /> },
        { id: 'experience', name: 'Experience.tsx', language: 'typescript', content: <Experience /> },
        { id: 'projects', name: 'Projects.tsx', language: 'typescript', content: <Projects /> },
        { id: 'skills', name: 'Skills.json', language: 'json', content: <Skills /> },
        { id: 'research', name: 'Research.md', language: 'markdown', content: <Research /> },
        { id: 'achievements', name: 'Achievements.tsx', language: 'typescript', content: <Achievements /> },
        { id: 'contact', name: 'Contact.tsx', language: 'typescript', content: <Contact /> },
    ];

    const {
        files,
        openFiles,
        activeFileId,
        sidebarExpanded,
        terminalOpen,
        activeSidebarItem,
        openFile,
        closeFile,
        setActiveFile,
        toggleSidebar,
        toggleTerminal,
        setSidebarItem
    } = useIDE(initialFiles);

    return (
        <div className="flex flex-col h-screen bg-slate-950 text-slate-300 overflow-hidden font-sans">
            <div className="flex-1 flex min-h-0">
                {/* Activity Bar (Far Left) */}
                <ActivityBar
                    activeItem={activeSidebarItem}
                    onItemClick={setSidebarItem}
                />

                {/* Sidebar (File Explorer) */}
                <Sidebar
                    files={files}
                    activeFileId={activeFileId}
                    onFileClick={openFile}
                    expanded={sidebarExpanded}
                />

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                    <EditorArea
                        files={files}
                        openFiles={openFiles}
                        activeFileId={activeFileId}
                        onTabClick={setActiveFile}
                        onTabClose={closeFile}
                    />

                    {/* Terminal Panel */}
                    <TerminalPanel
                        isOpen={terminalOpen}
                        onToggle={toggleTerminal}
                    />
                </div>
            </div>

            {/* Status Bar */}
            <StatusBar />
        </div>
    );
}
