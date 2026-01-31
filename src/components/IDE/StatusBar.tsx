import { GitBranch, RefreshCw, Check, AlertCircle, X, Bell } from 'lucide-react';

export default function StatusBar() {
    return (
        <div className="h-6 bg-cyan-950 border-t border-white/5 flex items-center justify-between px-3 text-[10px] font-mono text-slate-300 select-none z-30">

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors">
                    <GitBranch size={10} />
                    <span>main*</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors">
                    <RefreshCw size={10} />
                    <span>0</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors">
                    <AlertCircle size={10} className="text-slate-400" />
                    <span>0</span>
                    <AlertCircle size={10} className="text-slate-400" />
                    <span>0</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer transition-colors">
                    Ln 1, Col 1
                </div>
                <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer transition-colors">
                    UTF-8
                </div>
                <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer transition-colors hover:text-cyan-400">
                    TypeScript React
                </div>
                <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer transition-colors">
                    <div className="flex items-center gap-1">
                        <Check size={10} />
                        <span>Prettier</span>
                    </div>
                </div>
                <div className="hover:bg-white/10 px-2 h-full flex items-center cursor-pointer transition-colors">
                    <Bell size={10} />
                </div>
            </div>
        </div>
    );
}
