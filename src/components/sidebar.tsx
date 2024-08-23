'use client'

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-lime-600"
    },
    {
        label: "Mensagem",
        icon: MessageSquare,
        href: "/message",
        color: "text-indigo-600"
    },
    {
        label: "Imagem",
        icon: ImageIcon,
        href: "/image",
        color: "text-sky-600"
    },
    {
        label: "Video",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-600"
    },
    {
        label: "Música",
        icon: Music,
        href: "/music",
        color: "text-rose-600"
    },
    {
        label: "Código",
        icon: Code,
        href: "/code",
        color: "text-teal-600"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-slate-600"
    },


]

const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full text-white bg-stone-900">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="mr-4">
                        <Image
                            alt="Logo"
                            src="/Logo.svg"
                            height={190}
                            width={190}
                        />
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;