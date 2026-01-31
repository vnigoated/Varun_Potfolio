import { Files, Search, GitBranch, Box, Settings, User } from 'lucide-react';
import { cn } from '../../lib/utils'; // Adjust path if needed

interface ActivityBarProps {
    activeItem: string;
    onItemClick: (item: string) => void;
}

export default function ActivityBar({ activeItem, onItemClick }: ActivityBarProps) {
    const items = [
        { id: 'explorer', icon: <Files size={24} />, label: 'Explorer' },
        { id: 'search', icon: <Search size={24} />, label: 'Search' },
        { id: 'git', icon: <GitBranch size={24} />, label: 'Source Control' },
        { id: 'extensions', icon: <Box size={24} />, label: 'Extensions' },
    ];

    return (
        <div className="w-12 bg-slate-950 border-r border-white/5 flex flex-col justify-between items-center py-4 z-20">
            <div className="flex flex-col gap-6">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onItemClick(item.id)}
                        className={cn(
                            "p-2 rounded-md transition-all relative group",
                            activeItem === item.id
                                ? "text-white"
                                : "text-slate-500 hover:text-slate-300"
                        )}
                        title={item.label}
                    >
                        {activeItem === item.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-400 rounded-r-full" />
                        )}
                        {item.icon}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-6">
                <button className="p-2 text-slate-500 hover:text-slate-300 rounded-md">
                    <User size={24} />
                </button>
                <button className="p-2 text-slate-500 hover:text-slate-300 rounded-md">
                    <Settings size={24} />
                </button>
            </div>
        </div>
    );
}
