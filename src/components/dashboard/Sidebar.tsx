"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Users,
    CalendarDays,
    Settings,
    LogOut,
    Dumbbell,
} from "lucide-react";

const sidebarItems = [
    {
        title: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Members",
        href: "/dashboard/members",
        icon: Users,
    },
    {
        title: "Classes",
        href: "/dashboard/classes",
        icon: CalendarDays,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col bg-zinc-950 border-r border-zinc-800">
            <div className="flex h-16 items-center px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-white text-xl">
                    <Dumbbell className="h-6 w-6 text-primary" />
                    <span>FitLife<span className="text-primary">Pro</span></span>
                </Link>
            </div>
            <nav className="flex-1 space-y-1 px-3 py-4">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                        >
                            <div
                                className={cn(
                                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-primary/20 text-primary"
                                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.title}
                            </div>
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-zinc-800">
                <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
                    <LogOut className="h-4 w-4" />
                    Logout
                </button>
            </div>
        </div>
    );
}
