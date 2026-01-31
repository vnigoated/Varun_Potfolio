import { File as FileType } from '../../types/ide';
import { ChevronRight, ChevronDown, FileCode, FileJson, FileText, Folder } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface SidebarProps {
    files: FileType[];
    activeFileId: string | null;
    onFileClick: (id: string) => void;
    expanded: boolean;
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

export default function Sidebar({ files, activeFileId, onFileClick, expanded }: SidebarProps) {
    const [foldersOpen, setFoldersOpen] = useState<Record<string, boolean>>({
        'src': true,
        'components': true,
        'pages': true
    });

    const toggleFolder = (folder: string) => {
        setFoldersOpen(prev => ({ ...prev, [folder]: !prev[folder] }));
    };

    if (!expanded) return null;

    // Organize files roughly by "folder" (we can infer or hardcode structure)
    const structure = {
        'src': {
            files: files.filter(f => f.id === 'home'), // e.g. main.tsx
            folders: {
                'components': files.filter(f => f.id !== 'home' && f.id !== 'contact'),
                'pages': files.filter(f => f.id === 'contact') // Just simulating structure
            }
        }
    };

    // Actually, let's keep it simple for now and just list them in a structured way manually
    // We will assume 'activeFileId' highlights the file.

    return (
        <div className="w-64 bg-slate-950 border-r border-white/5 flex flex-col font-mono text-sm z-10 selection:bg-slate-800">
            <div className="h-10 px-4 flex items-center text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Explorer
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                {/* Project Root */}
                <div className="mb-2">
                    <div
                        className="flex items-center gap-1 px-1 py-1 text-slate-300 hover:bg-white/5 rounded cursor-pointer font-bold"
                        onClick={() => toggleFolder('root')}
                    >
                        <ChevronDown size={14} />
                        <span>PORTFOLIO</span>
                    </div>

                    <div className="pl-3 mt-1 space-y-0.5">

                        {/* SRC Folder */}
                        <div>
                            <div
                                className="flex items-center gap-1 px-1 py-1 text-slate-400 hover:bg-white/5 rounded cursor-pointer"
                                onClick={() => toggleFolder('src')}
                            >
                                {foldersOpen['src'] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                <Folder size={14} className="text-violet-400" />
                                <span>src</span>
                            </div>

                            {foldersOpen['src'] && (
                                <div className="pl-4 mt-0.5 border-l border-white/5 ml-1.5 space-y-0.5">
                                    {/* Components Folder */}
                                    <div>
                                        <div
                                            className="flex items-center gap-1 px-1 py-1 text-slate-400 hover:bg-white/5 rounded cursor-pointer"
                                            onClick={() => toggleFolder('components')}
                                        >
                                            {foldersOpen['components'] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                                            <Folder size={14} className="text-cyan-400" />
                                            <span>components</span>
                                        </div>

                                        {foldersOpen['components'] && (
                                            <div className="pl-4 mt-0.5 border-l border-white/5 ml-1.5 space-y-0.5">
                                                {files.filter(f => f.id !== 'home').map(file => (
                                                    <div
                                                        key={file.id}
                                                        onClick={() => onFileClick(file.id)}
                                                        className={cn(
                                                            "flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors text-slate-400 hover:text-white group",
                                                            activeFileId === file.id && "bg-cyan-500/10 text-cyan-400"
                                                        )}
                                                    >
                                                        <FileIcon language={file.language} />
                                                        <span className="truncate">{file.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Main File */}
                                    {files.filter(f => f.id === 'home').map(file => (
                                        <div
                                            key={file.id}
                                            onClick={() => onFileClick(file.id)}
                                            className={cn(
                                                "flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors text-slate-400 hover:text-white group",
                                                activeFileId === file.id && "bg-cyan-500/10 text-cyan-400"
                                            )}
                                        >
                                            <FileIcon language={file.language} />
                                            <span className="truncate">{file.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Config Files (Decorators) */}
                        <div className="flex items-center gap-2 px-2 py-1 text-slate-500 hover:bg-white/5 rounded cursor-pointer">
                            <FileJson size={14} className="text-yellow-600" />
                            <span>package.json</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 text-slate-500 hover:bg-white/5 rounded cursor-pointer">
                            <FileCode size={14} className="text-blue-600" />
                            <span>tsconfig.json</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 text-slate-500 hover:bg-white/5 rounded cursor-pointer">
                            <FileCode size={14} className="text-cyan-600" />
                            <span>tailwind.config.js</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
