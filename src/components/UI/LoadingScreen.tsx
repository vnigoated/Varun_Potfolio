import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onLoadingComplete, 500);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 100);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center"
        >
            <div className="w-64 space-y-4">
                <div className="flex justify-between text-cyan-400 font-mono text-sm">
                    <span>INITIALIZING CORE</span>
                    <span>{Math.min(100, Math.floor(progress))}%</span>
                </div>
                <div className="h-1 bg-slate-900 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                        className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-slate-500 font-mono text-xs text-center animate-pulse">
                    LOADING NEURAL INTERFACE...
                </div>
            </div>
        </motion.div>
    );
}
