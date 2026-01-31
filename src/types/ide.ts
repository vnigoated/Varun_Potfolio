import { ReactNode } from 'react';

export interface File {
    id: string;
    name: string;
    language: string; // 'typescript', 'json', 'markdown', 'python', etc.
    content: ReactNode;
    icon?: ReactNode;
}

export interface IDEState {
    files: File[];
    openFiles: string[]; // IDs of open files
    activeFileId: string | null;
    sidebarExpanded: boolean;
    terminalOpen: boolean;
    activeSidebarItem: string; // 'explorer', 'search', 'git', etc.
}

export interface IDEManager extends IDEState {
    openFile: (fileId: string) => void;
    closeFile: (fileId: string) => void;
    setActiveFile: (fileId: string) => void;
    toggleSidebar: () => void;
    toggleTerminal: () => void;
    setSidebarItem: (item: string) => void;
}
