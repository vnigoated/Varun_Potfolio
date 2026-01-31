import { ReactNode } from 'react';

export interface WindowState {
    id: string;
    title: string;
    component: ReactNode;
    isOpen: boolean;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
}

export interface WindowManager {
    windows: WindowState[];
    activeWindowId: string | null;
    openWindow: (id: string, title: string, component: ReactNode) => void;
    closeWindow: (id: string) => void;
    focusWindow: (id: string) => void;
    minimizeWindow: (id: string) => void;
    restoreWindow: (id: string) => void;
    toggleMaximize: (id: string) => void;
}
