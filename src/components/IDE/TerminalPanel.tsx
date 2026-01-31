import { useState } from 'react';
import { cn } from '../../lib/utils';
import { ChevronUp, ChevronDown, X, Terminal, Activity } from 'lucide-react';
import Chatbot from '../Chatbot'; // We will need to pass an 'embedded' prop to Chatbot

interface TerminalPanelProps {
    isOpen: boolean;
    onToggle: () => void;
}

export default function TerminalPanel({ isOpen, onToggle }: TerminalPanelProps) {
    const [activeTab, setActiveTab] = useState<'TERMINAL' | 'OUTPUT' | 'DEBUG_CONSOLE'>('TERMINAL');

    return (
        <div
            className={cn(
                "bg-slate-950 border-t border-white/5 flex flex-col transition-all duration-300",
                isOpen ? "h-64" : "h-8"
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-8 bg-slate-950/50 hover:bg-slate-900/50 cursor-pointer" onClick={onToggle}>
                <div className="flex items-center gap-6">
                    {['PROBLEMS', 'OUTPUT', 'DEBUG_CONSOLE', 'TERMINAL'].map((tab) => (
                        <button
                            key={tab}
                            onClick={(e) => { e.stopPropagation(); setActiveTab(tab as any); }}
                            className={cn(
                                "text-xs font-mono py-1 relative hover:text-white transition-colors uppercase",
                                activeTab === tab ? "text-white" : "text-slate-500"
                            )}
                        >
                            {tab}
                            {activeTab === tab && <div className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-cyan-400" />}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                    {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    <X size={14} className="hover:text-white" onClick={(e) => { e.stopPropagation(); onToggle(); }} />
                </div>
            </div>

            {/* Content */}
            {isOpen && (
                <div className="flex-1 overflow-hidden relative font-mono text-sm p-4">
                    {activeTab === 'TERMINAL' && (
                        <div className="h-full overflow-hidden">
                            {/* Embedded Chatbot will go here */}
                            {/* Temporary placeholder until we refactor Chatbot */}
                            <div className="h-full flex flex-col">
                                <div className="text-slate-400 mb-2">Welcome to Neural Terminal v2.0. Type a message to interact with the AI Assistant.</div>
                                <div className="flex-1 relative border border-white/10 rounded overflow-hidden bg-slate-900/50">
                                    {/* We need to refactor Chatbot.tsx to support embedded mode first */}
                                    <Chatbot embedded />
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'OUTPUT' && (
                        <div className="text-slate-400 space-y-1">
                            <div>[info] Application started successfully.</div>
                            <div>[info] Connected to Neural Network...</div>
                            <div>[warn] Low aesthetic levels detected in previous version. Upgrading...</div>
                            <div className="text-green-400">[success] Upgrade complete. Theme: Neural Weaver.</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
