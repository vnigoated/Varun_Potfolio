import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { WindowState } from '../../types/os';
import { Wifi, Volume2, Battery, AppWindow } from 'lucide-react';

interface TaskbarProps {
    windows: WindowState[];
    activeWindowId: string | null;
    onWindowClick: (id: string) => void;
}

export default function Taskbar({ windows, activeWindowId, onWindowClick }: TaskbarProps) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-4 z-[1000] shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">

            {/* Start Button / System Info */}
            <div className="flex items-center gap-4">
                <button className="p-2 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg hover:brightness-110 transition-all">
                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                        <div className="bg-white rounded-[1px]" />
                        <div className="bg-white rounded-[1px]" />
                        <div className="bg-white rounded-[1px]" />
                        <div className="bg-white rounded-[1px]" />
                    </div>
                </button>
            </div>

            {/* Active Windows List */}
            <div className="flex-1 flex items-center justify-center gap-2 px-4 overflow-x-auto no-scrollbar">
                {windows.map((win) => (
                    <button
                        key={win.id}
                        onClick={() => onWindowClick(win.id)}
                        className={cn(
                            "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-mono transition-all min-w-[140px] max-w-[200px] truncate",
                            win.id === activeWindowId && !win.isMinimized
                                ? "bg-white/10 border-cyan-500/50 text-cyan-50 shadow-[0_0_10px_rgba(34,211,238,0.1)]"
                                : "bg-transparent border-transparent hover:bg-white/5 text-slate-400 hover:text-slate-200"
                        )}
                    >
                        <AppWindow size={14} className={win.id === activeWindowId ? "text-cyan-400" : "text-slate-500"} />
                        <span className="truncate">{win.title}</span>
                    </button>
                ))}
            </div>

            {/* System Tray */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded border border-white/5">
                    <Wifi size={14} />
                    <Volume2 size={14} />
                    <Battery size={14} />
                </div>
                <div className="text-right">
                    <div>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    <div className="text-[10px] text-slate-500">{time.toLocaleDateString()}</div>
                </div>
            </div>
        </div>
    );
}
