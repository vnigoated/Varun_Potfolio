import { ReactNode } from 'react';

interface DesktopIconProps {
    icon: ReactNode;
    label: string;
    onClick: () => void;
}

export default function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
    return (
        <button
            onClick={onClick}
            className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors w-24 text-center focus:outline-none focus:bg-white/10"
        >
            <div className="p-3 bg-slate-900/50 rounded-xl border border-white/10 shadow-lg group-hover:scale-110 group-hover:border-cyan-500/30 transition-all duration-300 relative group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {icon}
                </div>
            </div>
            <span className="text-xs font-mono text-slate-300 group-hover:text-white group-hover:text-glow transition-all truncate w-full px-1">
                {label}
            </span>
        </button>
    );
}
