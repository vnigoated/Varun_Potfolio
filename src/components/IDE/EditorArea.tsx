import { File as FileType } from '../../types/ide';
import { X, FileCode, FileJson, FileText } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface EditorAreaProps {
    files: FileType[];
    openFiles: string[];
    activeFileId: string | null;
    onTabClick: (id: string) => void;
    onTabClose: (id: string) => void;
}

const FileIcon = ({ language }: { language: string }) => {
    switch (language) {
        case 'typescript':
        case 'tsx':
            return <FileCode size={14} className="text-cyan-400" />;
        case 'json':
            return <FileJson size={14} className="text-yellow-400" />;
        case 'css':
            return <FileCode size={14} className="text-blue-400" />;
        case 'html':
            return <FileCode size={14} className="text-orange-400" />;
        case 'markdown':
            return <FileText size={14} className="text-slate-300" />;
        default:
            return <FileText size={14} className="text-slate-400" />;
    }
};

export default function EditorArea({
    files,
    openFiles,
    activeFileId,
    onTabClick,
    onTabClose
}: EditorAreaProps) {

    if (openFiles.length === 0) {
        return (
            <div className="flex-1 bg-slate-900 flex items-center justify-center text-slate-500">
                <div className="text-center">
                    <div className="mb-4 text-6xl opacity-20 filter blur-sm">⌘</div>
                    <p>Select a file to view content</p>
                </div>
            </div>
        );
    }

    const activeFile = files.find(f => f.id === activeFileId);

    return (
        <div className="flex-1 flex flex-col min-w-0 bg-slate-900 overflow-hidden">
            {/* Tab Bar */}
            <div className="flex bg-slate-950 border-b border-white/5 overflow-x-auto no-scrollbar">
                {openFiles.map(fileId => {
                    const file = files.find(f => f.id === fileId);
                    if (!file) return null;
                    const isActive = activeFileId === fileId;

                    return (
                        <div
                            key={fileId}
                            onClick={() => onTabClick(fileId)}
                            className={cn(
                                "group flex items-center gap-2 px-3 py-2.5 min-w-[120px] max-w-[200px] border-r border-white/5 cursor-pointer select-none text-sm transition-colors relative",
                                isActive ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-900/50 hover:text-slate-300"
                            )}
                        >
                            {isActive && <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-400" />}
                            <FileIcon language={file.language} />
                            <span className="truncate flex-1">{file.name}</span>
                            <button
                                onClick={(e) => { e.stopPropagation(); onTabClose(fileId); }}
                                className={cn(
                                    "opacity-0 group-hover:opacity-100 p-0.5 rounded-md hover:bg-white/10 transition-all",
                                    isActive && "opacity-100" // Always show close on active tab
                                )}
                            >
                                <X size={12} />
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Breadcrumbs / Path Bar */}
            {activeFile && (
                <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-xs text-slate-500 font-mono border-b border-white/5">
                    <span>src</span>
                    <span>&gt;</span>
                    <span>pages</span>
                    <span>&gt;</span>
                    <span className="text-slate-300">{activeFile.name}</span>
                </div>
            )}

            {/* Editor Content */}
            <div className="flex-1 overflow-auto custom-scrollbar relative">
                <AnimatePresence mode="wait">
                    {activeFile && (
                        <motion.div
                            key={activeFile.id}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="min-h-full"
                        >
                            {/* Render the component */}
                            {activeFile.content}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
