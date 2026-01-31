import { useState, useCallback } from 'react';
import { WindowState, WindowManager } from '../types/os';

export function useWindowManager(): WindowManager {
    const [windows, setWindows] = useState<WindowState[]>([]);
    const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
    const [zIndexCounter, setZIndexCounter] = useState(100);

    const focusWindow = useCallback((id: string) => {
        setActiveWindowId(id);
        setZIndexCounter((prev) => prev + 1);
        setWindows((prev) =>
            prev.map((win) =>
                win.id === id ? { ...win, zIndex: zIndexCounter + 1, isMinimized: false } : win
            )
        );
    }, [zIndexCounter]);

    const openWindow = useCallback((id: string, title: string, component: React.ReactNode) => {
        setWindows((prev) => {
            const existing = prev.find((w) => w.id === id);
            if (existing) {
                focusWindow(id);
                return prev.map((w) =>
                    w.id === id ? { ...w, isOpen: true, isMinimized: false } : w
                );
            }
            const newWindow: WindowState = {
                id,
                title,
                component,
                isOpen: true,
                isMinimized: false,
                isMaximized: false,
                zIndex: zIndexCounter + 1,
            };
            setActiveWindowId(id);
            setZIndexCounter((prev) => prev + 1);
            return [...prev, newWindow];
        });
    }, [focusWindow, zIndexCounter]);

    const closeWindow = useCallback((id: string) => {
        setWindows((prev) => prev.filter((w) => w.id !== id));
        if (activeWindowId === id) {
            setActiveWindowId(null);
        }
    }, [activeWindowId]);

    const minimizeWindow = useCallback((id: string) => {
        setWindows((prev) =>
            prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win))
        );
        if (activeWindowId === id) {
            setActiveWindowId(null);
        }
    }, [activeWindowId]);

    const restoreWindow = useCallback((id: string) => {
        setWindows((prev) =>
            prev.map((win) => (win.id === id ? { ...win, isMinimized: false } : win))
        );
        focusWindow(id);
    }, [focusWindow]);

    const toggleMaximize = useCallback((id: string) => {
        setWindows((prev) =>
            prev.map((win) =>
                win.id === id ? { ...win, isMaximized: !win.isMaximized } : win
            )
        );
        focusWindow(id);
    }, [focusWindow]);

    return {
        windows,
        activeWindowId,
        openWindow,
        closeWindow,
        focusWindow,
        minimizeWindow,
        restoreWindow,
        toggleMaximize,
    };
}
