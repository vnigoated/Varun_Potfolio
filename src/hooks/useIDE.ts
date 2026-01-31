import { useState, useCallback } from 'react';
import { File, IDEManager } from '../types/ide';

export function useIDE(initialFiles: File[]): IDEManager {
    const [files] = useState<File[]>(initialFiles);
    const [openFiles, setOpenFiles] = useState<string[]>(['home']); // Default open file
    const [activeFileId, setActiveFileId] = useState<string | null>('home');
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
    const [terminalOpen, setTerminalOpen] = useState(true);
    const [activeSidebarItem, setActiveSidebarItem] = useState('explorer');

    const openFile = useCallback((fileId: string) => {
        if (!openFiles.includes(fileId)) {
            setOpenFiles((prev) => [...prev, fileId]);
        }
        setActiveFileId(fileId);
    }, [openFiles]);

    const closeFile = useCallback((fileId: string) => {
        setOpenFiles((prev) => prev.filter((id) => id !== fileId));
        if (activeFileId === fileId) {
            // Switch to the previous tab or null if no tabs left
            setActiveFileId((prevId) => {
                const remaining = openFiles.filter(id => id !== fileId);
                return remaining.length > 0 ? remaining[remaining.length - 1] : null;
            });
        }
    }, [activeFileId, openFiles]);

    const setActiveFile = useCallback((fileId: string) => {
        setActiveFileId(fileId);
    }, []);

    const toggleSidebar = useCallback(() => {
        setSidebarExpanded((prev) => !prev);
    }, []);

    const toggleTerminal = useCallback(() => {
        setTerminalOpen((prev) => !prev);
    }, []);

    const setSidebarItem = useCallback((item: string) => {
        if (activeSidebarItem === item) {
            setSidebarExpanded(prev => !prev); // Toggle if clicking same item
        } else {
            setActiveSidebarItem(item);
            setSidebarExpanded(true);
        }
    }, [activeSidebarItem]);

    return {
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
        setSidebarItem,
    };
}
