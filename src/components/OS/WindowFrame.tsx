import { useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Square, Maximize2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { WindowState } from '../../types/os';

interface WindowFrameProps {
    window: WindowState;
    onClose: (id: string) => void;
    onMinimize: (id: string) => void;
    onMaximize: (id: string) => void;
    onFocus: (id: string) => void;
}

export default function WindowFrame({
    window,
    onClose,
    onMinimize,
    onMaximize,
    onFocus,
}: WindowFrameProps) {
    const dragControls = useDragControls();
    const containerRef = useRef<HTMLDivElement>(null);

    if (window.isMinimized) {
        return null;
    }

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                width: window.isMaximized ? '100vw' : 'min(90vw, 1000px)',
                height: window.isMaximized ? 'calc(100vh - 48px)' : 'min(80vh, 800px)',
                x: window.isMaximized ? 0 : undefined,
                top: window.isMaximized ? 0 : 80,
                left: window.isMaximized ? 0 : undefined
            }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            drag={!window.isMaximized}
            dragListener={false}
            dragControls={dragControls}
            dragMomentum={false}
            dragElastic={0.1}
            whileDrag={{ scale: 1.01 }}
            className={cn(
                "absolute rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl border border-white/10 flex flex-col transition-shadow duration-200",
                window.isMaximized ? "rounded-none fixed inset-0 z-50" : "glass"
            )}
            style={{
                zIndex: window.zIndex,
                boxShadow: window.isMaximized ? 'none' : '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onPointerDown={() => onFocus(window.id)}
        >
            {/* Window Header */}
            <div
                className="h-10 bg-slate-900/80 border-b border-white/5 flex items-center justify-between px-3 cursor-grab active:cursor-grabbing select-none"
                onPointerDown={(e) => {
                    dragControls.start(e);
                    onFocus(window.id);
                }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-600/50" />
                    <span className="text-xs font-mono text-slate-300 tracking-wide uppercase">{window.title}</span>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={(e) => { e.stopPropagation(); onMinimize(window.id); }}
                        className="p-1.5 hover:bg-white/10 rounded text-slate-400 hover:text-white transition-colors"
                    >
                        <Minus size={14} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onMaximize(window.id); }}
                        className="p-1.5 hover:bg-white/10 rounded text-slate-400 hover:text-white transition-colors"
                    >
                        {window.isMaximized ? <Square size={12} /> : <Maximize2 size={12} />}
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onClose(window.id); }}
                        className="p-1.5 hover:bg-red-500/20 rounded text-slate-400 hover:text-red-400 transition-colors"
                    >
                        <X size={14} />
                    </button>
                </div>
            </div>

            {/* Window Content */}
            <div
                className={cn(
                    "flex-1 overflow-auto p-0 scroll-smooth custom-scrollbar bg-slate-950/90 relative",
                    // Add specific inner shadow or patterns here if needed
                )}
            >
                <div className="min-h-full">
                    {window.component}
                </div>
            </div>
        </motion.div>
    );
}
